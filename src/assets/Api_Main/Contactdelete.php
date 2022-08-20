<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Max-Age', '60');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

include 'database.php';

    $contactusId=(int) $_GET['contactusId'];

//$id = $data["id"];

 // $sql = "DELETE FROM Contactus WHERE id=".$id;
$sql = "DELETE FROM Contactus WHERE id='".$_GET['contactusId']."' ";
//$sql = "DELETE FROM `Contactus` WHERE `Id`= $Id; 
$result = mysqli_query($conn, $sql);


   if ($result) {
	 //  echo $result
      echo '{"result": "delete Succesfully"}';
   } else{

      echo '{"result": "not deleted"}';
   }


?>