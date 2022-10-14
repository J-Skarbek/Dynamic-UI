import _ from 'lodash';
import './style.css';
import { appendDropDown } from './dropdown';
// import './dropdown.js';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  return element;
}

function dropDownComponent() {
  const containerDropDown = document.createElement('div');
  containerDropDown.innerHTML = 'Testing'
  return containerDropDown;
}
  
document.body.appendChild(component());
document.body.appendChild(dropDownComponent());
appendDropDown();
