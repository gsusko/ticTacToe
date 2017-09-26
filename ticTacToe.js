var prompt = require('readline-sync');

var TicTacToe = function() {
  this.board = [[1,2,3], [4,5,6], [7,8,9]];
  this.player = 'x';
  this.moves = 0;

}

TicTacToe.prototype.printBoard = function() {
  console.log(`${this.board[0][0]} | ${this.board[0][1]} | ${this.board[0][2]}`);
  console.log(`${this.board[1][0]} | ${this.board[1][1]} | ${this.board[1][2]}`);
  console.log(`${this.board[2][0]} | ${this.board[2][1]} | ${this.board[2][2]}`);
}

var game = new TicTacToe();
game.printBoard();
