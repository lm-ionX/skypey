import React from "react";
import { deleteContact, setActiveUserId } from "../actions";
import "../css/User.css";
import store from "../store";

const User = ({ user }) => {
  const { name, profile_pic, status } = user;

  const handleUserClick = ({ user_id }) => {
    store.dispatch(setActiveUserId(user_id));
  }

  const handleCrossClick = (e, user_id) => {
    e.stopPropagation();
    store.dispatch(setActiveUserId(null));
    store.dispatch(deleteContact(user_id));
  }

  return (
    <div className="User" onClick={() => handleUserClick(user)}>
      <p className="User__closeIcon" onClick={(e) => handleCrossClick(e, user.user_id)}> X </p>
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div> 
  );
};

export default User;