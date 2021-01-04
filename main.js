/*var ctxNum = [];
ctxNum[0] = "0";
ctxNum[1] = "1";
ctxNum[2] = "2";
ctxNum[3] = "3";

var correct = 0;
var questions = 0;
var answer = 0;

var okToClick = 0;

for (var i=0; i<ctxNum.length; i++)
    addEventListeners(ctxNum[i],i);

ctxElement = new Array();
ctx = new Array();
for (var i = 0 ; i < ctxNum.length; i++) {
    ctxElement[i] = document.getElementById(ctxNum[i]);
	ctx[i] = ctxElement[i].getContext('2d');
}

var btnNext = document.getElementById("next");
var txtScore = document.getElementById("score");

function addEventListeners(id,num){
		document.getElementById(id).addEventListener("click", function(){userClicked(id);}, false);
}*/

var c = document.getElementById("room");
var ctx = c.getContext("2d");

var roomNum = 0;

function init()
{
	roomZero();
	
	/*ctx[0].font="42px Arial";
	ctx[0].fillText("Calculus Game 1.2",50,100);
	ctx[0].font="25px Arial";
	ctx[0].fillText("v = velocity",150,150);
	ctx[0].fillText("t = time",150,175);
	ctx[0].fillText("f = distance",150,200);
	ctx[0].fillText("c = constant",150,225);
	ctx[0].font="42px Arial";
	ctx[0].fillText("f = vt + c",125,300);		
	ctx[0].fillText("Press to Start",100,375);*/
}

function drawDoor()
{
	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.fillRect(150, 125, 100, 200);
	ctx.rect(150, 125, 100, 200);
	ctx.stroke();
}

function drawSwitch()
{
	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.fillRect(150, 125, 50, 100);
	ctx.rect(160, 140, 30, 70);
	ctx.stroke();
}

function moveUp()
{
	if (roomNum == 0){
		roomNum = 1;
		document.getElementById("room").style.backgroundColor = "white";
		hideArrows();
		document.getElementById("down").style.visibility = "visible";			
	}
	else {
		roomZero();
	}
}

function moveDown()
{
	if (roomNum == 0){
		roomNum = 3;
		document.getElementById("room").style.backgroundColor = "brown";
		hideArrows();
		document.getElementById("up").style.visibility = "visible";			
	}
	else {
		roomZero();
	}
}

function moveLeft()
{
	if (roomNum == 0){
		roomNum = 4;
		document.getElementById("room").style.backgroundColor = "yellow";
		hideArrows();
		document.getElementById("right").style.visibility = "visible";			
	}
	else {
		roomZero();
	}

}

function moveRight()
{
	if (roomNum == 0){
		roomNum = 2;
		document.getElementById("room").style.backgroundColor = "blue";
		hideArrows();
		document.getElementById("left").style.visibility = "visible";
		drawSwitch();			
	}
	else {
		roomZero();
	}

}

function hideArrows()
{
		document.getElementById("up").style.visibility = "hidden";
		document.getElementById("down").style.visibility = "hidden";
		document.getElementById("left").style.visibility = "hidden";
		document.getElementById("right").style.visibility = "hidden";
		ctx.clearRect(0, 0, 400, 400);
}

function roomZero()
{
		roomNum = 0;
		document.getElementById("room").style.backgroundColor = "green";
		document.getElementById("up").style.visibility = "visible";
		document.getElementById("down").style.visibility = "visible";
		document.getElementById("left").style.visibility = "visible";
		document.getElementById("right").style.visibility = "visible";
		drawDoor();
}


