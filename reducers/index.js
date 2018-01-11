//REDUCER INDEX.JS

import { combineReducers } from 'redux';
//import keys from './keys_reducer';
import UserReducer from './LCL_reducer_data';
import AirReducer from './Air_reducer_data';
import ActiveUserReducer from './LCL_ActionReducer_active_user';


 
const AllReducers = combineReducers({

  users: UserReducer,
  AirList: AirReducer,
  activeUser: ActiveUserReducer,
    //keys: keys,
});
  
export default AllReducers; 