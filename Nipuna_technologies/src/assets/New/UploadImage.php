

<?php use \New\PHPMailer\PHPMailer; ?>


<?php
header("Access-Control-Allow-Origin: *"); 

require("vendor/autoload.php");

if (isset($_POST['email'])) {

 $email= $_POST['email'];
  
  

    $Course = $_POST['Course'];

    $EmailID = $_POST['EmailID'];

    $mobile_contactus = $_POST['mobile_contactus'];

    $Message = $_POST['Message'];

    $mail = new PHPMailer(true);

    $mail->isSMTP();

    $mail->SMTPDebug = 0;  

    $mail->SMTPSecure = 'none';     

    $mail->Host = "smtp.gmail.com"; // Enter your host here

    $mail->SMTPAuth = false;

    $mail->SMTPAutoTLS = false; 
 
    $mail->Username = "contactus@nipunatechnologies.com"; // Enter your email here

    $mail->Password = "@Welcome@Gnt"; //Enter your passwrod here

    $mail->Port = 587;

    $mail->IsHTML(true);

    $mail->From = "contactus@nipunatechnologies.com";

    $mail->FromName = "$FromName";

   //  $mail->addAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);
   // $mail->addAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);

    $mail->name_contactus = $name_contactus;

    $mail->email_contactus = $email_contactus;

    $mail->Course = "$Course";

    $mail->EmailID = $EmailID;

    $mail->mobile_contactus = "$mobile_contactus";

    $mail->Message = $Message;
    
    $mail->Subject    = "From Fosysit Contactus Page";
    
    $message = file_get_contents('Template.php');

  

       $message = str_replace('%Course%', $Course, $message);

    $message = str_replace('%EmailID%', $EmailID, $message);

    $message = str_replace('%mobile_contactus%', $mobile_contactus, $message);

    $message = str_replace('%Message%', $Message, $message);

    $message = str_replace('%message%', $query, $message);

    $mail->msgHTML($message);

   // $mail->AddAddress($email);
    $mail->AddAddress('nallapaneni.saikrishna@gmail.com'); //admin email
    $mail->AddAddress('contactus@nipunatechnologies.com'); //admin email

    if (!$mail->Send()) {

        echo "Mailer Error: " . $mail->ErrorInfo;

    } else {
	$result_json = array('statuscode1' => '200', 'message' => 'success');
		
       echo json_encode($result_json);
// echo "Mail Sent Successfully";
       // header("Location:thanks.php");

    }

}

?>