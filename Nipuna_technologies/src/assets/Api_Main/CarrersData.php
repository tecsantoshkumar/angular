<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");

include 'database.php';


$sql = "SELECT * FROM `Carrers` ORDER BY `ReqID`";
$result = mysqli_query($conn, $sql);





while($row = mysqli_fetch_assoc($result)){
       
        $arr[]=$row;
        
    }
    echo json_encode($arr);
?>