
var baseURL = "https://webster.cs.washington.edu/cse154/sections/9/pets/"

window.onload = function(){
	document.getElementById("kitties").onclick = changeAnimal;
	document.getElementById("puppies").onclick = changeAnimal;
};

function changeAnimal(){
	var animal = this.value;
	
	var ajax = new XMLHttpRequest();
	ajax.onload = generateAnimals;
	ajax.open("GET", baseURL + "ajaxpets.php?animal=" + animal, true);
	ajax.send();


}

function generateAnimals(){
	alert("hi");
}