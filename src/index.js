import {
    main,    
    hero }
     from './home.js';
import './style.css';

main();

 const content = () => {
    const element = document.createElement('div');
    element.setAttribute('id','content');
    element.appendChild(header());
    element.appendChild(hero());
    element.appendChild(footer());
    return element;
 };

const header = () => {
    const header = document.createElement('div');
    const logo = document.createElement('div');
    const navBar = document.createElement('div');

    const navHome = document.createElement('a');
    const navMenu = document.createElement('a');
    const navContact = document.createElement('a');

    navHome.textContent = 'Home';
    navMenu.textContent = 'Menu';
    navContact.textContent = 'Contact';

    navBar.appendChild(navHome);
    navBar.appendChild(navMenu);
    navBar.appendChild(navContact);

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