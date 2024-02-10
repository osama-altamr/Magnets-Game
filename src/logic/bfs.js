

const Structure =require('../structure/structure')



module.exports=class BFS{
   static solveBFS(str,state,reqCell) {
     const queue = [];
     const visited = [];
     let index =0;
 
  if(Structure.isFinal(state,reqCell)){
    return true;
  }
  queue.push(state)
  visited.push(state);
  index++;

  console.time("BFS"); // Start the timer
    while (queue.length > 0) {
      index++;
    const current = queue.shift();
    console.log(current)
    if(Structure.isFinal(current,reqCell)){
      console.timeEnd("BFS")
      console.log(index);
      return true;
    }
    for(let s of Structure.nextState(current,reqCell)){
      if(this.checkVisited(visited,s)==false){
           visited.push(s); 
            queue.push(s);
          }
    }
  }
}
static checkVisited(visited,current){
  for(let s of visited){
   if(s!==current){
    return false;
   }
  }
  
}}