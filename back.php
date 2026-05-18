<?php
session_start();

?>
<!DOCTYPE html>
<html>

    <head>
        <title>Workout Tracker</title>
        <link rel="stylesheet" type="text/css" href="css/app.css"/>
      </head>

        <?php include 'header.php'; ?>

        <main>
            <h2 class="back">Back Exercises</h2>
        <div class="exercises">
            <div class="exercise" onclick="openExercise('Bent Over Row')">
                <h3>Bent Over Row</h3>
                <img src="images/back/bentOverRow.jpg" alt="Bent-Over Row">
            </div>

            <div class="exercise" onclick="openExercise('Incline Bench Barbell Row')">
                <h3>Incline Bench Barbell Row </h3>
                <img src="images/back/barbellInclineRow.jpg" alt="Incline Bench Barbell Row">
            </div>

            <div class="exercise" onclick="openExercise('Pendlay Row')">
                <h3>Pendlay Row</h3>
                <img src="images/back/pendlay-row.jpg" alt="Pendlay Row">
            </div>

            <div class="exercise" onclick="openExercise('T Bar Row')">
                <h3>T Bar Row</h3>
                <img src="images/back/tbarrow.png" alt="T Bar Row">
            </div>

            <div class="exercise" onclick="openExercise('Seated Cable Row')">
                <h3>Seated Cable Row </h3>
                <img src="images/back/seatedcablerow.png" alt="Seated Cable Row">
            </div>

            <div class="exercise" onclick="openExercise('Bent Over Dumbbell Row')">
                <h3>Bent Over Dumbbell Row </h3>
                <img src="images/back/bentoverdumbbellrow.png" alt="Bent Over Dumbbell Row">
            </div>

            <div class="exercise" onclick="openExercise('Chest Supported Dumbbell Row with Isohold')">
                <h3>Chest Supported Dumbbell Row with Isohold </h3>
                <img src="images/back/chest-supported-row.png" alt="Chest Supported Dumbbell Row with Isohold">
            </div>

            <div class="exercise" onclick="openExercise('Incline Bench Two Arm Dumbbell Row')">
                <h3>Incline Bench Two Arm Dumbbell Row</h3>
                <img src="images/back/inclineBenchDumbbellRow.png" alt="Incline Bench Two Arm Dumbbell Row ">
            </div>

            <div class="exercise" onclick="openExercise('Neutral Grip Chest Supported Dumbbell Row')">
                <h3>Neutral Grip Chest Supported Dumbbell Row</h3>
                <img src="images/back/neutralGripDumbbellRow.png" alt="Neutral Grip Chest Supported Dumbbell Row">
            </div>

            <div class="exercise" onclick="openExercise('Palms In Bent Over Dumbbell Row')">
                <h3>Palms In Bent-Over Dumbbell Row</h3>
                <img src="images/back/palmsInDumbbellRow.png" alt="Palms In Bent-Over Dumbbell Row">
            </div>

            <div class="exercise" onclick="openExercise('Reverse Grip Bent Over Dumbbell Row')">
                <h3>Reverse Grip Bent-Over Dumbbell Row </h3>
                <img src="images/back/reverseGripRow.png" alt="Reverse Grip Bent-Over Dumbbell Row ">
            </div>

            <div class="exercise" onclick="openExercise('Dumbbell Deadlift')">
                <h3>Dumbbell Deadlift</h3>
                <img src="images/back/dumbbellDeadlift.png" alt="Dumbbell Deadlift">
            </div>

            <div class="exercise" onclick="openExercise('Smith Machine Deadlift')">
                <h3>Smith Machine Deadlift</h3>
                <img src="images/back/smithMachineDeadlift.png" alt="Smith Machine Deadlift">
            </div>

            <div class="exercise" onclick="openExercise('Lat Pull Down')">
                <h3>Lat Pull Down</h3>
                <img src="images/back/latPullDown.png" alt="Lat Pull Down">
            </div>

            <div class="exercise" onclick="openExercise('Straight Arm Lat Pull Down')">
                <h3>Straight Arm Lat Pull Down</h3>
                <img src="images/back/straightArmLatPullDown.png" alt="Straight Arm Lat Pull Down">
            </div>

            <div class="exercise" onclick="openExercise('Behind Neck Lat Pull Down')">
                <h3>Behind Neck Lat Pull Down</h3>
                <img src="images/back/behindNeckLatPullDown.png" alt="Behind Neck Lat Pull Down">
            </div>
        </div>

        <?php include 'exercise_modal.php'; ?>
        </main>

        <?php include 'footer.php'; ?>
        <script src="exercises.js"></script>

    </body>
</html>