<?php

// Connect to the database.
$db = new PDO('mysql:host=localhost;dbname=my_database', 'root', '');

// Get the form data.
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$interestedIn = $_POST['interestedIn'];

// Save the form data to the database.
$sql = 'INSERT INTO messages (name, email, message, interestedIn) VALUES (?, ?, ?, ?)';
$stmt = $db->prepare($sql);
$stmt->execute([$name, $email, $message, $interestedIn]);

// Close the database connection.
$db = null;

// Echo a success message.
echo 'Your message has been sent successfully.';

?>
