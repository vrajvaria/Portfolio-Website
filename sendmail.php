<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (
        !empty($_POST['name'])
        && !empty($_POST['email'])
        && !empty($_POST['country'])
        && !empty($_POST['message'])
    ) {
        $firstName = $_POST["name"];
        $country = $_POST["country"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
        $message = $_POST["message"];


        $to = "vraj.200410116139@gmail.com";
        $subject = "New Contact Form Submission";
        $body = "First Name: {$firstName}\nLast Name: {$lastName}\nCountry: {$country}\nEmail: {$email}\nPhone: {$phone}\nMessage: {$message}";
        $headers = "From: {$email}";


        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send message.";
        }
    }
}
?>