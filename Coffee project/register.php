<?php
// Database connection details
$servername = "localhost";
$username = "root"; // Change to your MySQL username
$password = ""; // Change to your MySQL password
$dbname = "coffee_shop"; // Database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form inputs
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Validate inputs (you can add more validation if necessary)
    if (empty($name) || empty($email) || empty($password)) {
        echo "All fields are required.";
    } else {
        // Hash the password for security
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Prepare SQL query to insert data into the database
        $sql = "INSERT INTO register (name, email, password) VALUES (?, ?, ?)";

        // Prepare statement
        if ($stmt = $conn->prepare($sql)) {
            // Bind parameters to the SQL query
            $stmt->bind_param("sss", $name, $email, $hashedPassword);

            // Execute the query
            if ($stmt->execute()) {
                echo "Registration successful!";
            } else {
                echo "Error: " . $stmt->error;
            }

            // Close the statement
            $stmt->close();
        } else {
            echo "Error: " . $conn->error;
        }
    }
}

// Close the database connection
$conn->close();
?>
