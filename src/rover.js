var _ = require('lodash');

/*
  Mars Rover Challenge. 

  @params 
  pos = {
    x: number, // x coordinate
    y: number, // y coordinate
    dir: oneOf[N,S,E,W] // cardinal directions
  };
  input = ["L", "L", "F", "B"] // takes L, R, F, B. L = left, R = right, F = move 1 space forwrad, B = move 1 space backward. 
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
    return;
  }

  return pos;

};