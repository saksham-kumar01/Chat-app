import React from "react";
import "./UserInfo.css";
import { useUserStore } from "../../../lib/userStore";

const UserInfo = () => {
  const { currentUser } = useUserStore();
  console.log(currentUser);

  return (
    <div className="user-info">
      <div className="user">
        <img src={currentUser.photoUrl || "./avatar.png"} alt="" />
        <h2>
          {currentUser?.username
            ? currentUser.username.charAt(0).toUpperCase() +
              currentUser.username.slice(1).toLowerCase()
            : "User"}
        </h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
    </div>
  );
};

export default UserInfo;
