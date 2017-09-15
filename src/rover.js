var _ = require('lodash');

/*
  Mars Rover Challenge. 

  Instructions: 
  - Develop an api that moves a rover around on a grid.
  - You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
  - The rover receives a character array of commands.
  - Implement commands that move the rover forward/backward (f,b).
  - Implement commands that turn the rover left/right (l,r).
  - Implement wrapping from one edge of the grid to another. (planets are spheres after all)
  - Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover   moves up to the last possible point and reports the obstacle.

  @params 
  pos = {
    x: number, // x coordinate
    y: number, // y coordinate
    dir: oneOf[N,S,E,W] // cardinal directions
  };
  input = ["L", "L", "M", "M"] // takes L, R, M. L = left, R = right, M = move 1 space. 
  obstacle = {
    x: number, // x coordinate of obstacle
    y: number, // y coordinate of obstacle
  }

*/

function rover(pos, input, obstacle) {
  if (!pos || _.isEmpty(pos)) return "No initial position provided";
  if (!input || !input.length) return "No input provided";

  for (var i = 0; i < input.length; i++) {
    const changeDirection = !!(input[i] === "L" || input[i] === "R");
    if (!pos) return;
    if (changeDirection) {
      pos.dir = turnRover(pos.dir, input[i]);
    } else {
      pos = (input[i] === "F") ? moveRoverForward(pos, obstacle) : moveRoverBackward(pos, obstacle);
    }

  }
  console.log('final pos: ', pos);
  return pos ? pos : "Obstacle detected. Unable to continue.";

};

module.exports = rover;

//helper functions
function turnRover(dir, turn) {

 switch(dir) {
   case "N":
    return turn === "L" ? "W" : "E";
    break;
   case "S":
    return turn === "L" ? "E" : "W";
    break;
   case "E":
    return turn === "L" ? "N" : "S";
    break;
   case "W":
    return turn === "L" ? "S" : "N";
    break;
 }
 
};

function moveRoverForward(pos, obstacle) {

  switch (pos.dir) {
    case "N":
      pos.y++;
      pos.y = pos.y > 10 ? 0 : pos.y;
      break;
    case "S":
      pos.y--;
      pos.y = pos.y < 0 ? 10 : pos.y;
      break;
    case "E":
      pos.x++;
      pos.x = pos.x > 10 ? 0 : pos.x;
      break;
    case "W":
      pos.x--;
      pos.x = pos.x < 0 ? 10 : pos.x;
      break;
  }

  if (pos.x === obstacle.x && pos.y === obstacle.y) {
    console.log('Obstacle in path. Unable to continue');
    return; 
  }

  return pos;

};

function moveRoverBackward(pos, obstacle) {

  switch (pos.dir) {
    case "N":
      pos.y--;
      pos.y = pos.y < 0 ? 10 : pos.y;
      break;
    case "S":
      pos.y++;
      pos.y = pos.y > 10 ? 0 : pos.y;
      break;
    case "E":
      pos.x--;
      pos.x = pos.x < 0 ? 10 : pos.x;
      break;
    case "W":
      pos.x++;
      pos.x = pos.x > 10 ? 0 : pos.x;
      break;
  }

  if (pos.x === obstacle.x && pos.y === obstacle.y) {
    console.log('Obstacle in path. Unable to continue');
    return;
  }

  return pos;

};