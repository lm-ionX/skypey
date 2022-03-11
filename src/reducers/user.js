import { generateUser } from "../static-data";

const userReducer = (state = generateUser(), action) => {
    switch (action.type) {
        
        default:
            return state;
    }
    
}

export default userReducer;