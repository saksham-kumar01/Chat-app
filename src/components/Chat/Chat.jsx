import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import EmojiPicker from "emoji-picker-react";
import { useUserStore } from "../../lib/userStore";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const endRef = useRef(null);
  const{currentUser} = useUserStore()

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = (e) => {
    setText(text + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src={currentUser?.photoURL || "./avatar.png"} alt="" />
          <div className="texts">
            <span>SAM</span>
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
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              asperiores dolorum, exercitationem maxime aperiam distinctio
              dolor, ad iste eum, eligendi omnis cum nihil. Consectetur sit
              consequuntur totam recusandae fugiat sequi.
            </p>
            <span>1min ago</span>
          </div>
        </div>

        <div className="message-own">
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              asperiores dolorum, exercitationem maxime aperiam distinctio
              dolor, ad iste eum, eligendi omnis cum nihil. Consectetur sit
              consequuntur totam recusandae fugiat sequi.
            </p>
            <span>1min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              asperiores dolorum, exercitationem maxime aperiam distinctio
              dolor, ad iste eum, eligendi omnis cum nihil. Consectetur sit
              consequuntur totam recusandae fugiat sequi.
            </p>
            <span>1min ago</span>
          </div>
        </div>

        <div className="message-own">
          <div className="texts">
            <img src="./dog.jpg" alt="" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              asperiores dolorum, exercitationem maxime aperiam distinctio
              dolor, ad iste eum, eligendi omnis cum nihil. Consectetur sit
              consequuntur totam recusandae fugiat sequi.
            </p>
            <span>1min ago</span>
          </div>
        </div>
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
          <img src="./attach.png" alt="" />
        </div>
        <div className="input">
          <input
            type="text"
            value={text}
            placeholder="Type a Message..."
            onChange={(e) => setText(e.target.value)}
          />
          <button className="send">Send</button>
        </div>
        <div className="mic" id="icons">
          <img src="./mic.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
