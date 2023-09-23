first = Math.floor(Math.random() * 6) + 1;
firstimage = "assets/dice" + first + ".png";
document.querySelector(".user-1").setAttribute("src", firstimage);

second = Math.floor(Math.random() * 6) + 1;
secondimage = "assets/dice" + second + ".png";
document.querySelector(".user-2").setAttribute("src", secondimage);

if (first > second) {
  document.querySelector("h1").innerHTML = "The  WINNER is user 1";
} 

else if (first < second) {
  document.querySelector("h1").innerHTML = "The  WINNER is user 2";
}

else{
  document.querySelector("h1").innerHTML = "It is a draw!";
}
