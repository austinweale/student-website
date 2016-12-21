<?php
header("Content-type: application/json");
$file_text = "";
if (file_exists("data.txt")) {
    $file_text = file_get_contents("data.txt");
}
$lines = explode("\n", $file_text);
if (isset($_GET["section"])) {
    $section = $_GET["section"];
    $filler = array();
    
    foreach ($lines as $line) {
        list($type, $image, $header, $description, $linktext, $link) = explode(":", $line);
        if (strtolower($type) == strtolower($section)) {
            $filler = array("header" => $header,
            				"image" => $image,
            				"description" => $description,
            				"linkText" => $linktext,
            				"linkRef" => $link);
            ;
            break;
        }
    }

    if ($filler) {
       print json_encode($filler);
    }
}