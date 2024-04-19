import { deleteTask } from "../../../../data/data.js";
import { Button } from "../../../common/Button.js";

export function Task(task) {
  const container = document.createElement('li');
  
  const deleteButtonElement = Button('X', () => deleteTask(task.id))

  container.append(task.title, deleteButtonElement)
  
  return container;
}
