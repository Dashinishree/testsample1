import { combineReducers } from "redux";
import posts from '../reducers/AppReducer'
const reducers=combineReducers({
   posts
})
//used to combine multiple reducer into single reducder
export default reducers;