<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");
$connection=mysqli_connect("localhost","root","","hostel");
$request=file_get_contents("php://input");
$data=json_decode($request);
$studentname=$data->studentname;
$id=$data->id;
$year=$data->year;
$department=$data->department;
$date=$data->date;
$time=$data->time;
$sql1=mysqli_query($connection,"select checkoutdate from checkinout where id='$id' order by checkindate limit 1");
$num=mysqli_num_rows($sql1);
if($num==0){
    $sql=mysqli_query($connection,"insert into checkinout values('','$id','$studentname','$year','$department','$date','-','$time','-')");
    if(!$sql){
        echo"not added";
    }
    else{
        echo"added";
    } 
}
else{
    while($row=mysqli_fetch_assoc($sql1)){
        $dis=$row['checkoutdate'];
    }
   if($dis=="0000-00-00"){
    echo"pls check out first";
   }
   else{
    $sql3=mysqli_query($connection,"insert into checkinout values('','$id','$studentname','$year','$department','$date','-','$time','-')");
    if(!$sql3){
        echo"not added";
    }
    else{
        echo"added";
    }
   }
}
   /* $sql=mysqli_query($connection,"insert into checkinout values('','$id','$studentname','$year','$department','$date','-','$time','-')");
    if(!$sql){
        echo"not added";
    }
    else{
        echo"added";
    }*/
?>