import { renderCounter } from "../components/renderCounter.js"

export const data = {
  title: "Counter",
  count: 0,
}


// setInterval(function() {
//   data.count++


//   renderCounter(data)
// }, 1000)

let changedataCallBack = function(){
  alert('hello')

}

export function setchangedataCallBack(newCallBack){
  changedataCallBack = newCallBack
}

export function increaseCount(){
  data.count++
  changedataCallBack()
}


export function decreaseCount(){
  data.count--
  changedataCallBack()
}
