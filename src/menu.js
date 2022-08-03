export { menu }

const menu = () => {
    const container = document.createElement('div');
    const menu = document.createElement('div');
    const title = document.createElement('div');        
    const entries = document.createElement('div');        
    const food = document.createElement('div');        
    const drinks = document.createElement('div');

    container.setAttribute('class','container');
    menu.setAttribute('class','menu');
    title.setAttribute('class','title');
    entries.setAttribute('class','entries');
    food.setAttribute('class','food');
    drinks.setAttribute('class','drinks');
    menu.appendChild(title);
    menu.appendChild(entries);
    menu.appendChild(food);
    menu.appendChild(drinks);
    container.appendChild(menu);
    return container;
 };