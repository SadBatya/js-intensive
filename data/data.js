export const data = {
  todolist: {
    id: crypto.randomUUID(),
    title: 'Todolist',
    tasks: [
      {
        id: crypto.randomUUID(),
        title: 'Learn HTML'
      },
      {
        id: crypto.randomUUID(),
        title: 'Learn CSS'
      },
      {
        id: crypto.randomUUID(),
        title: 'Learn JS' 
      },
      {
        id: crypto.randomUUID(),
        title: 'Learn React'
      },
    ],
    addNewTaskDialog: {
      isOpen: false,
    }
  }
}

let notifySubcsriber = function(){}

export function subScribe(subScriber){
  notifySubcsriber = subScriber
}

export function deleteTask(taskId){
  const tasks = data.todolist.tasks
  data.todolist.tasks = tasks.filter(task => task.id !== taskId)
  notifySubcsriber() // refreshUI()
}

export function openAddNewTaskDialog(){
  data.todolist.addNewTaskDialog.isOpen = true

  notifySubcsriber()

}

export function closenAddNewTaskDialog(){
  data.todolist.addNewTaskDialog.isOpen = false
  notifySubcsriber()
}

export function addTask(tasktitle){
  const newTask = {
    id: crypto.randomUUID(),
    title: tasktitle,
  }
  data.todolist.tasks = [...data.todolist.tasks, newTask]
  data.todolist.addNewTaskDialog.isOpen = false
  notifySubcsriber()
}