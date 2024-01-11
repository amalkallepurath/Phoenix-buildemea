<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");
$connection=mysqli_connect("localhost","root","","hostel");
$request=file_get_contents("php://input");

$data=json_decode($request);

$checkin=$data->checkin;
$slno=$data->slno;
$connection=mysqli_connect("localhost","root","","hostel");
if(!$connection){
    echo"not";
}
else{
   $sql=mysqli_query($connection,"update checkinout set checkindate='$checkin' where slno='$slno'");
   if(!$sql){
    echo"not update";
   }
   else{
    echo"updated";
   }
}
?>