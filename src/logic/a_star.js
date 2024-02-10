
const HillClimbing=require('./hill_climbing')
const Structure=require('../structure/structure')
class AStart{
    static solveAstar(initState,reqCells){
      console.time("A-STAR:");
      
    let front= new PriorityQueue();
    const heur = HillClimbing.heuristic_function(initState,reqCells);
   front.enqueue(initState,heur);
  

    let explored = new Set();

    while(!front.isEmpty()){
        let currentState = front.dequeue();
   
       if(Structure.isFinal(currentState.item,reqCells)){
        console.timeEnd("A-STAR:")
        console.log("Final State:",currentState.item)
        // console.log("Final Cost",currentState.priority)
        break;

       } 
       explored.add(JSON.stringify(currentState.item));
       for (let s of Structure.nextState(currentState.item,reqCells)) {
        if (!explored.has(JSON.stringify(s))) {
          let cost = 1;
          let heuristic = HillClimbing.heuristic_function(s,reqCells);
          front.enqueue(s, cost + heuristic);
        }
      }
    }
 }

}

module.exports=AStart;


class PriorityQueue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item, priority) {
      let element = { item, priority };
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (element.priority < this.items[i].priority) {
          this.items.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(element);
      }
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
}