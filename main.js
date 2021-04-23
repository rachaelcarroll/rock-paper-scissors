//---------------QUERY SELECTORS------------------//
var classicGame = document.getElementById('classicGame');
var magicGame = document.getElementById('magicGame');







//---------------EVENT LISTENERS-----------------//

classicGame.addEventListener('click', chooseClassicFighter);
magicGame.addEventListener('click', chooseMagicFighter)




//---------------FUNCTIONS------------------//

function chooseClassicFighter(){
  hide(classicGame);
  hide(magicGame);
}

function chooseMagicFighter(){
  hide(classicGame);
  hide(magicGame);
}

function hide(element){
  element.classList.add('hidden');
}

function show(element){
  element.classList.remove('hidden')
}
