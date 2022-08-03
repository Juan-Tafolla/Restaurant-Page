import { hero } from './home.js';
import { menu } from './menu.js';
import { contact } from './contact.js';
import './style.css';
import LogoIcon from './assets/Logo.png';
import pageIcon from './assets/dragonIcon.png'

let condition = '';
const content = document.querySelector('#content');
const iconLink = document.createElement('link');
iconLink.setAttribute('rel','icon');
iconLink.setAttribute('type','image/x-icon');
iconLink.setAttribute('href',pageIcon);
console.log(iconLink);
document.head.appendChild(iconLink)

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

    //buton functionality
    navHome.addEventListener('click', ()=>{
        condition = 'home';
        run(condition);
    });
    navMenu.addEventListener('click', ()=>{
        condition = 'menu';
        run(condition);
    });
    navContact.addEventListener('click', ()=>{
        condition = 'contact';
        run(condition);
    });

    navBar.appendChild(navHome);
    navBar.appendChild(navMenu);
    navBar.appendChild(navContact);

    header.setAttribute('class','header');
    logo.setAttribute('src',LogoIcon);
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
run();
function run(condition){
if (condition == 'menu') {
    content.innerHTML = "";
    content.appendChild(header());
    content.appendChild(menu());
    content.appendChild(footer());  
} else if(condition == 'contact'){
    content.innerHTML = "";
    content.appendChild(header());
    content.appendChild(contact());
    content.appendChild(footer());    
} else{
    content.innerHTML = "";
    content.appendChild(header());
    content.appendChild(hero());
    content.appendChild(footer());    
}
}