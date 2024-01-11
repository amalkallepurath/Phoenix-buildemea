<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");
$connection=mysqli_connect("localhost","root","","hostel");
$request=file_get_contents("php://input");
$data=json_decode($request);
$name=$data->name;
$id=$data->id;
$year=$data->year;
$department=$data->department;
$date=$data->date;
$time=$data->time;
$hostel=$data->hostel;
$food=$data->food;
/**check database is connected or not */
if(!$connection){
  echo"not";/**if not connected */
}
else{
  /**if the connection is ok */
  /**check the person is exist or not */
$sql=mysqli_query($connection,"select *from student where id='$id' and name='$name' and department='$department' and year='$year'");
$numrowsforcheck=mysqli_num_rows($sql);
while($row=mysqli_fetch_assoc($sql)){
  $hostelfee=$row['hostelfee'];/**to store total hostelfee */
  $phone=$row['phone'];
}
if(!$sql){
  echo"query ok";/**if person doesnot exist query not*/
}
else{
  /**if person doesnot exist query ok*/
  if($numrowsforcheck==0){
    echo"not exist";
  }
  else{
    /**main */
    /**if the person exist then run this action */
    /**check the person pay first time or not */
    $sql_first=mysqli_query($connection,"select*from foodhostel where id='$id' and name='$name' and department='$department' and year='$year'");
    if(!$sql_first){
      echo"not sssss";/**check the person pay first time or not.the query is not work*/
    }
    else{
       /**check the person pay first time or not.the query is success */
       $numrow=mysqli_num_rows($sql_first);
   /**check the person is first time or not if numrows=0 then the person first time */
   if($numrow==0){
  /**first */
   /**to get checkin and checkoput date for calculate total food amount */
   $sql_checinout_date=mysqli_query($connection,"select id,name,year,department,sum(TIMESTAMPDIFF(day,checkindate,checkoutdate)) as days from checkinout where id='$id'");
   $sql_other=mysqli_query($connection,"select *from other limit 1"); 
   if(!$sql_checinout_date &&$sql_other ){
      echo"mmmm";
    }
    else{
     
      while($rows=mysqli_fetch_assoc($sql_checinout_date)){
        $totalday=$rows['days'];
           }
           while($rowss=mysqli_fetch_assoc($sql_other)){
            $foodrateperdeay=$rowss['fooddateperday'];
           }
    
    }
    $foodrate=$totalday*$foodrateperdeay;
    $nowhostelfee=$hostelfee-$hostel;
    $nowfoodfee=$foodrate-$food;
    echo$nowfoodfee;
    $sql_insert=mysqli_query($connection,"insert into foodhostel values('','$id','$name','$department','$year','$phone','$hostelfee','$nowhostelfee','$nowfoodfee','$date','$date','$hostel','$food')");
    if(!$sql_insert){
     echo"not added first person";
    }
    else{
     echo"added";
    }

  /**first */
    
   }
   else{
   
     $sql_checinout_more=mysqli_query($connection,"select *,sum(TIMESTAMPDIFF(day,checkindate,checkoutdate)) as days from checkinout where id='$id'");
    $sql_foodhostel_more=mysqli_query($connection,"select *from foodhostel where id='$id'");
    if(!$sql_checinout_more && $sql_foodhostel_more){
    echo"not";
   }
   else{
    while($rowsss=mysqli_fetch_assoc($sql_checinout_more)){
      $totaldays=$rowsss['days'];
      }
          while($rowsssa=mysqli_fetch_assoc($sql_foodhostel_more)){
            $hostelfeenow=$rowsssa['nowhostelfee'];
            $foodfeenow=$rowsssa['nowfoodfee'];
                }
          $sql_otherd=mysqli_query($connection,"select *from other limit 1");
          while($rowssss=mysqli_fetch_assoc($sql_otherd)){
            $foodpriceperday=$rowssss['fooddateperday'];
                }
                
          $foodprice=$totaldays*$foodpriceperday;
          $nowhostel=$hostelfeenow-$hostel;
          $nowfood=$foodprice-$food;
         
          $sql_insertdata=mysqli_query($connection,"insert into foodhostel values('','$id','$name','$department','$year','$phone','$hostelfee','$nowhostel','$nowfood','$date','$date','$hostel','$food')");
   if(!$sql_insertdata){
    echo"not added first person";
   }
   else{
    echo"added";
   }
   }
    /**more */
   }
    }
    /**main */
  }
}
}
?>