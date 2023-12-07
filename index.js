var randomNumber1 = Math.random();

randomNumber1= 6*Math.random();
var number1;
    number1 = Math.floor(randomNumber1) + 1;

var randomimage1 = "dice" + number1 + ".png";
var randomsource1 = "images/" +  randomimage1;
var randomNumber2 = Math.random();

randomNumber2= 6*Math.random();
var number2;
    number2 = Math.floor(randomNumber2) + 1;

var randomimage2 = "dice" + number2 + ".png";
var randomsource2 = "images/" +  randomimage2;




var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src",randomsource1);
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src",randomsource2);
if(number1> number2){
    document.querySelector("h1").innerHTML= "player1 win";

}
 else if(number1 <number2){
   document.querySelector("h1").innerHTML= "player2 win";

}
else{ 
    document.querySelector("h1").innerHTML= "match draw";
}
