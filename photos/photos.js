var images = ["window",
				"lamp",
				"leaves",
				"maze",
				"brushes",
				"framing",
				"thirds",
				"flower",
				"cat"];
var index = 0;

window.onload = function(){
	document.getElementById("left").onclick = left;
	document.getElementById("right").onclick = right;
};

function left(){
	index = (index - 1)
	if(index == -1){
		index = images.length -1;
	}else{
		index = index % images.length;
	}
	change();
}

function right(){
	index = (index + 1) % images.length;
	change();
}

function change(){
	var img = document.getElementById("pic");
	img.src = "images/" + images[index] + ".jpg";
}