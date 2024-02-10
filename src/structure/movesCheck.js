module.exports = class MovesCheck {
    static newState;
    static checkMove(state, row, col) {
      if(state[row][col]==='□'){
        return true;
      }
    }
    static moveR(state,cell_r,cell_c){
     let cell= this.checkStone('R',state);
     if(cell==undefined){
      return;
    }
     let oldRepX =cell.i;
     let oldRepY=cell.j;
  
     
    
     const  rowMove= this.getRowMove(state,cell_r);
     state[cell_r][cell_c]='R';
     state[oldRepX][oldRepY]='□';
      for(let i = 0 ; i<rowMove.length ; i++ ){
        if(rowMove[i] ==='O' && rowMove[i+1]==='O'){
          break;
        }
        
        if(rowMove[i]==='A' && cell_c < i){
          if(this.checkRightMove(rowMove,i)){
            state[cell_r][i+1]='A';
            state[cell_r][i]='□';
            break;
          }
         }    
         if(rowMove[i]==='A' && cell_c > i){
          if(this.checkLeftMove(rowMove,i)){
            state[cell_r][i-1]='A';
            state[cell_r][i]='□';
            break;
          }
         }        
         
        if(rowMove[i]==='O' && cell_c<i  && !this.checkPrev(rowMove,cell_c)){
          if(this.checkRightMove(rowMove,i)){
            state[cell_r][i+1]='O';
            state[cell_r][i]='□';
            break;
          }
         }         
        if(rowMove[i]==='O' && cell_c>i  && !this.checkNext(rowMove,cell_c)){
         if(this.checkLeftMove(rowMove,i)){
           state[cell_r][i-1]='O';
           state[cell_r][i]='□';
           break;
         }
       }}
       if(this.checkPrev(rowMove,cell_c)  && this.checkNext(rowMove,cell_c)){

        for(let i = 0 ;i<rowMove.length; i++){
          if(rowMove[i]==='O' && cell_c<i){
            if(this.checkRightMove(rowMove,i)){
              state[cell_r][i+1]='O';
              state[cell_r][i]='□';
            }
           }         
          if(rowMove[i]==='O' && cell_c>i){
           if(this.checkLeftMove(rowMove,i)){
             state[cell_r][i-1]='O';
             state[cell_r][i]='□';  
           }
        }      
       }
      }
     const colMove= this.getColMove(state,cell_c,3);
    
     for(let col = 0;col<colMove.length;col++){
      if(colMove[col]==='O' && cell_r<col){
        if(this.checkRightMove(colMove,col)){
          state[col+1][cell_c]='O';
          state[col][cell_c]='□';
          break;
        }
     
       
      }
      if(colMove[col]==='O' && cell_r>col){
        if(this.checkLeftMove(colMove,col)){
          state[col-1][cell_c]='O';
          state[col][cell_c]='□';
          break;
        }
       } 
     }
    return state;
    }
    static moveA(state,cell_r,cell_c){
      const cell= this.checkStone('A',state);
      const oldAttX =cell.i;
      const oldAttY=cell.j;

      let  rowMove= this.getRowMove(state,cell_r);
      state[cell_r][cell_c]='A';
      state[oldAttX][oldAttY]='□';


 
      for(let i = 0;i<rowMove.length;i++){
        if(rowMove[i]==='R'  && cell_c<i){
          if(this.checkLeftMove(rowMove,i)){
            state[cell_r][i-1]='R';
            state[cell_r][i]='□';
           rowMove= this.getRowMove(state,cell_r);
          }
         }

         if(rowMove[i]==='R' && cell_c>i){     
          if(this.checkRightMove(rowMove,i)){
            state[cell_r][i+1]='R';
            state[cell_r][i]='□';
            rowMove= this.getRowMove(state,cell_r);          
          }
         }
        if(rowMove[i]==='O'  && cell_c<i){
          if(this.checkLeftMove(rowMove,i)){
            state[cell_r][i-1]='O';
            state[cell_r][i]='□';
           rowMove= this.getRowMove(state,cell_r);
          }
         }
         if(rowMove[i]==='O' &&rowMove[i+1] ==='□' && cell_c>i){   
          if(this.checkRightMove(rowMove,i)){
            state[cell_r][i+1]='O';
            state[cell_r][i]='□';
            break;
          }
         }
         if(rowMove[i]==='O' &&rowMove[i+1] ==='O' &&rowMove[i+2] ==='□' && cell_c>i){     
          if(this.checkRightMove(rowMove,i)){
            state[cell_r][i]='□';
            state[cell_r][i+1]='O';
            state[cell_r][i+2]='O';
          }
          rowMove= this.getRowMove(state,cell_r);          
         }
      }
      let colMove = this.getColMove(state,cell_c,3);
      for(let col=0;col<colMove.length;col++){
       if(colMove[col]==='O' && cell_c>=col){
        if(this.checkRightMove(colMove,col)){
          state[col][cell_c]='□';
          state[col+1][cell_c]='O';
        }
       } 
       if(colMove[col]==='O' && cell_c<col){
        if(this.checkLeftMove(colMove,col)){
          state[col-1][cell_c]='O';
          state[col][cell_c]='□';
        }
       } 
      }
     return state;
    }

    static getRowMove(state,cell_row){
      return state[cell_row];
    }
    static getColMove(state,cell_col,y){
      let colMove = [];
      for(let i=0;i<y;i++){
        colMove.push(state[i][cell_col])
      }    
      return colMove; 
    }
    static checkStone(stone ,state){
      for(let i = 0;i<3;i++){
        for (let j=0 ;j<5;j++){
         if(state[i][j]==stone){ 
          return {i,j};
         }
        
        }
      }
    }

    static checkLeftMove(arr,i){
      if(i > 0 && arr[--i] !=='A' && arr[--i] !=='R' ){
        return true;
      }
    }
    static checkRightMove(arr,i){
      if(i < (arr.length-1) && arr[++i]==='□' ){
        return true;
      }
      /* arr[++i] !=='A' && arr[++i] !=='R'&& arr[++i] !=='O' */
    }


    static checkPrev(arr,cell_c){
      for (let k = 0;k<cell_c;k++){
        if(arr[k] ==='O'){
          return true;
        }
      }
    }

    static checkNext(arr,cell_c,one_state){
      for(let k = cell_c ;k<arr.length ;k++){
        if(arr[k] ==='O' ){
          return true ;
        }
    }}


    
  };
  