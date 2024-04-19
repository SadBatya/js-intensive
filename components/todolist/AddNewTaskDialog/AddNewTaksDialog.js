import { Button } from '../../common/Button.js';
import { addTask, closenAddNewTaskDialog, data } from '../../../data/data.js';
export function addNewTaskDialog() {

  const container = document.createElement('dialog');
  container.open = data.todolist.addNewTaskDialog.isOpen

  const inputElement = document.createElement('input');
  inputElement.placeholder = 'Введите вашу задачу...';

  const saveButton = Button('save', () => addTask(inputElement.value))
  const cancelBtn = Button('cancel', () => closenAddNewTaskDialog())

  container.append(inputElement, saveButton, cancelBtn);

  return container;
}
