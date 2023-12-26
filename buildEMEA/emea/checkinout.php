<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");
 $connection=mysqli_connect("localhost","root","","hostel");
      if(!$connection){
        echo"not connected";
      }
      else{
       $sql=mysqli_query($connection,"select*from checkinout order by slno desc limit 500");
       //$sql=mysqli_query($connection,"select id,name,phone,year,address,gname,gphone,pphone from student where name='aswathi' and department='BA english' and year='first'");
       $json_array=array();
       while($row=mysqli_fetch_assoc($sql)){
           $json_array[]=$row;
       }
          
       $dat=json_encode($json_array);
      
       echo$dat;  
    }
      
      
?>