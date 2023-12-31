<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");
$connection=mysqli_connect("localhost","root","","hostel");
$request=file_get_contents("php://input");

$data=json_decode($request);

$studentname=$data->studentname;
$email=$data->email;
$year=$data->year;
$genter=$data->genter;
$dob=$data->dob;
$studentphone=$data->studentphone;
$studentaddress=$data->studentaddress;
$department=$data->department;
$parentname=$data->parentname;
$parentphone=$data->parentphone;
$parentaddress=$data->parentaddress;
$relation=$data->relation;
$gurdiantname=$data->gurdiantname;
$gurdiantphone=$data->gurdiantphone;
$guardiantaddress=$data->guardiantaddress;
$emergancycontact=$data->emergancycontact;

      $connection=mysqli_connect("localhost","root","","hostel");
      if(!$connection){
        echo"not connected";
      }
      else{
        $sql=mysqli_query($connection,"insert into student values('','$studentname','$dob','$studentphone','$studentaddress','$genter','$department','$parentname','$parentphone','$parentaddress','$relation','$gurdiantname','$gurdiantphone','$guardiantaddress','$emergancycontact','$email','$dob','$email','$year')");
      if(!$sql){
        echo"not added";
      }
      else{
        echo"added";
      }
      }
?>