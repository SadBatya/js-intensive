import { decreaseCount } from "../data/dataCounter.js"


export function ButtonDecrease(){
  const button = document.createElement('button')
  button.innerHTML = 'Count -1'
  button.addEventListener('click', decreaseCount)
  return button
}