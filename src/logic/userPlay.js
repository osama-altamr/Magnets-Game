const Structure = require('../structure/structure');
const readlineSync = require("readline-sync");
const MovesCheck =require('../structure/movesCheck')

module.exports= class UserPlay {
   static play(level,reqCells,numOfTries) {
     Structure.printState(level);
     console.log(reqCells)
   for(let i = 0; i < numOfTries; i++){
    const stone =readlineSync.question('Select the stone A for (attractive) | R for  (repulsive) :')
    let cell_row = readlineSync.question('Select the  row ')
    let cell_col = readlineSync.question('Select the  col ')
    if(!MovesCheck.checkMove(level,cell_row,cell_col)){
        console.log('You cannot move to ',`[${cell_row}][${cell_col}]`)
    }
   Structure.applyMove(level,reqCells,cell_row,cell_col,stone,3,5);
   if(i+1===numOfTries){
    const state=  Structure.finalState();
    Structure.isFinal(state,reqCells)
  }
   }
  
   }
}