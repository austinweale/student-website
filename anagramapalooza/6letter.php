<!DOCTYPE html>
<?php 
$file = "dict3.php";

$lines = file($file);
file_put_contents("short.txt", "");
foreach($lines as $line){
	if(strlen($line) == 6){
		file_put_contents("short.txt", FILE_APPEND);
	}
}

?>