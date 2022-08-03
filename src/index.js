import { hero } from './home.js';
import { menu } from './menu.js';
import './style.css';
import LogoIcon from './assets/Logo.png';


const header = () => {
    const header = document.createElement('div');
    const logo = document.createElement('img');
    const navBar = document.createElement('div');

    const navHome = document.createElement('button');
    const navMenu = document.createElement('button');
    const navContact = document.createElement('button');

    navHome.textContent = 'Home';
    navMenu.textContent = 'Menu';
    navContact.textContent = 'Contact';

    navBar.appendChild(navHome);
    navBar.appendChild(navMenu);
    navBar.appendChild(navContact);

    header.setAttribute('class','header');
    logo.setAttribute('src',LogoIcon);
    navBar.setAttribute('class','navBar');
    logo.textContent = 'The Green Dragon Inn';

    header.appendChild(logo);
    header.appendChild(navBar);

    // navMenu.addEventListener('click', MenuTab());

    return header;
}
const footer = () => {
    const footer = document.createElement('div');
    footer.setAttribute('class','footer');
    footer.textContent = 'Created by Juan Tafolla'
    return footer;
}

const content = () => {
    const element = document.createElement('div');
    element.setAttribute('id','content');
    element.appendChild(header());
    element.appendChild(hero());
    element.appendChild(footer());
    return element;
 };

//  function MenuTab(){
//     document.body.innerHTML = '';
//     const element = document.createElement('div');
//     element.setAttribute('id','content');
//     element.appendChild(header());
//     element.appendChild(menu());
//     element.appendChild(footer());
//     document.body.prepend(element);
//  }


document.body.prepend(content());