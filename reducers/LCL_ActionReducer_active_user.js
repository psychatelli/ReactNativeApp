
// REDUCERS > LCL_REDUCER_ACTIVE_USER_DATA.JS

import USER_SELECTED from '../actions/types';

const INITIAL_STATE = {
    selectedItem: {}
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case USER_SELECTED: {
           return{ 
            ...state,
            selectedItem: action.payload
        };
    }
    default: 
    return state;  
    }
};
 

// export default (state={}, action) => {

//     switch(action.type) {
//         case USER_SELECTED:
//             return action.payload;
//             break;
//     }
//     return state;  
// };


