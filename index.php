<?php

include('content.php');

$view = false;
if($_SERVER['REQUEST_URI'] == '/') $view = 'views/missie.html';

$path = substr($_SERVER['REQUEST_URI'], 1);

$parts = explode('/', $path);

if(count($parts) > 1){
	switch($parts[0]) {
	case 'voedselverhalen':
	if(isset($content['voedselverhalen']['pages'][$parts[1]])) {
		$page = $content['voedselverhalen']['pages'][$parts[1]];
		$view = 'views/voedselverhaal.html';
		}
	break;
	}
}

if(!$view) $view = 'views/' . $path . '.html';

if(!file_exists($view)){
header("HTTP/1.0 404 Not Found");
die('page not found. <script>window.location = "/";</script>');
}

ob_start();
require($view);
$pageTitle = isset($h1) ? $h1 . ' - De Insectenbar' : 'De Insectenbar';
$content = ob_get_contents();
ob_end_clean();
require('views/layout.html');
?>