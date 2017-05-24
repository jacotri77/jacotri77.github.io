<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$comments = $_POST['comments'];
$formcontent="From: $name \n Message: $comments";
$recipient = "slowerthanyou@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "<script language='javascript'>window.location = 'index.html';</script>";
?>