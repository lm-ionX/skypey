import { combineReducers } from "redux";
import user from "./user";
import contacts from "./contacts";
import activeUserId from "./activeUserID";
import messages from "./messages";
import typing from "./typing";
import activeChatId from "./activeChatID";

export default combineReducers({
     user,
     messages,
     typing,
     contacts,
     activeUserId,
     activeChatId
});