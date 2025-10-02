import React, { use, useEffect, useRef, useState } from "react";
import "./Chat.css";
import EmojiPicker from "emoji-picker-react";
import { useUserStore } from "../../lib/userStore";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { uploadFile } from "../../lib/s3";

const Chat = () => {
  const [chat, setChat] = useState();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [image, setImage] = useState({
    file: null,
    url: "",
  });

  const endRef = useRef(null);

  const { currentUser } = useUserStore();
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked } =
    useChatStore();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat?.messages]);

  useEffect(() => {
    if (!chatId) {
      console.error("[Chat.jsx] chatId is undefined");
      return;
    }

    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      if (res.exists()) {
        setChat(res.data());
      } else {
        console.warn("[Chat.jsx] No such chat document found");
        setChat({ messages: [] });
      }
    });

    return () => {
      unSub();
    };
  }, [chatId]);

  const handleEmoji = (e) => {
    setText(text + e.emoji);
    setOpen(false);
  };

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setImage({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleSend = async () => {
    if (text.trim() === "") return;
    if (isCurrentUserBlocked) return;

    let imageUrl = null;

    try {
      if (image.file) {
        imageUrl = await uploadFile(image.file);
      }

      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: Date.now(),
          ...(imageUrl && { img: imageUrl }),
        }),
      });

      const userIDs = [currentUser.id, user.id];

      userIDs.forEach(async (id) => {
        const userChatRef = doc(db, "userchats", id);
        const userChatsSnapshot = await getDoc(userChatRef);

        if (userChatsSnapshot.exists()) {
          const userChatsData = userChatsSnapshot.data();

          const chatIndex = userChatsData.chats.findIndex(
            (c) => c.chatId === chatId
          );

          userChatsData.chats[chatIndex] = {
            ...userChatsData.chats[chatIndex],
            lastMessage: text,
            isSeen: id === currentUser.id,
            updatedAt: Date.now(),
          };

          await updateDoc(userChatRef, {
            chats: userChatsData.chats,
          });
        }
      });

      setText("");
    } catch (err) {
      console.log(err);
    }

    setImage({
      file: null,
      url: "",
    });

    setText("");
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src={user?.photoUrl || "./avatar.png"} alt="" />
          <div className="texts">
            <span>{user?.username}</span>
            <p>let's go</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="centre">
        {chat?.messages?.map((message) => (
          <div
            className={
              message.senderId === currentUser.id ? "message-own" : "message"
            }
            key={message?.createdAt}
          >
            <div className="texts">
              {message.img && <img src={message.img} alt="" />}
              <p>{message.text}</p>
              {/* <span>{message.createdAt}</span> */}
            </div>
          </div>
        ))}

        {image.url && (
          <div className="message-own">
            <div className="texts">
              <img src={image.url} alt="" />
            </div>
          </div>
        )}

        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="emogi">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <div className="attach" id="icons">
          <label htmlFor="file" style={{ cursor: "pointer" }}>
            <img src="./attach.png" alt="" />
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleImage}
            />
          </label>
        </div>
        <div className="input">
          <input
            type="text"
            value={text}
            placeholder={
              isCurrentUserBlocked || isReceiverBlocked
                ? "You are blocked"
                : "Type a Message..."
            }
            onChange={(e) => setText(e.target.value)}
            disabled={isCurrentUserBlocked || isReceiverBlocked}
          />
          <button
            className="send"
            onClick={handleSend}
            disabled={isCurrentUserBlocked || isReceiverBlocked}
          >
            Send
          </button>
        </div>
        <div className="mic" id="icons">
          <img src="./mic.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
