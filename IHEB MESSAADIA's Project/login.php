<?php
    $con=mysqli_connect("localhost","root","");
    mysqli_select_db($con,"database");
    $id=rand(1000,9999);
    $name=$_POST['T1'];
    $pass=$_POST['T2'];
    $req="INSERT INTO `admin` (`adminid`, `adname`, `paasowrd`) VALUES
('$id', '$name', '$pass');";
    mysqli_query($con,$req);
    mysqli_close($con);
?>