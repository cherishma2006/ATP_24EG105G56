import { validateTitle,validatePriority,validateDueDate } from "./validate.js";
let tasks=[]
// 1. Add new task
                    export function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      if(!validateTitle() && !validatePriority() && !validateDueDate()){
                        return "invalid task";
                      }
                      tasks.push({title,priority,dueDate})
                      return tasks;
                    }
// 2. Get all tasks
                    function getAllTasks() {
                      return getAllTasks()
                    }