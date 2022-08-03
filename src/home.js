export {
    hero
}

 const hero = ()=> {
       
    const hero = document.createElement('div');
    hero.setAttribute('class','hero');
    hero.textContent = 'The Green Dragon Inn';

    return hero;
 };
 const main = ()=>{
    console.log('Hi from home.js'); 
 };