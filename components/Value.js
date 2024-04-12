import { data } from "../data/dataCounter.js"

export function Value(){
  const valuElement = document.createElement('div')
  valuElement.innerText = data.count
  return valuElement
}