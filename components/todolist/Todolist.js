import { openAddNewTaskDialog } from '../../data/data.js';
import { Button } from '../common/Button.js';
import { addNewTaskDialog } from './AddNewTaskDialog/AddNewTaksDialog.js';
import { Header } from './Header/header.js';
import { TasksList } from './TasksList/TasksList.js';

export function TodoList(todolistData) {
  const container = document.createElement('div');
  const headerElement = Header(todolistData.todolist.title);
  const tasksListElement = TasksList(todolistData.todolist.tasks);
  const addButtonElement = Button('+', () => {openAddNewTaskDialog()});
  const addNewTaskDialogElement = addNewTaskDialog();

  container.append(
    headerElement,
    tasksListElement,
    addButtonElement,
    addNewTaskDialogElement
  );

  return container;
}
