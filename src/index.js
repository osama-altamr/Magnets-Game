const Structure = require('./structure/structure')
const Levels = require('./structure/levels')
const readlineSync = require("readline-sync");
const UserPlay= require('./logic/userPlay')
const BFS =  require('./logic/bfs')
const UCS= require('./logic/ucs');
const HillClimbing = require('./logic/hill_climbing');
const AStart = require('./logic/a_star');
selectedLevel = 1;  
const level = Levels.selectLevel(selectedLevel)[0];
const reqCells= Levels.selectLevel(selectedLevel)[1];
// HillClimbing.solveHillClimb(level,reqCells)
AStart.solveAstar(level,reqCells);
// UserPlay.play(level,reqCells,2);
// Structure.nextState(level,reqCells);
// // Structure.deep_copy(level);
// BFS.solveBFS(0,level,reqCells)
//  UCS.solveUCS(level,reqCells)
// console.log(Structure.nextState(level,reqCells))
