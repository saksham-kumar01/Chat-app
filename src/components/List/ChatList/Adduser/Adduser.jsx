import React, { useState } from "react";
import "./Adduser.css";
import { db } from "../../../../lib/firebase";
import { collection, query, where } from "firebase/firestore";
import { getDocs } from "firebase/firestore";


const Adduser = () => {

  const [user, setUser] = useState(null);


  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");

    try {
      const userRef = collection(db, "users");

      const q = query(userRef, where("username", "==", username));

      const querySnapShot = await getDocs(q);
      if (!querySnapShot.empty) {
        setUser(querySnapShot.docs[0].data());
      } 
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="adduser">
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>
      {user && (
        <div className="user">
          <div className="detail">
            <img src={user.photoUrl || "./avatar.png"} alt="" />
            <span>{user.username}</span>
          </div>
          <button>Add User</button>
        </div>
      )}
    </div>
  );
};

export default Adduser;
