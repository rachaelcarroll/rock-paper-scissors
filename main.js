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

window.addEventListener('load', retrieveWins)
gameContainer.addEventListener('click', function() {
  playGame(event);
});
chooseFighterSection.addEventListener('click', function() {
  chooseFighter(event);
});
changeGameBtn.addEventListener('click', changeGame)
//---------------FUNCTIONS------------------//

function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden')
}

function playGame(event) {
  if (event.target.id === 'classicGame') {
    hide(gameChoicesContainer);
    chooseFighterSection.innerHTML = '';
    show(chooseFighterSection);
    middleHeader.innerText = 'Choose Your Fighter!'
    chooseFighterSection.innerHTML += `
    <img id='rock' src='./assets/rock.png' alt='rock icon'>
    <img id='paper' src='./assets/paper.png' alt='paper icon'>
    <img id='scissors' src='./assets/scissors.png' alt='scissors icon'>
    `
    game.gameType = 'Classic';
    game.chooseGame();

  } else if (event.target.id === 'magicGame') {
    hide(gameChoicesContainer);
    chooseFighterSection.innerHTML = '';
    show(chooseFighterSection);
    middleHeader.innerText = 'Choose Your Fighter!'
    chooseFighterSection.innerHTML += `
    <img id='spell' src='./assets/spell.png' alt='spell icon'>
    <img id='voodoo' src='./assets/voodoo.png' alt='voodoo icon'>
    <img id='crystals' src='./assets/crystals.png' alt='crystals icon'>
    <img id='witch' src='./assets/witch.png' alt='witch icon'>
    `
    game.gameType = 'Magic';
    game.chooseGame();
  }
}

function chooseFighter(event) {
  if (event.target.id === 'spell') {
    game.humanFighter = 'spell';
  } else if (event.target.id === 'voodoo') {
    game.humanFighter = 'voodoo';
  } else if (event.target.id === 'crystals') {
    game.humanFighter = 'crystals';
  } else if (event.target.id === 'witch') {
    game.humanFighter = 'witch';
  } else if (event.target.id === 'rock') {
    game.humanFighter = 'rock';
  } else if (event.target.id === 'paper') {
    game.humanFighter = 'paper';
  } else if (event.target.id === 'scissors') {
    game.humanFighter = 'scissors';
  }
  hide(chooseFighterSection);
  show(changeGameBtn);
  game.randomFighter();
  show(displayFightersSection)
  displayFighters(game.humanFighter, game.computerFighter);
};

function displayFighters(humanFighter, computerFighter) {
  displayFightersSection.innerHTML = '';
  displayFightersSection.innerHTML += `
    <article class="human-fighter" id="humanFighter">
      <img id=${humanFighter} src='Assets/${humanFighter}.png' alt='${humanFighter} icon'>
    </article>
    <article class="computer-fighter" id="computerFighter">
      <img id=${computerFighter} src='Assets/${computerFighter}.png' alt='${computerFighter} icon'>
    </article>`
  findGameWinner();
};

function findGameWinner() {
  if (game.findWinner()) {
    middleHeader.innerText = '👏 PLAYER1 WINS! 👏';
    numPlayerWins.innerText = game.human.retrieveWinsFromStorage();
  } else if (game.drawGame()) {
    middleHeader.innerText = '🤷🏻 DRAW GAME! 🤷🏼‍♂️';
  } else {
    middleHeader.innerText = '😈 COMPUTER WINS THIS ROUND! 😈'
    numComputerWins.innerText = game.computer.retrieveWinsFromStorage();
  }
  game.resetGame(middleHeader);
};

function changeGame() {
  middleHeader.innerText = 'Choose Your Game!'
  show(gameChoicesContainer);
  hide(displayFightersSection);
  hide(chooseFighterSection);
  hide(changeGameBtn);
};

function retrieveWins() {
  numPlayerWins.innerText = game.human.retrieveWinsFromStorage();
  numComputerWins.innerText = game.computer.retrieveWinsFromStorage();
};
