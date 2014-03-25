<?php
require_once 'library/php/Mobile_Detect.php';
$detect = new Mobile_Detect;

if ($detect->isMobile()) {
    header('Location: http://m.yehcake.com/');
} else {
    header('Location: http://www.yehcake.com/');    
}
?>