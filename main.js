//---------------QUERY SELECTORS------------------//
var classicGame = document.getElementById('classicGame');
var magicGame = document.getElementById('magicGame');
var middleHeader = document.getElementById('chooseGame');
var gameContainer = document.getElementById('gameChoicesContainer');
var chooseFighterSection = document.getElementById('chooseFighterSection');
var displayFightersSection = document.getElementById('displayFighters');
var numPlayerWins = document.getElementById('numPlayerWins');
var numComputerWins = document.getElementById('numComputerWins');

var game;
//---------------EVENT LISTENERS-----------------//

gameContainer.addEventListener('click', function(){
  playGame(event);
});

chooseFighterSection.addEventListener('click', function(){
  chooseFighter(event);
});

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
    <img id='rock' src='Assets/rock.png' alt='rock icon'>
    <img id='paper' src='Assets/paper.png' alt='paper icon'>
    <img id='scissors' src='Assets/scissors.png' alt='scissors icon'>
    `
    game = new Game();
    game.gameType = 'Classic';
    console.log(game.gameType);
    game.chooseGame();
  } else if(event.target.id === 'magicGame'){
    hide(classicGame);
    hide(magicGame);
    middleHeader.innerText = 'Choose Your Magic Fighter!'
    chooseFighterSection.innerHTML += `
    <img class='spell-fighter' id='spell' src='Assets/spell.png' alt='spell icon'>
    <img class='voodoo-fighter' id='voodoo' src='Assets/voodoo.png' alt='voodoo icon'>
    <img class='crystals-fighter' id='crystals' src='Assets/crystals.png' alt='crystals icon'>
    `
    game = new Game();
    game.gameType = 'Magic';
    console.log(game.gameType);
    game.chooseGame();
  }
}

function chooseFighter(event){
  if(event.target.id === 'spell'){
    game.humanFighter = 'spell';
    hide(chooseFighterSection);
    game.randomFighter();
    displayFighters(game.humanFighter, game.computerFighter);
    game.findWinner();
    console.log(game)

  } else if(event.target.id === 'voodoo'){
    game.humanFighter = 'voodoo';
    hide(chooseFighterSection);
    game.randomFighter();
    displayFighters(game.humanFighter, game.computerFighter);
    game.findWinner();

  } else if(event.target.id === 'crystals'){
    game.humanFighter = 'crystals';
    hide(chooseFighterSection);
    game.randomFighter();
    displayFighters(game.humanFighter, game.computerFighter);
    game.findWinner();

  } else if(event.target.id === 'rock') {
    game.humanFighter = 'rock';
    hide(chooseFighterSection);
    game.randomFighter();
    displayFighters(game.humanFighter, game.computerFighter);
    game.findWinner();

  } else if(event.target.id === 'paper'){
    game.humanFighter = 'paper';
    hide(chooseFighterSection);
    game.randomFighter();
    displayFighters(game.humanFighter, game.computerFighter);
    game.findWinner();

  } else if(event.target.id === 'scissors'){
    game.humanFighter = 'scissors';
    hide(chooseFighterSection);
    game.randomFighter();
    displayFighters(game.humanFighter, game.computerFighter);
    findGameWinner();
  }

  function displayFighters(humanFighter, computerFighter){
    displayFightersSection.innerHTML += `
    <article class="human-fighter" id="humanFighter">
      <img id=${humanFighter} src='Assets/${humanFighter}.png' alt='${humanFighter} icon'>
    </article>
    <article class="computer-fighter" id="computerFighter">
      <img id=${computerFighter} src='Assets/${computerFighter}.png' alt='${computerFighter} icon'>
    </article>`
  }
}

 function findGameWinner(){
   if(game.findWinner()){
    numPlayerWins.innerText = game.human.wins;
    chooseGame.innerText = '👏 PLAYER1 WINS! 👏';

    //saveWinsToStorage
    //resetgame


  }
}




//change innertext of choose game/fighter to win or loss or draw
//need to show 'change game' button after players have chosen their fighters
//reset game board
//innertext of wins to update on DOM
//save wins to storage and retrieve from storage
