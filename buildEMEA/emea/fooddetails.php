<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");
$connection=mysqli_connect("localhost","root","","hostel");
if(!$connection){
    echo"NOT CONNECT";
}
else{
    
    $sql=mysqli_query($connection,"select*from foodhostel order by slno desc");
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