const Structure = require("../structure/structure");


class HillClimbing {
  
    static solveHillClimb(state,reqCells){

  console.time("HILL CLIMBING"); // Start the timer
    
   let current=state;
    while(current){
       if(Structure.isFinal(current,reqCells)){
        console.timeEnd("HILL CLIMBING")
        const mandist= this.heuristic_function(current,reqCells)
        console.log("Final State:",current)
        console.log("Final Distance",mandist)
        break;
       }
        let distance= Infinity;let newstate;
        console.log(current)
        const nextState= Structure.nextState(current,reqCells);
        for (let i=0;i<nextState.length;i++){
          const mandist= this.heuristic_function(nextState[i],reqCells)
          if(mandist<distance)
            {
                distance = mandist ;
                current=nextState[i];
                console.log(current)
                console.log(distance)
            }

           }
       

    }
}

static heuristic_function(state,requiredCell) {
        let score = 0;
        for (let i = 0; i < requiredCell.length; i++) {
          let [x, y,s] = requiredCell[i].split(',');
          for (let j = 0; j < state.length; j++) {
            for (let k = 0; k < state[j].length; k++) {
          
              if(s==='R' && state[j][k] === 'R'){
                let d = Math.abs(j - x) + Math.abs(k - y);
                score+=d;
              }
              if(s==='A' && state[j][k] === 'A'){
                
                let d = Math.abs(j - x) + Math.abs(k - y);
                
                score+=d;
              }
              if(s==='O' && state[j][k] === 'O'){
                let d = Math.abs(j - x) + Math.abs(k - y);
                score+=d;
              }
            }
          }
        }
        
       return score;
      }
    }
module.exports=HillClimbing