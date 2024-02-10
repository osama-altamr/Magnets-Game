module.exports = class Levels{
    static selectLevel (level){
    let levelAndReq  = [];
        switch(level){
          case 1:
              let level_1 = [
                ['□','O','□','O','□'],
                ['□','□','R','□','□'],
                ['□','□','A','□','□'], 
            ]
         const requiredCell = ['0,0,O','0,2,R','1,4,O','2,4,A']
            levelAndReq.push(level_1,requiredCell)
            return levelAndReq;
            break; 
            
            case 2:
              let level_2 = [
                ['□','□','□','□'],
                ['□','□','O','□'],
                ['R','□','□','□'],
            ]
         const requiredCell2 = ['1,1','1,4']
            levelAndReq.push(level_1,requiredCell)
            return levelAndReq;
            break; 
                 case 3:
              let level_3 = [
                ['□','□','□','□'],
                ['□','□','O','□'],
                ['R','□','□','□'],
            ]
         const requiredCell3 = ['0,4','2,4']
            levelAndReq.push(level_1,requiredCell)
            return levelAndReq;
            break;    
        case 4:
              let level_4 = [
                ['□','□','□'],
                ['□','O','□'],
                ['R','□','□'],
                ['□','O','□'],
                ['□','□','□'],
            ]
         const requiredCell4 = ['0,0','0,2','4,1']
            levelAndReq.push(level_1,requiredCell)
            return levelAndReq;
            break;


            case 5:
                let level_5 = [
                  ['□','□','□'],
                  ['O','□','O'],
                  ['O','□','O'],
                  ['□','R','□'],
            
              ]
           const requiredCell5 = ['0,0','0,2','1,0','1,2','3,0']
              levelAndReq.push(level_1,requiredCell)
              return levelAndReq;
              break;


          
              case 6:
                let level_6 = [
                  ['□','□','□','□','□'],
                  ['□','O','□','O','□'],
                  ['R','□','□','□','□'],
            
              ]
           const requiredCell6 = ['0,3','1,2','2,3']
              levelAndReq.push(level_1,requiredCell)
              return levelAndReq;
              break;
              case 7:
                let level_7 = [
                  ['□','□','□','□'],
                  ['O','□','□','□'],
                  ['O','R','□','O'],
                  ['□','O','O','□'],
                  ['□','□','□','□'],
            
              ]
           const requiredCell7 = ['0,0','1,0','2,3','3,2','4,3']
              levelAndReq.push(level_1,requiredCell)
              return levelAndReq;
              break;


              case 8:
                let level_8= [
                  ['□','□','□','□'],
                  ['□','O','O','□'],
                  ['R','□','□','□'],
              ]
           const requiredCell8 = ['0,0','0,2','2,2']
              levelAndReq.push(level_1,requiredCell)
              return levelAndReq;
              break;  

              
              case 9:
                let level_9= [
                  ['R','□','□','O','□','O','□'],
              ]
           const requiredCell9 = ['0,0','0,2','2,2']
              levelAndReq.push(level_1,requiredCell)
              return levelAndReq;
              break;  
    

                 
              case 10:
                let level_10= [
                  ['R','□','□','□'],
                  ['□','□','□','□'],
                  ['□','□','O','O'],
                  ['□','O','□','□'],
              ]
           const requiredCell10 = ['1,1','1,3','3,0','3,3']
              levelAndReq.push(level_1,requiredCell)
              return levelAndReq;
              break;  
    
        }
    }
}