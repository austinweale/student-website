var all = "";
window.onload = function(){


	document.getElementById('file').onchange = function(){

	var file = this.files[0];

	var reader = new FileReader();
	reader.onload = function(progressEvent){
	// Entire file
	//console.log(this.result);

	// By lines
	var lines = this.result.split('\n');
	for(var line = 0; line < lines.length; line++){
		if(lines[line].length == 6){
			//console.log(lines[line]);
	  		all = all + lines[line] + ":";
	  	}
	  }
	var content = document.getElementById("all");
	content.innerHTML = all;
	}
	
	reader.readAsText(file);
	};
  




};