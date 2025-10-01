import React from "react";
import "./Details.css";
import { auth, db } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";
import { useChatStore } from "../../lib/chatStore";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";


const Details = () => {
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } =
    useChatStore();
  const { currentUser } = useUserStore();

  const handleBlock = async () => {
    if (!user) return;

    const userDocRef = doc(db, "userchats", currentUser.id);

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="details">
      <div className="user">
        <img src={user?.photoUrl || "./avatar.png"} alt="" />
        <h2>{user?.username}</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div className="info">
        <div className="options">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="options">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="arrowUp.png" alt="" />
          </div>
        </div>
        <div className="options">
          <div className="title">
            <span>Shared Photos</span>
            <img src="arrowUp.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./dog.jpg" alt="" />
                <span>photo_dog_2025</span>
              </div>
              <img src="./download.png" alt="" className="photoDownload" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./dog.jpg" alt="" />
                <span>photo_dog_2025</span>
              </div>
              <img src="./download.png" alt="" className="photoDownload" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./dog.jpg" alt="" />
                <span>photo_dog_2025</span>
              </div>
              <div className="download">
                <img src="./download.png" alt="" className="photoDownload" />
              </div>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./dog.jpg" alt="" />
                <span>photo_dog_2025</span>
              </div>
              <img src="./download.png" alt="" className="photoDownload" />
            </div>
          </div>
        </div>
        <div className="options">
          <div className="title">
            <span>Shared Files</span>
            <img src="arrowUp.png" alt="" />
          </div>
        </div>
        <button onClick={handleBlock}>
          {isCurrentUserBlocked
            ? "You are blocked"
            : isReceiverBlocked
            ? "Unblock User"
            : "Block User"}
        </button>
        <img
          onClick={() => auth.signOut()}
          className="logout"
          src="./turnon.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Details;
