<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");
$connection=mysqli_connect("localhost","root","","hostel");
if(!$connection){
    echo"not";
}
else{
    $sql=mysqli_query($connection,"select id,name,phone,year,address,gname,gphone,pphone from student");
    
    $json_array=array();
    while($row=mysqli_fetch_assoc($sql)){
        $json_array[]=$row;
    }
       
    $data=json_encode($json_array);
   
    echo$data;
}
?>