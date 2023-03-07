var randomnumber1 = Math.floor(Math.random()*6 +1);
console.log(randomnumber1);
var randomdiceimage = "dice" + randomnumber1 + ".png";
var randomimagesource = "images/" + randomdiceimage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimagesource);



var randomnumber2 = Math.floor(Math.random()*6 +1);
console.log(randomnumber2);
var randomdiceimage2 = "images/dice" + randomnumber2 + ".png"

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomdiceimage2);

if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML= "Player 1 wins!";
}
else if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML ="Player 2 wins!";
}
else {
    document.querySelector("h1").innerHTML = "Its a Draw :)";
}
