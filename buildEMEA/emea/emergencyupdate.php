<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");
$connection=mysqli_connect("localhost","root","","hostel");
$request=file_get_contents("php://input");

$data=json_decode($request);

$ephone=$data->ephone;
$id=$data->id;
$connection=mysqli_connect("localhost","root","","hostel");
if(!$connection){
    echo"not";
}
else{
   $sql=mysqli_query($connection,"update student set ephone='$ephone' where id='$id'");
   if(!$sql){
    echo"not update";
   }
   else{
    echo"updated";
   }
}
?>