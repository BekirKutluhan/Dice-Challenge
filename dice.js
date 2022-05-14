// var dice1 = Math.floor(((Math.random()*6)+1));
// var dice2 = Math.floor(((Math.random()*6)+1));
//


var dice1;
var dice2;
document.querySelector(".container h1").onclick = rollTheDices;

function rollTheDices(){
  dice1= Math.floor(((Math.random()*6)+1));
  dice2=Math.floor(((Math.random()*6)+1));

  var diceImage1 = "images/dice"+dice1+".png";
  var diceImage2 = "images/dice"+dice2+".png";

  document.querySelector(".img1").setAttribute("src",diceImage1);
  document.querySelector(".img2").setAttribute("src",diceImage2);
}
