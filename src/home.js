export {
    hero
}

 const hero = ()=> {

    const container = document.createElement('div');    
    const hero = document.createElement('div');
    const paraHero = document.createElement('p');
    container.setAttribute('class','container')
    hero.setAttribute('class','hero');
    paraHero.setAttribute('class','paraHero');
    hero.textContent = 'The Green Dragon Inn';
    paraHero.textContent = 'The Green Dragon Inn';
    container.appendChild(hero);
    container.appendChild(paraHero);
    return container;
 };
 const main = ()=>{
    console.log('Hi from home.js'); 
 };