var anagrams = [];
var placeholders = [];
var choiceArray = [];
var ticks;
var timer;

window.onload = function(){
	

	setup();
	
	window.onkeydown = textkeydown;
	document.getElementById("randomize").onclick = fillSelection;
	document.getElementById("new").onclick = reset;
	document.getElementById("again").onclick = reset;
	
	

	
};

function reset(){
	if(timer){
		clearInterval(timer);
	}
	document.getElementById("all").innerHTML = "";
	anagrams = [];
	placeholders = [];
	choiceArray = [];
	setup();
}

function setup(){
	var lines = sixletter.split( ":" );
	var rand = Math.floor(Math.random() * lines.length);
	
	var all = document.getElementById("all");
	var selection = document.getElementById("selection");
	var inside = all.innerHTML;
	var choice = lines[rand];
	choiceArray = choice.split("");

	fillSelection();

	var allLines = allwords.split(":");
	for(var i = 0; i < allLines.length; i++){
		if(doesContain(allLines[i], choice)){
			anagrams[anagrams.length] = allLines[i];
			placeholders[placeholders.length] = allLines[i].replace(/[a-z]/g, "-");
		}

	}
	anagrams.sort(function(a, b){
  		return a.length - b.length; // ASC -> a - b; DESC -> b - a
	});
	placeholders.sort(function(a, b){
  		return a.length - b.length; // ASC -> a - b; DESC -> b - a
	});
	var column = document.createElement("div");
	column.classList.add("column");
	for(var j = 0; j < anagrams.length; j++){
		if(j % 8 == 0){
			all.appendChild(column);
			column = document.createElement("div");
			column.classList.add("column");
		}
		var temp = document.createElement("div");
		temp.className = "holder";
		temp.innerHTML = placeholders[j];
		column.appendChild(temp);
	}
	//console.log(anagrams);
	document.getElementById("again").disabled = true;
	all.appendChild(column);
	ticks = 120;
	timer = setInterval(tick, 1000);
}

function tick(){
	if(ticks == 0){
		document.getElementById("time").innerHTML = "Game Over";
		document.getElementById("again").disabled = false;
		clearInterval(timer);
		gameOver();
	}else{
		document.getElementById("min").innerHTML = parseInt(ticks / 60);
		var sec = "";
		if(ticks % 60 < 10){
			sec = "0";
		}
		document.getElementById("sec").innerHTML = sec + ticks % 60;
		ticks--;
	}
}

function doesContain(needle, hayStack){
	var nee = needle.split("");
	var hay = hayStack.split("");
	
	
	for(var i = 0;i < nee.length; i++){
		if(hay.indexOf(nee[i]) != -1){
			var index = hay.indexOf(nee[i]);
			hay.splice(index, 1);
		}else{
			return false;
		}
	}

	return true;

}

function submit(){
	var attempt = document.getElementById("input").value;
	if(anagrams.indexOf(attempt) != -1){
		var index = anagrams.indexOf(attempt);
		var h = document.querySelectorAll(".holder");
		h[index].innerHTML = anagrams[index];
		h[index].onmouseover = prompt;
		h[index].onmouseout = unprompt;
		h[index].onclick = search;

	}

	document.getElementById("input").value = "";

}

function prompt(event){
	var abbr = document.createElement("div");
	abbr.classList.add("abbr");
	abbr.style.left = event.clientX + "px";
	abbr.style.top = event.clientY + "px";
	abbr.innerHTML = "click here for definition";
	document.body.appendChild(abbr);

}

function unprompt(){
	var abbrs = document.querySelectorAll(".abbr");
	for(var i = 0; i < abbrs.length; i++){
		document.body.removeChild(abbrs[i]);
	}
}

function search(){
	window.location = "https://www.google.com/#safe=off&q=define%20" + this.innerHTML;
}

function searchHelp(){
	alert(this.responseText);
}

function textkeydown(event){
	var key = String.fromCharCode(event.keyCode)
	if(event.keyCode == 13){
		submit();
	}
}

function fillSelection(){
	var shuffled = shuffle(choiceArray);
	choiceArray = shuffled;
	var area = document.getElementById("selection");
	area.innerHTML = "";
	for(var i = 0; i < choiceArray.length; i++){
		var li = document.createElement("li");
		li.innerHTML = choiceArray[i];
		li.className = "select";
		area.appendChild(li);
	}
}

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function gameOver(){
	var holders = document.querySelectorAll(".holder");
	for(var i = 0; i < holders.length; i++){
		if(holders[i].innerHTML.indexOf("-") != -1){
			holders[i].classList.add("blue");
			holders[i].onmouseover = prompt;
			holders[i].onmouseout = unprompt;
			holders[i].onclick = search;
		}
		holders[i].innerHTML = anagrams[i];
	}
}