import React, { useState } from "react";
import "./ChatList.css";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchBar">
          <img src="/search.png" alt="" />
          <input type="text" placeholder="Search..." />
        </div>
        <img src="./plus.png" alt="" className="add" />
      </div>
    </div>
  );
};

export default ChatList;
