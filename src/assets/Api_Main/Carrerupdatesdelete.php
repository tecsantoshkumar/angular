<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Max-Age', '60');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

include 'database.php';

    $id=(int) $_GET['id'];

//$id = $data["id"];

 // $sql = "DELETE FROM Contactus WHERE id=".$id;
$sql = "DELETE FROM Carrers WHERE id='".$_GET['id']."' ";
//$sql = "DELETE FROM `Contactus` WHERE `Id`= $Id; 
$result = mysqli_query($conn, $sql);


   if ($result) {
	 //  echo $result
      echo '{"result": "delete Succesfully"}';
   } else{

      echo '{"result": "not deleted"}';
   }


?>