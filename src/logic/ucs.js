
const BFS= require('./bfs')

const Structure=require('../structure/structure')
module.exports=class UCS{
    static solveUCS(start,reqCell){
        var queue = new PriorityQueue();
        const visited = [];
        console.time("UCS Time");
        let index= 0;
        queue.enqueue(start, 0);
        visited.push(start);
      
        while (!queue.isEmpty()) {
          index++;
          const currentQueueElement = queue.dequeue();
          const currentElement = currentQueueElement.element;
          console.log(currentElement)
      
          if(Structure.isFinal(currentElement,reqCell)){
            console.timeEnd("UCS Time")
            console.log(index);
            return true;
          }

          // console.log(queue.printPQueue())
      
          for(let s of Structure.nextState(currentElement,reqCell)){
            if(BFS.checkVisited(visited,s)==false){
              // let cost = this.calcCost(nextState,parentMap);
                queue.enqueue(s, 1);
                visited.push(s); 
                }
          }
        }
    }
    static calcCost(state,parentMap) {
      let cost = 0;
      while (state) {
        cost++;
        state = parentMap.get(state);
      }
      return cost;
    }
}









class QElement {
    constructor(element, priority) {
      this.element = element;
      this.priority = priority;
    }
  }
 
  class PriorityQueue {
    constructor() {
      this.items = [];
    }
    enqueue(element, priority) {
      var qElement = new QElement(element, priority);
      var contain = false;
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].priority > qElement.priority) {
          this.items.splice(i, 0, qElement);
          contain = true;
          break;
        }
      }
      if (!contain) {
        this.items.push(qElement);
      }
    }
    dequeue() {
      if (this.isEmpty()) return "Underflow";
      return this.items.shift();
    }
    front() {
      if (this.isEmpty()) return "No elements in Queue";
      return this.items[0];
    }
    rear() {
      if (this.isEmpty()) return "No elements in Queue";
      return this.items[this.items.length - 1];
    }
    isEmpty() {
      return this.items.length == 0;
    }
  }