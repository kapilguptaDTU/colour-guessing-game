
var headergb=document.getElementById("header-rgb");
var new_color=document.querySelector("#new_color");
var hard=document.getElementById("hard");
var easy=document.getElementById("easy");
var boxes=document.querySelectorAll(".p");
var h1=document.querySelector("h1");
var statusDisplay=document.querySelector("#statusDisplay");
var flag=0;
var boxLength=boxes.length-1;
// var color=randomColor();
hard.classList.toggle("color-sb");
hard.classList.toggle("color-white");
statusDisplay.innerHTML="Pick a color".toUpperCase();

colorSelector();

var myMainColor=mainColor();
function colorSelector(){
for(var i=0; i<=boxLength;i++){
    boxes[i].classList.remove("fade");
boxes[i].style.backgroundColor=randomColor();}
if(boxLength!=boxes.length-1){for(var i=boxLength+1; i<boxes.length;i++){
boxes[i].style.backgroundColor="#232323";
boxes[i].style.border="none";
 boxes[i].classList.remove("fade");}
}



}

headergb.innerHTML=myMainColor.toUpperCase();


function mainColor(){
	var ran=Math.floor(Math.random()*boxLength);

	console.log(ran);
	console.log(boxes[ran].style.backgroundColor);
	return boxes[ran].style.backgroundColor;
}


function randomColor(){
	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);
  console.log("abc "+ r,g,b);
  return ("rgb(" + r + ", " + g + ", " + b + ")");

	// return rgb(0, 255, 255)
}

var clickedColor;

for(var i=0; i<boxes.length;i++)
 {
boxes[i].addEventListener("click",function(){
clickedColor=this.style.backgroundColor ;
console.log(clickedColor,boxes[i]);
var boole=checkColor();
    console.log(boole);
    if(!boole){
        console.log(this.style.backgroundColor);
        this.classList.add("fade");
statusDisplay.innerHTML="Pick another color".toUpperCase();
    }

      })
 }



new_color.addEventListener("click",function(){

	hard.classList.remove("color-sb");
	easy.classList.remove("color-sb");
	hard.classList.remove("color-white");
	easy.classList.remove("color-white");
statusDisplay.innerHTML="Pick a color".toUpperCase();
	h1.style.backgroundColor="steelblue";
	if(this.innerHTML=="NEW COLOR"){
	colorSelector();
	myMainColor=mainColor();
	headergb.innerHTML=myMainColor.toUpperCase();

	console.log(myMainColor);
}
else{
	this.innerHTML="NEW COLOR";
	colorSelector();
	myMainColor=mainColor();
	console.log(myMainColor);
headergb.innerHTML=myMainColor.toUpperCase();
}
})

hard.addEventListener("click",function(){
	this.classList.toggle("color-sb");
this.classList.toggle("color-white");
	easy.classList.remove("color-sb");
	easy.classList.remove("color-white");

statusDisplay.innerHTML="Pick a color".toUpperCase();
flag=0;
new_color.innerHTML=("NEW COLOR");
h1.style.backgroundColor="steelblue";
boxLength=5;
  colorSelector();
  myMainColor=mainColor();
  headergb.innerHTML=myMainColor.toUpperCase();
})
hard.addEventListener("mouseover",function () {
	this.classList.toggle("hover");
})
hard.addEventListener("mouseout",function () {
	this.classList.toggle("hover");
})
easy.addEventListener("mouseover",function () {
	this.classList.toggle("hover");
})
easy.addEventListener("mouseout",function () {
	this.classList.toggle("hover");
})
new_color.addEventListener("mouseover",function () {
	this.classList.toggle("hover");
})
new_color.addEventListener("mouseout",function () {
	this.classList.toggle("hover");
})


easy.addEventListener("click",function(){
this.classList.toggle("color-sb");
this.classList.toggle("color-white");
hard.classList.remove("color-sb");

hard.classList.remove("color-white");

h1.style.backgroundColor="steelblue";
flag=1;
statusDisplay.innerHTML="Pick a color".toUpperCase();
new_color.innerHTML=("NEW COLOR");
boxLength=2;
  colorSelector();
  myMainColor=mainColor();
  headergb.innerHTML=myMainColor.toUpperCase();
})



function checkColor(){
	// console.log("yesssss!!! you did it");
	if(clickedColor==myMainColor)
	{console.log("yesssss!!! you did it"+ myMainColor);
		h1.style.backgroundColor=clickedColor;
		new_color.innerHTML=("PLAY AGAIN?");
		statusDisplay.innerHTML="game over You WON :)".toUpperCase();
     return true;
	}
    return false;


}
function isEasy(){
if(flag==1){return true};
return false;
}
