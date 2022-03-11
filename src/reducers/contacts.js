import { contacts } from "../static-data";
import { DELETE_CONTACT } from "../constants/action-types"

const contactReducer = (state = contacts, action) => {
    switch (action.type) {
        case DELETE_CONTACT:
            const contactId = action.payload;
            const { [contactId]: deleted, ...newState } = state
            return newState;
        default:
            return state;
    }
}

export default contactReducer;