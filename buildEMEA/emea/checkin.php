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
/*check database connection */
if(!$connection){
    /*the database is not connected then print not connected */
    echo"not connected to database";
}
else{
    /*if connect to database then run this action */
    /**to check the person exist or not  */
    $sql1=mysqli_query($connection,"select *from student where id='$id' and name='$studentname' and year='$year' and department='$department'");
    $num=mysqli_num_rows($sql1);
    /**if num=1 then the person is exist and run this action */
    if($num==1){
        /**to get check out date */
        $sql1=mysqli_query($connection,"select checkoutdate from checkinout where id='$id' order by checkindate desc,checkintime desc limit 1");
        $num=mysqli_num_rows($sql1);
        /**if the person checkin first (checkout date based num of rows is zero ,so the person checkin firstly) */
        if($num==0){
            /**then insert a new row */
            $sql=mysqli_query($connection,"insert into checkinout values('','$id','$studentname','$year','$department','$date','-','$time','-')");
            if(!$sql){
                /**new person not added */
                echo"not added new person";
            }
            else{
                /**new person added successfully */
                echo"added";
            }  
        }
        else{
            while($row=mysqli_fetch_assoc($sql1)){
                $dis=$row['checkoutdate'];
            }
           if($dis=="0000-00-00"){
            echo"pls checkout first";
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
    }
    else{
        /**the person doesnot exist and print the person doesnot exist */
   echo"person doesnot exist";
    }

}
?>