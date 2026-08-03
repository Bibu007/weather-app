import { Task } from "./task.js";
import { updateTasksStorage } from "./storageService.js";
import { addtoList, deleteFromList } from "./listManager.js";
import PubSub from "pubsub-js";

export function populateTaskMap() {
  let taskMap = {};
  if (localStorage.getItem("tasks")) {
    let temp = JSON.parse(localStorage.getItem("tasks"));
    taskMap = temp;
  } else {
    localStorage.setItem("tasks", JSON.stringify(taskMap));
    console.log("Local Storage empty");
  }

  return taskMap;
}
