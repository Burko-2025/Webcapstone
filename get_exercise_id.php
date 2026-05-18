<?php
$conn = new mysqli("localhost", "root", "", "workout_manager_2026");

$name = $_GET['name'];

$stmt = $conn->prepare("SELECT exerciseID FROM exercises WHERE exercise = ?");
$stmt->bind_param("s", $name);
$stmt->execute();
$result = $stmt->get_result();

echo json_encode($result->fetch_assoc());
?>