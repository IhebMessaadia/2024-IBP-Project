<?php
$con=mysqli_connect("localhost","root","");
mysqli_select_db($con,"database");
$name=$_POST['name'];
$pass=$_POST['pass'];
$req="UPDATE users SET 'password'='$pass' WHERE adname='$name' ";
mysqli_query($con,$req);
mysqli_close();
?>
