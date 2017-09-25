var prompt = require('prompt');

prompt.start();

var board = [[1,2,3], [4,5,6], [7,8,9]];
console.log(board);

var winningCombos = [[1, 5, 9], [1, 4, 7], [1, 2, 3], [2, 5, 8], [3, 5, 7], [3, 6, 9], [4, 5, 6], [7, 8, 9]];
prompt.get(['move'], (err, results) => {
  if (err) {
    throw err;
  }
  if (typeof JSON.parse(results.move) !== 'number') {
    console.log('unable to make move');
  } else {
    console.log('added x to space ' + results.move);

  }
});

function onErr(err) {
   console.log(err);
   return 1;
 }
