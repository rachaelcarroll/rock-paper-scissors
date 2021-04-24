//---------------QUERY SELECTORS------------------//
var classicGame = document.getElementById('classicGame');
var magicGame = document.getElementById('magicGame');
var middleHeader = document.getElementById('chooseGame');
var gameContainer = document.getElementById('gameChoicesContainer');


var newGame;

//---------------EVENT LISTENERS-----------------//

gameContainer.addEventListener('click', function(){
  playGame(event);
});

//---------------FUNCTIONS------------------//

function playGame(event){
  if(event.target.id === 'classicGame'){
    hide(classicGame);
    hide(magicGame);
    middleHeader.innerText = "Choose Your Classic Fighter!"
    gameContainer.innerHTML += `
    <img class='rock-fighter' id='rock' src='Assets/rock.png' alt='rock icon'>
    <img class='paper-fighter' id='paper' src='Assets/post-it.png' alt='post-it icon'>
    <img class='scissors-fighter' id='scissors' src='Assets/happy-scissors.png' alt='scissors icon'>
    `
    newGame = new Game('Classic')
  }
  if(event.target.id === 'magicGame'){
    hide(classicGame);
    hide(magicGame);
    middleHeader.innerText = "Choose Your Magic Fighter!"
    gameContainer.innerHTML += `
    <img class='spell-fighter' id='spell' src='Assets/spell.png' alt='spell icon'>
    <img class='voodoo-fighter' id='voodoo' src='Assets/voodoo-doll.png' alt='voodoo doll icon'>
    <img class='crystals-fighter' id='crystals' src='Assets/crystals.png' alt='crystals icon'>
    `
    newGame = new Game('Magic');
  }
}


function hide(element){
  element.classList.add('hidden');
}

function show(element){
  element.classList.remove('hidden')
}
