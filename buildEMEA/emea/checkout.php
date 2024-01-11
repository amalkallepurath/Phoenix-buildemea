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
if(!$connection){
    echo"notconnected";
}
else{
    /*check the person is exist or not if num=1 then student exist else student doesnot exist )*/
    $sql1=mysqli_query($connection,"select *from student where id='$id' and name='$studentname' and year='$year' and department='$department'");
    $num=mysqli_num_rows($sql1);
    if($num==1){
        /*if the person exist then*/
        /*to get slno for update the data,check out date for check the person is already checkout or not
        
        */
        $sql=mysqli_query($connection,"select slno,checkoutdate from checkinout where id='$id' and name='$studentname' and year='$year' and department='$department' order by checkindate desc,checkintime desc limit 1");
        $num2=mysqli_num_rows($sql);
        while($row=mysqli_fetch_assoc($sql)){
        $dis=$row['slno'];
        $checkout=$row['checkoutdate'];
        }
        if(!$sql){
            /* if query for select slno checkout date is not get print */
        echo"not sql";
       }
       else{
        /* if query for select slno checkout date is  get then run this action */
        /* if checkout date is 0000-00-00 then we can update checkout date and time*/
        if($checkout=="0000-00-00"){
             $sql1=mysqli_query($connection,"update checkinout set checkoutdate='$date',checkouttime='$time' where slno='$dis'");
            if(!$sql1){
                /*if the query is not */
                echo"not";
            }
            else{
                /*if the query is ok and print update  */
                echo"added";
            }
        }
        else{
           /*if the person already checkout the print you are already checkout pls check in first*/
            echo"checkin";
        }


       }
    }
    else{
        /*if the person doesnot exist then print person doesnot exist*/
        echo"p";
    }
}

?>