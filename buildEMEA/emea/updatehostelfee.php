<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");
$connection=mysqli_connect("localhost","root","","hostel");
$request=file_get_contents("php://input");
$data=json_decode($request);
$rate=$data->rate;
$slno=$data->slno;
if(!$connection){
    echo"not connect";
}
else{
    $sql=mysqli_query($connection,"select *from foodhostel where slno='$slno' limit 1");
    while($row=mysqli_fetch_assoc($sql)){
        $id=$row['id'];
    }
    if(!$sql){
        echo"not query";
    }
    else{
        $sqlget=mysqli_query($connection,"select *from foodhostel where id=1074 order by slno desc limit 1,1");
    while($rows=mysqli_fetch_assoc($sqlget)){
        $nowhostelfee=$rows['nowhostelfee'];
    }
        $nowhostel=$nowhostelfee-$rate;
        $update=mysqli_query($connection,"update foodhostel set hostelfee='$rate',nowhostelfee='$nowhostel' where slno='$slno'");
        if(!$update){
            echo"not update";
        }
        else{
            echo"updated";
        }
    }
}
?>