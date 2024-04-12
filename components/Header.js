import { data } from "../data/dataCounter.js"

export function Header() {
  const titleElement = document.createElement('h2')
  titleElement.innerHTML = data.title
  return titleElement
}
