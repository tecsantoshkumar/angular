<?php
header('Content-Type: application/json');
header('Acess-Control-Allow-Origin: *');

include 'database.php';
if ($_SERVER["REQUEST_METHOD"] == "GET") {

$contactusId = $_GET['contactusId'];

$sql = "SELECT * FROM `Contactus` WHERE `contactusId`='$contactusId'";
$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result)>0){

    while($output = mysqli_fetch_assoc($result)){
        echo json_encode($output);
        return json_encode($output);
    }

}
else{

    echo json_encode(array('message' => 'No Record Found', 'status' =>false));

}
}
?>