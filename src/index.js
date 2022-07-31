import printMe from './module.js';


 function content(){
    const element = document.createElement('div');
    element.setAttribute('id','content');
    return element;
 }
 document.body.prepend(content());