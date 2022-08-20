
<?php
// Connecting to the Database
$servername = "184.168.118.250";
$username = "NipunaMain";
$password = "Nipuna@1234";
$database = "Nipuna";

// Create a connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Die if connection was not successful
if (!$conn){
    die("Sorry we failed to connect: ". mysqli_connect_error());
}
else{
    
}

?>