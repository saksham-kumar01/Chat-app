import React from 'react'
import './Chat.css'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
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
      <div className="centre"></div>
      <div className="bottom">
        <div className="emogi">
            <img src="./emoji.png" alt="" />
        </div>
        <div className="attach" id="icons">
        <img src="./attach.png" alt="" />
        </div>
        <div className="input">
             <input type="text" placeholder='Type a Message...' />
             <button className="send">Send</button>
        </div>
        <div className='mic' id="icons">
          <img src="./mic.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Chat
