import React from 'react'
import './UserInfo.css'

const UserInfo = () => {
  return (
    <div className="user-info">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Sam</h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>

    </div>
  );
}

export default UserInfo
