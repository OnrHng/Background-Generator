var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bground = document.getElementById("gradient");

function setGradient(){
	bground.style.background =
	"linear-gradient(to right " 
	+ color1.value + "," + color2.value + ")";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

