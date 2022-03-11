import React from "react";
import store from "../store";
import { setTypingValue, sendMessage } from "../actions";
import "../css/MessageInput.css";

const MessageInput = ({ value }) => {

  const handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
  };

  const state = store.getState();

  const handleSubmit = e => {
    e.preventDefault();
    const { typing, activeUserId, activeChatId } = state;
    store.dispatch(sendMessage(typing, activeUserId, activeChatId));
  }

  return (
    <form className="Message" onSubmit={handleSubmit} >
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="write a message"
        />
    </form>
  ); 
};

export default MessageInput;