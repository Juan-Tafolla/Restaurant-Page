export {
    hero,
    main
}

 const hero = ()=> {
    const hero = document.createElement('div');
    hero.setAttribute('class','hero');
    hero.textContent = 'This is a big HERO';
    return hero;
 };
 const main = ()=>{
    console.log('Hi from home.js'); 
 };