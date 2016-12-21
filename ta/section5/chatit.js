window.onload = function() {
	checkMessages();

	//document.getElementById("send").onclick = sendMessage;
};


function checkMessages() {
	var ajax = new XMLHttpRequest();
	ajax.onload = gotMessages;
	ajax.open("GET", "https://webster.cs.washington.edu/cse154/sections/9/chatit/chatit.php?reverse=true", true);
	ajax.send();
}	

function gotMessages() {
	if (this.responseText.length > 0) {
		document.getElementById("messages").innerHTML = this.responseText;
	}
}