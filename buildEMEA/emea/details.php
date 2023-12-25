<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");

$request=file_get_contents("php://input");

$data=json_decode($request);

$studentname=$data->studentname;
$department=$data->department;
$year=$data->year;



      $connection=mysqli_connect("localhost","root","","hostel");
      if(!$connection){
        echo"not connected";
      }
      else{
       $sql=mysqli_query($connection,"select id,name,phone,year,address,gname,gphone,pphone from student where name='$studentname' and department='$department' and year='$year'");
       //$sql=mysqli_query($connection,"select id,name,phone,year,address,gname,gphone,pphone from student where name='aswathi' and department='BA english' and year='first'");
       $json_array=array();
       while($row=mysqli_fetch_assoc($sql)){
           $json_array[]=$row;
       }
          
       $dat=json_encode($json_array);
      
       echo$dat;  
    }
      
      
?>
