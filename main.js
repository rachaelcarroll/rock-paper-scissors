//---------------QUERY SELECTORS------------------//
var classicGame = document.getElementById('classicGame');
var magicGame = document.getElementById('magicGame');
var middleHeader = document.getElementById('chooseGame');
var gameContainer = document.getElementById('gameChoicesContainer');
var chooseFighterSection = document.getElementById('chooseFighterSection');

var game;

//---------------EVENT LISTENERS-----------------//

gameContainer.addEventListener('click', function(){
  playGame(event);
});

chooseFighterSection.addEventListener('click', function(){
  chooseFighter(event);
})

//---------------FUNCTIONS------------------//

function hide(element){
  element.classList.add('hidden');
}

function show(element){
  element.classList.remove('hidden')
}

function playGame(event){
  if(event.target.id === 'classicGame'){
    hide(classicGame);
    hide(magicGame);
    middleHeader.innerText = 'Choose Your Classic Fighter!'
    chooseFighterSection.innerHTML += `
    <img class='rock-fighter' id='rock' src='Assets/rock.png' alt='rock icon'>
    <img class='paper-fighter' id='paper' src='Assets/post-it.png' alt='post-it icon'>
    <img class='scissors-fighter' id='scissors' src='Assets/happy-scissors.png' alt='scissors icon'>
    `
    game = new Game('Classic');
    game.chooseGame();
  }
  if(event.target.id === 'magicGame'){
    hide(classicGame);
    hide(magicGame);
    middleHeader.innerText = 'Choose Your Magic Fighter!'
  chooseFighterSection.innerHTML += `
    <img class='spell-fighter' id='spell' src='Assets/spell.png' alt='spell icon'>
    <img class='voodoo-fighter' id='voodoo' src='Assets/voodoo-doll.png' alt='voodoo doll icon'>
    <img class='crystals-fighter' id='crystals' src='Assets/crystals.png' alt='crystals icon'>
    `
    game = new Game('Magic');
    game.chooseGame();
  }
}

function chooseFighter(event){
  if(event.target.id === 'spell'){
    game.humanFighter = 'spell';
    hide(voodoo);
    hide(crystals);
    game.randomFighter();
  } else if(event.target.id === 'voodoo'){
    game.humanFighter = 'voodoo';
    hide(spell);
    hide(crystals);
    game.randomFighter();
  } else if(event.target.id === 'crystals'){
    game.humanFighter = 'crystals'
    hide(spell);
    hide(voodoo);
    game.randomFighter();
  } else if(event.target.id === 'rock') {
    game.humanFighter = 'rock';
    hide(paper);
    hide(scissors);
    game.randomFighter();
  } else if(event.target.id === 'paper'){
    game.humanFighter = 'paper';
    hide(rock);
    hide(scissors);
    game.randomFighter();
  } else if(event.target.id === 'scissors'){
    game.humanFighter = 'scissors';
    hide(paper);
    hide(rock);
    game.randomFighter();
    console.log(game);
  }
}
