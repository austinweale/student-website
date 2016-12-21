window.onload = function(){
	var tabs = document.querySelectorAll("li");

	for(var i = 0; i < tabs.length; i++){
		tabs[i].onclick = switchTabs;
	}

};

function changeSelected(event){
	var tab = document.querySelectorAll(".selected");

	for(var i = 0; i < tab.length; i++){
		tab[i].classList.remove("selected");
	}
	event.classList.add("selected");
}

function switchTabs(){
	changeSelected(this);
	var ajax = new XMLHttpRequest();
	ajax.onload = putData;
	ajax.open("GET", "data.php?section=" + this.innerHTML, true);
	ajax.send();
}

function putData(){
	var json = JSON.parse(this.responseText);
	var image = document.getElementById("pic");
	image.src = "indeximages/" + json.image + ".jpg";

	var header = document.getElementById("head");
	header.innerHTML = json.header;

	var description = document.getElementById("description");
	description.innerHTML = json.description;

	var link = document.getElementById("link");
	link.innerHTML = json.linkText;
	link.href = json.linkRef;
}