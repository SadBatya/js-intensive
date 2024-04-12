import { Header } from './Header.js';
import { Value } from './Value.js';
import { Button } from './Button.js';
import { ButtonDecrease } from './ButtonDecrease.js';
export function renderCounter() {
  document.body.innerHTML = '';

  const header = Header();
  const value = Value();
  const button = Button();
  const buttonDecrease = ButtonDecrease()

  document.body.append(header, value, button, buttonDecrease);
}
