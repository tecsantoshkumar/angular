<?php
header('Content-Type: application/json');
header('Acess-Control-Allow-Origin: *');

include 'database.php';
$result_json = array('statuscode1' => '200', 'message' => 'success');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $JobPosition	 = $_POST['JobPosition'];
    $FirstName	 = $_POST['FirstName'];
    $LastName	 = $_POST['LastName'];
    $EmailID = $_POST['EmailID'];
    $Phoneno = $_POST['Phoneno'];
    $BriefMessage= $_POST['BriefMessage'];
    $Files= $_POST['Files'];

    echo $FirstName	;
    echo $LastName;
    echo $EmailID;
    echo $Phoneno;
    echo $BriefMessage;
    echo $Files;



    $sql = "INSERT INTO `ResumeUpload` ( `FirstName`, `LastName`, `EmailID`, `Phoneno`,`BriefMessage`, `Files`, `JobPosition` )
            VALUES ('$FirstName', '$LastName', '$EmailID','$Phoneno', '$BriefMessage', '$Files' , '$JobPosition')";
    
    $result = mysqli_query($conn, $sql);

    if($result){
        echo json_encode($result_json);
        echo json_encode((['data' => 'Inserted', 'status' =>0]));
        
    }
    else{
        echo json_encode(array('data' => 'Not Inserted '. mysqli_error ($conn), 'status' =>1));

    }
}
?>