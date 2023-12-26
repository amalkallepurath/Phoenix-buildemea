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
$sql=mysqli_query($connection,"select slno,checkoutdate from checkinout where id='$id' and name='$studentname' order by checkindate,checkintime desc limit 1");
$num=mysqli_num_rows($sql);

if(!$sql){
    echo"not added";
}
else{
    while($row=mysqli_fetch_assoc($sql)){
    $dis=$row['slno'];
    $checkout=$row['checkoutdate'];
    }
    if($checkout=="0000-00-00"){
        $sql1=mysqli_query($connection,"update checkinout set checkoutdate='$date',checkouttime='$time' where slno='$dis'");
        if(!$sql1){
            echo"not";
        }
        else{
            echo"added";
        }
    }
    else{
        echo"checkin";
    }
    /* $sql1=mysqli_query($connection,"update checkinout set checkoutdate='$date',checkouttime='$time' where slno='$dis'");
        if(!sql1){
            echo"not";
        }
        else{
            echo"added";
        }*/
    }
    
   
    

?>