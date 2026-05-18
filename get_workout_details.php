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

    if (!isset($_GET['date'])) {
        echo json_encode([]);
        exit;
    }

    $userID = $_SESSION['userID'];
    $date = $_GET['date'];

    $sql = "
        SELECT e.exercise, ws.setNumber, ws.reps, ws.weight, ws.comment
        FROM workout_sets ws
        JOIN exercises e ON ws.exerciseID = e.exerciseID
        WHERE ws.userID = :userID
        AND ws.workoutDate = :workoutDate
        ORDER BY e.exercise, ws.setNumber
    ";

    $stmt = $db->prepare($sql);

    $stmt->bindValue(':userID', $userID, PDO::PARAM_INT);
    $stmt->bindValue(':workoutDate', $date, PDO::PARAM_STR);

    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $data = [];

    foreach ($result as $row) {
        $exercise = $row['exercise'];

        if (!isset($data[$exercise])) {
            $data[$exercise] = [];
        }

        $data[$exercise][] = [
            "setNumber" => $row['setNumber'],
            "reps" => $row['reps'],
            "weight" => $row['weight'],
            "comment" => $row['comment']
        ];
    }

    $output = [];

    foreach ($data as $name => $sets) {
        $output[] = [
            "name" => $name,
            "sets" => $sets
        ];
    }

    echo json_encode($output);

} catch (Exception $e) {
    echo json_encode([
        "error" => $e->getMessage()
    ]);
}