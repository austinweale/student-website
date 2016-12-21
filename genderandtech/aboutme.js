

window.onload = function(){
	var all = document.querySelectorAll(".section");

	for(var i = 0; i < all.length -1; i++){
		all[i].classList.add("hidden");
	}

	var nav = document.querySelectorAll("ul li");
	for(var i = 0; i < nav.length; i++){
		nav[i].onclick = change;
	}

	var sideBar = document.querySelectorAll("ol li");
	for(var i = 0; i < sideBar.length; i++){
		sideBar[i].onclick = scroll;
	}
};

function scroll(){
	var text = this.innerHTML.toLowerCase();
	var sections = document.querySelectorAll("#reading h2");

	for(var i = 0; i < sections.length; i++){
		if(text.indexOf(sections[i].id.toLowerCase()) != -1){
			var top = sections[i].offsetTop;
			
			window.scrollTo(0, top);
		}
	}

}

function change(){
	var nav = document.querySelectorAll("ul li");
	for(var i = 0; i < nav.length; i++){
		nav[i].classList.remove("selected");
	}
	this.classList.add("selected");
	var text = this.innerHTML.toLowerCase();
	

	var sections = document.querySelectorAll(".section");
	for(var i = 0; i < sections.length; i++){
		if(text.indexOf(sections[i].id.toLowerCase()) > -1){
			sections[i].classList.remove("hidden");
			toggleNav(sections[i].id.toLowerCase());
		}else{
			sections[i].classList.add("hidden");
		}
	}
}

function toggleNav(element){
	document.getElementById("readNav").classList.add("hidden");
	if(element == "reading"){
		document.getElementById("readNav").classList.remove("hidden");
	}


}