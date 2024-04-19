import { data, subScribe } from './data/data.js';
import { TodoList } from './components/todolist/Todolist.js';

export function refreshUI() {
  const root = document.querySelector('#root');
  root.innerHTML = '';
  const todoListElement = TodoList(data);
  root.append(todoListElement);
}

refreshUI();
subScribe(refreshUI);
