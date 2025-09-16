import React, { useState } from "react";
import "./ChatList.css";
import Adduser from "./Adduser/Adduser";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchBar">
          <img src="/search.png" alt="" />
          <input type="text" placeholder="Search..." />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div className="chat-items">
        <div id="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Sam</span>
            <p>Hello</p>
          </div>
        </div>
        <div id="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Sam</span>
            <p>Hello</p>
          </div>
        </div>
        <div id="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Sam</span>
            <p>Hello</p>
          </div>
        </div>
        <div id="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Sam</span>
            <p>Hello</p>
          </div>
        </div>
        <div id="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Sam</span>
            <p>Hello</p>
          </div>
        </div>
        <div id="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Sam</span>
            <p>Hello</p>
          </div>
        </div>
        <div id="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Sam</span>
            <p>Hello</p>
          </div>
        </div>
      </div>
      {addMode && <Adduser />}
    </div>
  );
};

export default ChatList;
