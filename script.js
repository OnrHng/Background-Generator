var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bground = document.getElementById("gradient");
var css = document.querySelector("h3");
var randomBtn= document.getElementById("random");

// write on h3 that color code on first page load
setGradient();


function setGradient(){
	bground.style.background = "linear-gradient(to right, " 
	+ color1.value + "," + color2.value + ")";
	css.textContent = bground.style.background;
}
function randomColor(){
	// create 2 random hex code for colors
	var randomColor1 =  Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 =  Math.floor(Math.random()*16777215).toString(16);
	// set color with random button
	bground.style.background="linear-gradient(to right, " 
	+ "#" + randomColor1 + "," + "#"+ randomColor2 + ")";
	css.textContent = bground.style.background;
	color1.value="#" + randomColor1;
	color2.value="#" + randomColor2;

}
randomBtn.addEventListener("click", randomColor);
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
