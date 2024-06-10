<?php
$con=mysqli_connect("localhost","root","");
mysqli_select_db($con,"database");
$name=$_POST['name'];
$req="DELETE FROM users WHERE adname='$name'";
mysqli_query($con,$req);
mysqli_close($con);
?>
