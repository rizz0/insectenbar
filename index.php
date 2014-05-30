<?php

include('content.php');

if($_SERVER['REQUEST_URI'] == '/') $view = 'views/missie.html';
else $view = 'views/' . substr($_SERVER['REQUEST_URI'], 1) . '.html';

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