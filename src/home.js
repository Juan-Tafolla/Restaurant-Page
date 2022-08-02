export {
    hero,
    main
}
import HeroBG from './assets/hero-bg-image.jpg';

 const hero = ()=> {
       
   //  const heroBG = new Image();
   //  heroBG = HeroBG;
   //  element.appendChild(heroBG);
    const hero = document.createElement('div');
    const heroImage = document.createElement('img');
    heroImage.setAttribute('src',HeroBG);
    hero.setAttribute('class','hero');
    hero.textContent = 'This is a big HERO';

    hero.appendChild(heroImage);
    return hero;
 };
 const main = ()=>{
    console.log('Hi from home.js'); 
 };