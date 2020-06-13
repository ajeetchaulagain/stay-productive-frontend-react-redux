import { combineReducers } from "redux";
import tasks from "./taskReducer";
import projects from "./projectReducer";

const rootReducer = combineReducers({
  tasks,
  projects,
});

export default rootReducer;
