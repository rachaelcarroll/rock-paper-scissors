class Game {
  constructor() {
    this.human = new Player('Human', '🧙');
    this.computer = new Player('Computer', '💻');
    this.gameType = null;
    this.humanFighter = null;
    this.computerFighter = null;
    this.fighters = [];
  }

  randomFighter() {
    var index = Math.floor(Math.random() * this.fighters.length)
    this.computerFighter = this.fighters[index]
    return this.computerFighter;
  }

  chooseGame() {
    if (this.gameType === 'Classic') {
      this.fighters = ['rock', 'paper', 'scissors']
    } else if (this.gameType === 'Magic') {
      this.fighters = ['spell', 'voodoo', 'crystals', 'witch']
    }
  }

  drawGame() {
    if (this.humanFighter === this.computerFighter) {
      return true
    }
  }

  findWinner() {
    this.updateWins();
    if ((this.humanFighter === 'rock' && this.computerFighter === 'scissors') ||
      (this.humanFighter === 'paper' && this.computerFighter === 'rock') ||
      (this.humanFighter === 'scissors' && this.computerFighter === 'paper') ||
      (this.humanFighter === 'voodoo' && this.computerFighter === 'witch') ||
      (this.humanFighter === 'voodoo' && this.computerFighter === 'crystals') ||
      (this.humanFighter === 'crystals' && this.computerFighter === 'spell') ||
      (this.humanFighter === 'spell' && this.computerFighter === 'voodoo') ||
      (this.humanFighter === 'witch' && this.computerFighter === 'crystals') ||
      (this.humanFighter === 'witch' && this.computerFighter === 'spell')) {
      this.human.wins += 1;
      this.human.saveWinsToStorage();
      return true;
    } else if (this.drawGame()) {
      return false;
    } else {
      this.computer.wins += 1;
      this.computer.saveWinsToStorage();
      return false
    }
  }

  resetGame(middleHeader) {
    setTimeout(function() {
      middleHeader.innerText = "Choose Your Fighter!";
      hide(displayFightersSection);
      show(chooseFighterSection);
    }, 1500);
  }

  updateWins(){
    this.human.wins = this.human.retrieveWinsFromStorage();
    this.computer.wins = this.computer.retrieveWinsFromStorage();
  }
}
