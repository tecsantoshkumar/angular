<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST, OPTIONS");
include 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $msg= $_POST['msg'];
    $course= $_POST['course'];
    $Created= $_POST['Created'];

    $sql = "INSERT INTO `Contactus` (`contactusId`, `name`, `email`, `mobile`, `course`, `msg`, `Created` )
            VALUES ('$contactusId','$name', '$email', '$mobile', '$course', '$msg',  '$Created')";

    $result = mysqli_query($conn, $sql);

 	if ($result) {
	$result_json = array('statuscode1' => '200', 'message' => 'success');
		
       echo json_encode($result_json);

	}
    else{
        echo json_encode(array('data' => 'Not Inserted '. mysqli_error ($conn), 'status' =>1));

    }
}
?>