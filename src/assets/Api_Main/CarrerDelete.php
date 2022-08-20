<?php
header('Content-Type: application/json');
header('Acess-Control-Allow-Origin: *');

include 'database.php';
if ($_SERVER["REQUEST_METHOD"] == "GET") {

    $id = $_GET['id'];

$sql= "SELECT * FROM `Employee` WHERE `id`=$id ";
$result = mysqli_query($conn, $sql);
if ($result) {
	$result_json = array('statuscode1' => '200', 'message' => 'success');
		
       echo json_encode($result_json);

	}
    else{
        echo json_encode(array('data' => 'Not Inserted '. mysqli_error ($conn), 'status' =>1));

    }
}