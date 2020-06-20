import { combineReducers } from "redux";
import tasks from "./taskReducer";
import projects from "./projectReducer";
import user from "./authReducer";

const rootReducer = combineReducers({
  tasks,
  projects,
  user,
});

export default rootReducer;
