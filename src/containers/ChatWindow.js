import React from "react";
import store from "../store";
import Header from "../components/ChatWindow/Header";
import Chats from "../components/ChatWindow/Chats";
import MessageInput from "./MessageInput";
import _ from "lodash";
import "../css/ChatWindow.css";

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMsgs = state.messages[activeUserId];
  const { typing } = state;

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)} />
      <MessageInput value={typing} />
    </div>
  );
};

export default ChatWindow;