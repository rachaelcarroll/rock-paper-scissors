class Game {
  constructor(){
    this.human = new Player('Human','🧙');
    this.computer = new Player('Computer', '💻');
    this.gameType = null;
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
      this.fighters.push('rock', 'paper', 'scissors')
    } else if(this.gameType === 'Magic') {
      this.fighters.push('spell', 'voodoo', 'crystals')
    }
  }

  drawGame(){
    if(this.humanFighter === this.computerFighter) {
      return true
    }
    }

  findWinner(){
    if(this.humanFighter === 'rock' && this.computerFighter === 'scissors' || this.humanFighter === 'paper' && this.computerFighter === 'rock' || this.humanFighter === 'scissors' && this.computerFighter === 'paper') {
      this.human.wins += 1;
      return true;
    } else if(this.humanFighter === 'voodoo' && this.computerFighter === 'crystals' || this.humanFighter === 'crystals' && this.computerFighter === 'spell' || this.humanFighter === 'spell' && this.computerFighter === 'voodoo') {
      this.human.wins += 1;
      return true;
    } else {
      this.computer.wins += 1;
      return false
    }
  }
  }

  // resetGame(){
  //
  // }





//A game.js file that contains a Game class.
// A Game should include:
// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of the selected game type
// A way to keep track of which player’s turn it currently is
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
