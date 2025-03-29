<?php
// Assuming the user has entered their email and password via a login form
$email = $_POST['email'];
$password = $_POST['password'];

// Check if email exists in the database
$sql = "SELECT * FROM users WHERE email = ?";
if ($stmt = $conn->prepare($sql)) {
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        // Verify password
        if (password_verify($password, $user['password'])) {
            echo "Login successful!";
            // Redirect to dashboard or home page
        } else {
            echo "Invalid password!";
        }
    } else {
        echo "No user found with that email!";
    }

    $stmt->close();
}
?>
