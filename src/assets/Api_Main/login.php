<?php 
include 'database.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");

$email = $_POST['email'];
	$password = $_POST['password'];

	$sql = "SELECT * FROM User WHERE email='$email' AND password='$password'";
	
    $result = mysqli_query($conn, $sql);
	if ($result->num_rows > 0) {
		$row = mysqli_fetch_assoc($result);
       $arr[]=$row;
        echo json_encode(['status'=> '200', 'data'=>$arr]);

	}

 else{
        echo json_encode(['status'=> false,'data'=> 'Invalid Credentials']);
    }


?>



