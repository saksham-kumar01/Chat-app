import React from "react";
import "./Details.css";

const Details = () => {
  return (
    <div className="details">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Sam</h2>
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
        <button>Block User</button>
        <img className="logout" src="./turnon.png" alt="" />
      </div>
    </div>
  );
};

export default Details;
