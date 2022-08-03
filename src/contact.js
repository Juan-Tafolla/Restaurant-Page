export {contact}

const contact = () =>{
    const container = document.createElement('div');
    const title = document.createElement('div');
    const paraPhone = document.createElement('div');
    const paraLocation = document.createElement('div');
    const map = document.createElement('div');
    
    container.setAttribute('class','container');
    title.setAttribute('class', 'title');
    paraPhone.setAttribute('class', 'paraPhone');
    paraLocation.setAttribute('class', 'paraLocation');
    map.setAttribute('class', 'map');

    container.appendChild(title);
    container.appendChild(paraPhone);
    container.appendChild(paraLocation);
    container.appendChild(map);

    return container;
};