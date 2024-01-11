<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");
$connection=mysqli_connect("localhost","root","","hostel");
$request=file_get_contents("php://input");
$data=json_decode($request);
$name=$data->name;
$year=$data->year;
$department=$data->department;
if(!$connection){
    echo"not connected";
}
else{

    $sql=mysqli_query($connection,"select*from foodhostel where name='$name' and year='$year' and department='$department' order by slno desc");
   if(!$sql){
    echo"not query";
   }
   else{
     
    $json_array=array();
    while($row=mysqli_fetch_assoc($sql)){
        $json_array[]=$row;
    }
       
    $data=json_encode($json_array);
   
    echo$data;
   }
}
?>