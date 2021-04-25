//---------------QUERY SELECTORS------------------//
var classicGame = document.getElementById('classicGame');
var magicGame = document.getElementById('magicGame');
var middleHeader = document.getElementById('chooseGame');
var gameContainer = document.getElementById('gameChoicesContainer');
var chooseFighterSection = document.getElementById('chooseFighterSection');
var displayFightersSection = document.getElementById('displayFighters');
var numPlayerWins = document.getElementById('numPlayerWins');
var numComputerWins = document.getElementById('numComputerWins');
var changeGameBtn = document.getElementById('changeGame');

var game = new Game();
//---------------EVENT LISTENERS-----------------//

gameContainer.addEventListener('click', function(){
  playGame(event);
});

chooseFighterSection.addEventListener('click', function(){
  chooseFighter(event);
});

changeGameBtn.addEventListener('click', changeGame)
//---------------FUNCTIONS------------------//

function hide(element){
  element.classList.add('hidden');
}

function show(element){
  element.classList.remove('hidden')
}

function playGame(event){
  if(event.target.id === 'classicGame'){
    hide(gameChoicesContainer);
    chooseFighterSection.innerHTML = '';
    show(chooseFighterSection);
    middleHeader.innerText = 'Choose Your Fighter!'
    chooseFighterSection.innerHTML += `
    <img id='rock' src='Assets/rock.png' alt='rock icon'>
    <img id='paper' src='Assets/paper.png' alt='paper icon'>
    <img id='scissors' src='Assets/scissors.png' alt='scissors icon'>
    `
    game.gameType = 'Classic';
    console.log(game.gameType);
    game.chooseGame();

  } else if(event.target.id === 'magicGame'){
    hide(gameChoicesContainer);
    chooseFighterSection.innerHTML = '';
    show(chooseFighterSection);
    middleHeader.innerText = 'Choose Your Fighter!'
    chooseFighterSection.innerHTML += `
    <img class='spell-fighter' id='spell' src='Assets/spell.png' alt='spell icon'>
    <img class='voodoo-fighter' id='voodoo' src='Assets/voodoo.png' alt='voodoo icon'>
    <img class='crystals-fighter' id='crystals' src='Assets/crystals.png' alt='crystals icon'>
    `
    game.gameType = 'Magic';
    console.log(game);
    game.chooseGame();
  }
}

function chooseFighter(event){
  if(event.target.id === 'spell'){
    game.humanFighter = 'spell';
    hide(chooseFighterSection);
    show(changeGameBtn);
    game.randomFighter();
    show(displayFightersSection)
    displayFighters(game.humanFighter, game.computerFighter);
    // findGameWinner();

  }else if(event.target.id === 'voodoo'){
    game.humanFighter = 'voodoo';
    hide(chooseFighterSection);
    show(changeGameBtn);
    game.randomFighter();
    show(displayFightersSection)
    displayFighters(game.humanFighter, game.computerFighter);

  }else if(event.target.id === 'crystals'){
    game.humanFighter = 'crystals';
    hide(chooseFighterSection);
    show(changeGameBtn);
    game.randomFighter();
    show(displayFightersSection)
    displayFighters(game.humanFighter, game.computerFighter);

  }else if(event.target.id === 'rock') {
    game.humanFighter = 'rock';
    hide(chooseFighterSection);
    show(changeGameBtn);
    game.randomFighter();
    show(displayFightersSection)
    displayFighters(game.humanFighter, game.computerFighter);

  } else if(event.target.id === 'paper'){
    game.humanFighter = 'paper';
    hide(chooseFighterSection);
    show(changeGameBtn);
    game.randomFighter();
    show(displayFightersSection)
    displayFighters(game.humanFighter, game.computerFighter);

  } else if(event.target.id === 'scissors'){
    game.humanFighter = 'scissors';
    hide(chooseFighterSection);
    show(changeGameBtn);
    game.randomFighter();
    show(displayFightersSection)
    displayFighters(game.humanFighter, game.computerFighter);
  }

  function displayFighters(humanFighter, computerFighter){
    displayFightersSection.innerHTML = '';
    displayFightersSection.innerHTML += `
    <article class="human-fighter" id="humanFighter">
      <img id=${humanFighter} src='Assets/${humanFighter}.png' alt='${humanFighter} icon'>
    </article>
    <article class="computer-fighter" id="computerFighter">
      <img id=${computerFighter} src='Assets/${computerFighter}.png' alt='${computerFighter} icon'>
    </article>`
     findGameWinner();
  }
}

 function findGameWinner(){
   if(game.findWinner()){
    middleHeader.innerText = '👏 PLAYER1 WINS! 👏';
    numPlayerWins.innerText = game.human.wins;
  } else if(game.drawGame()){
    middleHeader.innerText = '😭 DRAW GAME! 😭';
  } else {
    middleHeader.innerText = '😈 COMPUTER WINS THIS ROUND! 😈'
    numComputerWins.innerText = game.computer.wins;
  }
  game.resetGame();
}

function changeGame(){
  middleHeader.innerText = 'Choose Your Game!'
  show(gameChoicesContainer);
  hide(displayFightersSection);
  hide(chooseFighterSection);
  hide(changeGameBtn);
  console.log(game);
}

// function resetBoard() {
//   game.resetGame();
// }


// function retrieveWins(){
//
// }
// if(game.gameType === 'Magic'){
  //   // show(chooseFighterSection);
  //   chooseFighterSection.innerHTML += `
  //   <img class='spell-fighter' id='spell' src='Assets/spell.png' alt='spell icon'>
  //   <img class='voodoo-fighter' id='voodoo' src='Assets/voodoo.png' alt='voodoo icon'>
  //   <img class='crystals-fighter' id='crystals' src='Assets/crystals.png' alt='crystals icon'>
  //   `
  // }


//change innertext of choose game/fighter to win or loss or draw
//need to show 'change game' button after players have chosen their fighters
//reset game board
//innertext of wins to update on DOM
//save wins to storage and retrieve from storage
