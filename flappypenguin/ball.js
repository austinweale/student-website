"use strict";

var ballY = 0;
var velocity = 0;
var jumping = false;
var playing = false;
var timer;
var squareTimer;
var bgx = 0;
var soundfile = "duck.wav"
var tokenX;
var tokenY;
var clip = document.createElement('audio');



window.onload = function(){

	clip.setAttribute('src', 'duck.wav');
	var ball = document.getElementById("ball");
	ball.style.left = 600/2 - 40/2 + "px";
	document.getElementById("start").onclick = start;
	document.getElementById("jump").onclick = jump;

	window.onkeydown = textKeyDown;
	createSquare();
	document.getElementById("loading").style.display = "none";
};

function start(){
	var box = document.getElementById("stat");
	box.innerHTML = "";
	if (playing){
		playing = false;
		clearInterval(timer);
		clearInterval(squareTimer);
		lose(false);
	}else{
		playing = true;
		squareTimer = setInterval(moveSquare, 25)
		timer = setInterval(fall, 25);
	}
}

function fall(){
	movebackground();
	if(jumping){
		var ball = document.getElementById("ball");
		velocity = -10;
		ballY = Math.max(ballY + velocity, 0);
		jumping = false;
		playsound();
	}else{
		var ball = document.getElementById("ball");
		velocity++;
		ballY = Math.min(ballY + velocity, 360);
		ball.style.top = ballY + "px";
	}

	if(ballY >= 360){
		//velocity = parseInt((-3/4) * velocity);
		playing = false;
		clearInterval(timer);
		clearInterval(squareTimer);
		lose(true);
	}else if (ballY < 0){
		velocity = 1;
	}

}

function jump() {
	if(playing){
		jumping = true	
	}
}

function lose(lost){
	if(lost){
		var box = document.getElementById("stat");
		box.innerHTML = "you lose :(";
	}
	ballY = 0;
	velocity = 0;
	jumping = false;
	var ball = document.getElementById("ball");
	ball.style.top = ballY;
	ball.style.left = 600/2 - 40/2 + "px";
}

function textKeyDown (event){
	var key = String.fromCharCode(event.keyCode);
	if(key == 'J') {
		jump();
	}else if (key == "S"){
		start();
	}
}

function movebackground(){
	var area = document.getElementById("ballarea");
	if (bgx == 598){
		bgx = 0;
	}else{
		bgx = bgx - 2
	}
	area.style.backgroundPosition = bgx + "px" + " 0px";

}

function playsound() {
	

	clip.play();

}

function createSquare() {
	var token = document.createElement("div");
	var box = document.getElementById("ballarea");
	token.id = "token";
	box.appendChild(token);
	tokenY = Math.floor(Math.random() * 240);
	tokenX = 600;
	document.getElementById("token").style.top = tokenY + "px";
	document.getElementById("token").style.left = "600px";
}

function moveSquare (square) {
	if(tokenX <= 330 && tokenX >= 260){
		if(ballY >= tokenY - 30 && ballY <= tokenY + 160){
			playing = false;
			clearInterval(timer);
			clearInterval(squareTimer);
			lose(true);
		}
	}

	var token = document.getElementById("token");
	if (tokenX <= -40){
		tokenX = 600;
		tokenY = Math.floor(Math.random() * 240);
		document.getElementById("token").style.top = tokenY + "px";
	}else{
		tokenX -= 4;
	}
	token.style.left = tokenX + "px";
	
}