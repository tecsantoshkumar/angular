<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");
include 'database.php';
//phpinfo();

$sql = "SELECT * FROM `Contactus`";
$result = mysqli_query($conn, $sql);
while($row = mysqli_fetch_assoc($result)){
        // echo var_dump($row);
        $arr[]=$row;
        //echo $arr;
    }
    echo json_encode($arr);
?>