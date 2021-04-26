class Player{
  constructor(name, token){
    this.name = name;
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    localStorage.setItem(`${this.name}`, JSON.stringify(this.wins));
  }

  retrieveWinsFromStorage(){
    var wins = JSON.parse(localStorage.getItem(`${this.name}`) || 0);
    return wins;
 }
}
