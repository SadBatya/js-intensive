import { increaseCount } from "../data/dataCounter.js"


export function Button(){
  const button = document.createElement('button')
  button.innerHTML = 'Count +1'
  button.addEventListener('click', increaseCount)
  return button
}