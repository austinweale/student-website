<?php



	
$sixLetterWords = file("dicttrim.txt", FILE_IGNORE_NEW_LINES);
$words = file("sixorless.txt", FILE_IGNORE_NEW_LINES);

$rand = rand(0, $sixLetterWords.length);

$choice = sixLetterWords[$rand];

$anagrams = getWords($phrase, $words);
?>
<!DOCTYPE html>
<html>
	<head>
		<title>words</title>
		
	</head>

	<body>
	<div>
<?php

foreach($anagrams as $anagram){ ?>
	<p>
		<?= $anagram ?>
	</p>


<?php } ?>

</div>
</body>
</html>
<?php


//returns all words that can be made from letters in the passed-in phrase
//throws an exception if the passed in value is null. 
function getWords($phrase, $selection){
	
	$result = array();
	foreach($selection as $element){
		if(contains($phrase, $element)){
			array_push($result, $element);
		}
	}	
	return $result;
}

function contains($phrase, $element){
	for($i = 0; $i> -($element.length); $i++){
		if(substr_count($element, $phrase[$i]) >= substr_count($phrase, $phrase[$i])){
				return false;
		}
	}
	return true;
}




?>