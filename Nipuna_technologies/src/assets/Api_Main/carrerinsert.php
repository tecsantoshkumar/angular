<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST, OPTIONS");


include 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ReqID	 = $_POST['ReqID'];
    $JobDescription	 = $_POST['JobDescription'];
    $Positions = $_POST['Positions'];
    $Location = $_POST['Location'];
    $Comments= $_POST['Comments'];
    $Created= $_POST['Created'];

   


    $sql = "INSERT INTO `Carrers` ( `ReqID`, `JobDescription`, `Positions`, `Location`,`Id`, `Comments`,  `Created` )
            VALUES ('$ReqID', '$JobDescription', '$Positions','$Location', '$Id', '$Comments',  '$Created')";
    
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