<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");
$connection=mysqli_connect("localhost","root","","hostel");
$request=file_get_contents("php://input");
$data=json_decode($request);
$rate=$data->rate;
if(!$connection){
    echo"not connect";
}
else{
    $sql=mysqli_query($connection,"update other set fooddateperday='$rate'");
    if(!$sql){
        echo"not query";
    }
    else{
        echo"added";
    }
}
?>