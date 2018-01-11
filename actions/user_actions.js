
// ACTIONS > USER_ACTIONS.JS
import { USER_SELECTED } from './types';

export const selectUser = (user) => {
    console.log("You clicked on user:", user.first);
    return {
        type: USER_SELECTED,
        payload: user
    }
};  
