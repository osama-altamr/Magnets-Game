const readlineSync = require("readline-sync");
const Levels =require('./levels')


const MovesCheck = require('./movesCheck')
module.exports=class Structure {
    static board = Levels.selectLevel(1)[0];
    static goals = Levels.selectLevel(1)[1];
    static state ;
      static applyMove (state,reqCells,cell_row,cell_col,stone,x,y){
        if(stone ==='R'){
        this.state= MovesCheck.moveR(state,cell_row,cell_col);
        this.printState(this.state);
        }if(stone ==='A'){
            this.state =  MovesCheck.moveA(state,cell_row,cell_col)
        this.printState(this.state);
        }
        // return state;
      }
      static finalState(){
        return this.state;
      }
      static printState(state) {
        let output = "";
        for (let row of state) {
          for (let col of row) {
            output += col.toString() + "  ";
          }
          output += "\n";
        }
        console.log(output.trim());
      }
      static isFinal(state, requiredCells) {
        const filteredcells = this.filteredReqCells(requiredCells);
        const equations=this.equationCheck(filteredcells,state);
        let allTrue = equations.every(val => val === true);
        if (allTrue){
            // console.log(
            //     `\n--------------------------- \n|\t YOU WIN\t  |\n---------------------------`
            //   );
            return true;
        }else if(!allTrue) {
            // console.log(
            //     `\n--------------------------- \n|\t NO MORE MOVES\t  |\n---------------------------`
            //   );  
            return false;
        }
      }


      static deep_copy(state){
        let s = new Structure('a');
        s.board = new Array(3);
        for (let i = 0; i < 3; i++) {
          s.board[i] = new Array(5);
          for (let j = 0; j < 5; j++) {
            s.board[i][j] = state[i][j];
          }
        }
        return s.board;
    }
      static nextState(board,requiredCells){
        const moves=  this.check_move(board,3,5);
        let  states =[];
      // let newS=  this.move(state,moves[0].i,moves[0].j,moves[0].stone);
      for(let move of moves){
        const  newState =this.deep_copy(board);
        states.push(this.move(newState,move.i,move.j,move.stone))
      };
      return states;
      }
      static move(board,x,y,p){
        let newState;
        if (p == 'A')     
    {
      newState= MovesCheck.moveA(board,x,y);
    }
   if (p=='R')    {   
       newState= MovesCheck.moveR(board,x,y); 
        }     
        return newState;
    }

      static  check_move(board,x,y) {
        let moves = [];

        for (let i = 0; i < x; i++) {
            for (let j = 0; j < y; j++) {
                if (board[i][j] == '□') {
                    moves.push({i,j,stone:'A'});
                }
            }
        }

        for (let i = 0; i < x; i++) {
            for (let j = 0; j < y; j++) {
                if (board[i][j] == '□') {
                    moves.push({i,j,stone:'R'});
                }
            }
        }
        return moves;
    }




      static equationCheck(filteredcells,state){
        let equations =[];
        for(let i =0;i<filteredcells.length;i++){
            if(state[filteredcells[i].row][filteredcells[i].col] ==='□'){
                equations.push(false);
            }else{
                equations.push(true);
            }
        }
        return equations;
      }
      static filteredReqCells(reqCells){
        let filteredcells= [];
        for(let i =0;i<reqCells.length;i++){
            const cell =this.getCell(reqCells[i]);
            filteredcells.push(cell);
        }
        return filteredcells;
      }
      static getCell(reqCells) {
        const row =  Number(reqCells.split(',')[0]);
        const col = Number(reqCells.split(',')[1]);
        return {row ,col};
       
      }




}