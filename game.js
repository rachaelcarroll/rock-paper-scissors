class Game {
  constructor(type){
    this.human = new Player('Human','🧙');
    this.computer = new Player('Computer', '💻');
    this.gameType = type;
    this.humanFighter = null;
    this.computerFighter = null;
    this.fighters = [];
  }

  randomFighter(){
      var index = Math.floor(Math.random() * this.fighters.length)
      this.computerFighter = this.fighters[index]
      return this.computerFighter;
  }

  chooseGame(){
    if(this.gameType === 'Classic') {
      this.fighters = ['rock', 'paper', 'scissors']
    } else if(this.gameType === 'Magic') {
      this.fighters = ['spell', 'voodoo', 'crystals', 'witch']
    }
  }

  drawGame(){
    if(this.humanFighter === this.computerFighter) {
      return true
    }
  }

  findWinner(){
    this.human.wins = game.human.retrieveWinsFromStorage();
    this.computer.wins = game.computer.retrieveWinsFromStorage();
    if(this.humanFighter === 'rock' && this.computerFighter === 'scissors' ||
    this.humanFighter === 'paper' && this.computerFighter === 'rock' ||
    this.humanFighter === 'scissors' && this.computerFighter === 'paper') {
      this.human.wins += 1;
      this.human.saveWinsToStorage();
      return true;
    } else if(this.humanFighter === 'voodoo' && this.computerFighter === 'witch' ||
      this.humanFighter === 'crystals' && this.computerFighter === 'spell' ||
      this.humanFighter === 'spell' && this.computerFighter === 'voodoo'|| this.humanFighter === 'witch' && this.computerFighter === 'crystals') {
      this.human.wins += 1;
      this.human.saveWinsToStorage();
      return true;
    } else if(this.drawGame()){
      return false;
    } else {
      this.computer.wins += 1;
      this.computer.saveWinsToStorage();
      return false
  }
}

  resetGame(){
    setTimeout(function(){
      middleHeader.innerText = "Choose Your Fighter!";
      hide(displayFightersSection);
      show(chooseFighterSection);
    }, 2000);
  }
}



//A game.js file that contains a Game class.
// A Game should include:
// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of the selected game type
// A way to keep track of which player’s turn it currently is
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
