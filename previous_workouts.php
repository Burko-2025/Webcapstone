<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

session_start();
require __DIR__ . '/database.php';

header('Content-Type: application/json');

try {

    if (!isset($_SESSION['userID'])) {
        echo json_encode([]);
        exit;
    }

    $userID = $_SESSION['userID'];

    $sql = "
        SELECT workoutDate,
               GROUP_CONCAT(DISTINCT e.exercise SEPARATOR ', ') AS exercises
        FROM workout_sets ws
        JOIN exercises e ON ws.exerciseID = e.exerciseID
        WHERE ws.userID = :userID
        GROUP BY workoutDate
        ORDER BY workoutDate DESC
    ";

    $stmt = $db->prepare($sql);

    if (!$stmt) {
        echo json_encode(["error" => "Prepare failed"]);
        exit;
    }

    $stmt->bindValue(':userID', $userID, PDO::PARAM_INT);
    $stmt->execute();

    $workouts = [];

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $workouts[] = [
            "date" => $row['workoutDate'],
            "exercises" => $row['exercises']
                ? explode(", ", $row['exercises'])
                : []
        ];
    }

    echo json_encode($workouts);

} catch (Exception $e) {
    echo json_encode([
        "error" => $e->getMessage()
    ]);
}