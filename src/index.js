// import printMe from './home.js';
import './style.css';
//import Icon from './icon.png';

function content(){
    const element = document.createElement('div');
    element.setAttribute('id','content');
    element.textContent = "The Green Dragon";
    return element;
 }
 document.body.prepend(content());