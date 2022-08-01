import {
    main,    
    hero }
     from './home.js';
import './style.css';

main();

 const content = () => {
    const element = document.createElement('div');
    element.setAttribute('id','content');
    element.textContent = "The Green Dragon";
    element.appendChild(header());
    element.appendChild(hero());
    element.appendChild(footer());
    return element;
 };

const header = () => {
    const header = document.createElement('div');
    const logo = document.createElement('div');
    const navBar = document.createElement('div');
    header.setAttribute('class','header');
    logo.setAttribute('class','logo');
    navBar.setAttribute('class','navBar');
    logo.textContent = 'The Green Dragon Inn';
    header.appendChild(logo);
    header.appendChild(navBar);
    return header;
}
const footer = () => {
    const footer = document.createElement('div');
    footer.setAttribute('class','footer');
    footer.textContent = 'Created by Juan Tafolla'
    return footer;
}


document.body.prepend(content());