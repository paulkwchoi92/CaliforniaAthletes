import { combineReducers } from "redux";
// import interests from "./interests_reducer";
import users from "./users_reducer";
// import pins from "./pins_reducer";
// import boards from "./boards_reducer";
import images from "./images_reducer";
import schedules from "./schedules_reducer"
export default combineReducers({
  users,
  images,
  schedules
});
