<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");
$connection=mysqli_connect("localhost","root","","hostel");
$request=file_get_contents("php://input");
$data=json_decode($request);
$username=$data->username;
$password=$data->password;
if(!$connection){
    echo"not";
}
else{
    echo"connected";
   $sql= mysqli_query($connection,"select*from login where password='$password' and username='$username'");
  $num=mysqli_num_rows($sql);
  if($num==1){
    echo"yes";
  }
  else{
    echo"no";
  }
}
?>