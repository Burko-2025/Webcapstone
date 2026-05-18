<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);



session_start();
require 'database.php';


$userID = $_SESSION['userID'];
if (!isset($_SESSION['userID'])) {
    die("User not logged in");
}
var_dump($_SESSION);
$conn = new mysqli("localhost", "root", "", "workout_manager_2026");

$data = json_decode(file_get_contents("php://input"), true);

$userID = $_SESSION['userID'];
$exerciseID = $data['exerciseID'];
$sets = $data['sets'];
$date = date("Y-m-d");

$stmt = $conn->prepare("
    INSERT INTO workout_sets 
    (userID, exerciseID, setNumber, reps, weight, comment, workoutDate)
    VALUES (?, ?, ?, ?, ?, ?, ?)
");

foreach ($sets as $set) {

    if ($set['reps'] === "" || $set['weight'] === "") {
        die("Empty set values detected");
    }

    $stmt->bind_param(
        "iiiiiss",
        $userID,
        $exerciseID,
        $set['setNumber'],
        $set['reps'],
        $set['weight'],
        $set['comment'],
        $date
    );

if (!$stmt->execute()) {
    die("Insert failed: " . $stmt->error);
}
}
echo "SUCCESS";
?>