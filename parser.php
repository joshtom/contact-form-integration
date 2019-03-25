<?php
if ( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']) ){
    $name = addslashes($_POST['name']);
    $email = addslashes($_POST['email']);
    $message = nl2br(addslashes($_POST['message'])); 
    // nl2br() function will preserve any new line in the text area box

    $to = "olajidejoshua4real@gmail";
    $from = $email;
    $subject = "Contact Form Message";
    $message = "<h3> Name: </h3>". $name . "<br><h3>Email</h3>". $email . "<p>" . $message . "</p>";
    $headers = "From: $from\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\n";

    // Using conditions to check if the email has been sent or not
    if ( mail($to, $subject, $message, $headers) ) {
        echo "success";
    } else {
        echo "The server failed to send the message, please try again later...";
    }
}

?>