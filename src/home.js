export default function printMe();

function printMe(){
  console.log('I get called from home.js!');
};
function home(){
  const element = document.createElement('div');
  element.setAttribute('id','content');
  console.log(printMe());
  return element;
  
}