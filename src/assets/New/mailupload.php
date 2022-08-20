

<?php use \PHPMailer\PHPMailer\PHPMailer; ?>

                        <?php

                        require("vendor/autoload.php");

                        if (isset($_POST['email'])) {



                            $email = $_POST['email'];

                            $subject = $_POST['subject'];

                            $query = $_POST['query'];

                            $Name = $_POST['Name'];

							$mail = new PHPMailer(true);

                            $mail->isSMTP();

							$mail->SMTPDebug = 1;  

							$mail->SMTPSecure = 'none';     

                            $mail->Host = "localhost"; // Enter your host here

                            $mail->SMTPAuth = false;

							$mail->SMTPAutoTLS = false; 

                            $mail->Username = "test@fosysit.com"; // Enter your email here

                            $mail->Password = "Test@12345"; //Enter your passwrod here

                            $mail->Port = 25;

                            $mail->IsHTML(true);

                            $mail->From = "test@fosysit.com";

                            $mail->FromName = "$FromName";

                            $mail->Subject = $subject;

                            $mail->Name = "$Name";

                            $mail->message = $message;





                            $message = file_get_contents('templete.php');

                            $message = str_replace('%Name%', $Name, $message);

                            $message = str_replace('%query%', $query, $message);

                               $message = str_replace('%email%', $email, $message);

                            $message = str_replace('%subject%', $subject, $message);

                            $message = str_replace('%message%', $query, $message);

                            $message = str_replace('%subject%', $subject, $message);

                            $message = str_replace('%message%', $query, $message);

                            $mail->msgHTML($message);

                            $mail->AddAddress($email);

                            $mail->AddAddress('test@fosysit.com'); //admin email

                            if (!$mail->Send()) {

                                echo "Mailer Error: " . $mail->ErrorInfo;

                            } else {

                                header("Location:thanks.php");

                            }

                        }

                        ?>

                



                     



                  



               

    











