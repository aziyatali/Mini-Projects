var width = 350;
var height = 350;
var speedMultiplier = 1;
var timing = 1;
var svg = d3.select("#svgcontainer")
 .append("svg")
 .attr("width", width)
 .attr("height", height)
 .style("background-color", "black");

// first shape 
var rect = svg.append("rect")
    .attr("x", 10)
 .attr("y", 10)
 .attr("width", width-20)
 .attr("height", height-20)
 .style("fill", "lightgray");
var ballR = 15;

function getRandomColor() {
 var letters = '0123456789ABCDEF';
 var color = '#';
 for (var i = 0; i < 6; i++) {
   color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
 }
   
 //second shape
let ball = svg.append("circle")
 .attr("cx", width/2)
 .attr("cy", height/2)
 .attr("r", ballR)
 .style("fill", getRandomColor());

let angle = 360.0 * Math.random();
let diffX = Math.sin(angle);
let diffY = Math.cos(angle);
//console.log("diffx", diffX);
//console.log("diffy", diffY);

function moveX() {
// posX is the starting pos of ball at x
let posX = Number(d3.select(this).attr("cx"));
//console.log("posX", posX);
// continious moved position of ball at angle x
let nextX = posX + diffX * speedMultiplier;
// console.log("nextX", nextX);
if (nextX <  ballR + 10 || nextX > width-ballR-10) {
  diffX = -1 * diffX;
  //change the color of the ball each time it touches border
  ball = ball.style("fill", getRandomColor());
//  console.log("DIFX", diffX);
 }
//console.log("if nextX", nextX);
 return nextX;
}

function moveY() {
   //posY is the starting position of ball at y
 let posY = Number(d3.select(this).attr("cy"));
 //continious position of moved ball at angle y
 let nextY = posY + diffY * speedMultiplier;
 if (nextY < ballR + 10 || nextY > height-ballR-10) {
   diffY = -1 * diffY;
   // change the ball color each time it touched border
   ball = ball.style("fill", getRandomColor());
 }
 return nextY;
}

setInterval(function () {
// ball will be positioned to cx and cy angles after
// timing ms
  ball.attr("cx", moveX).attr("cy", moveY);
}, timing);
