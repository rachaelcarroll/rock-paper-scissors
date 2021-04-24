var player1 = new Player('Human','🧙')
var computer = new Player('Computer', '💻')

class Game{
  constructor(type){
    this.human = player1;
    this.computer = computer;
    this.gameType = type;
    this.humanFighter = null;
    this.computerFighter = null;
    this.fighters = [];
  }

  chooseGame(){
    if(this.gameType === 'Classic') {
      this.fighters = ['rock', 'paper', 'scissors']
    } else if(this.gameChoice === 'Magic') {
      this.fighters = ['spell', 'voodoo doll', 'crystals']
    }
  }
  
  drawGame(){
    if(this.humanFighter === this.computerFighter) {
      return true
    } else {
      return false
    }

  }

  findWinner(){

  }

  resetGame(){

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
