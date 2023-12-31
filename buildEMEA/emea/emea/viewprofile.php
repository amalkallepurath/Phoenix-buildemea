<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");
$connection=mysqli_connect("localhost","root","","hostel");
$request=file_get_contents("php://input");
$data=json_decode($request);
$id=$data->id;
if(!$connection){
    echo"not connected";
}
else{
   
    $sql=mysqli_query($connection,"select*from student where id='$id'");
    if(!$sql){
        echo"error";
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