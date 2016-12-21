var drawing = false;
var down = false
var color = "red";
var line = [];



window.onload = function(){
	document.getElementById("colors").style.display = "none";
	document.getElementById("draw").onclick = draw;
	window.onmousedown = switchDown;
	window.onmouseup = switchDown;
	window.onmousemove= paint;
	document.getElementById("red").onclick = changeColor;
	document.getElementById("blue").onclick = changeColor;
	document.getElementById("green").onclick = changeColor;
};

function switchDown(){
	down = !down;
	if(!down){
		smooth();
	}
}

function draw(){
	drawing = !drawing;
	if(drawing){
		document.getElementById("colors").style.display = "";
	}
}

function paint(event){
	if(drawing && down){
		var pen = document.createElement("div");
		pen.className = "pen " + color;
		pen.style.left = event.pageX + "px";
		pen.style.top= event.pageY + "px";
		document.body.appendChild(pen);
		line.push(pen);

	}
}

function changeColor(){
	color = this.id;
}


function smooth(){
	
	for (var i = 0; i < line.length - 1; i++){
		var first = line[i];
		var second = line[i+1];
		var currX = parseInt(window.getComputedStyle(first).left);
		var endX= parseInt(window.getComputedStyle(second).left);
		var currY=parseInt(window.getComputedStyle(first).top);
		var endY = parseInt(window.getComputedStyle(second).top);

		

		if(currX  > endX){
			currX = backwards(currX, endX, currY);
		}else{
			currX = forwards(currX, endX, currY);
		}

		if(currY > endY){
			backwardsTop(currY, endY, currX);
		}else{
			forwardsTop(currY, endY, currX);
		}
		
	} 
	line = [];
}


function forwards(curr, end, constant){
	
	while(curr < end){
		var pen = document.createElement("div");
		pen.className = "pen " + color;
		pen.style.left = curr + "px";
		pen.style.top= constant + "px";
		document.body.appendChild(pen);
		curr = curr + 5;
		
	}
	return curr;
}

function backwards(curr, end, constant){
	
	while(curr > end){
		var pen = document.createElement("div");
		pen.className = "pen " + color;
		pen.style.left = curr+ "px";
		pen.style.top= constant+ "px";
		document.body.appendChild(pen);
		curr = curr - 5;
		
	}
	return curr;
}

function forwardsTop(curr, end, constant){
	while(curr < end){
		var pen = document.createElement("div");
		pen.className = "pen " + color;
		pen.style.left = constant + "px";
		pen.style.top= curr + "px";
		document.body.appendChild(pen);
		curr = curr + 5;
	}
	
}

function backwardsTop(curr, end, constant){
	while(curr > end){
		var pen = document.createElement("div");
		pen.className = "pen " + color;
		pen.style.left = constant + "px";
		pen.style.top= curr + "px";
		document.body.appendChild(pen);
		curr = curr - 5;
	}
	
}

