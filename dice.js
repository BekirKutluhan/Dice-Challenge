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
if(dice1>dice2)
  {
    document.querySelector(".img1").setAttribute("src",diceImage1);
    document.querySelector(".img2").setAttribute("src",diceImage2);
    document.querySelector(".container h1").innerHTML = "<i class='fas fa-pennant'></i>First Player WINS";
  }
  else if(dice1<dice2){
    document.querySelector(".img1").setAttribute("src",diceImage1);
    document.querySelector(".img2").setAttribute("src",diceImage2);
      document.querySelector(".container h1").innerHTML = "Second Player WINS<i class='fas fa-pennant'></i>";
  }
}
