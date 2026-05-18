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
            <h2 class="chest">Chest Exercises</h2>
        <div class="exercises">
            <div class="exercise" onclick="openExerciseChest('Barbell Bench Press')">
                <h3>Barbell Bench Press</h3>
                <img src="images/chest/barbellBenchPress.png" alt="Barbell Bench Press">
            </div>

            <div class="exercise" onclick="openExerciseChest('Incline Bench Press')">
                <h3>Incline Bench Press</h3>
                <img src="images/chest/inclineBenchPress.png" alt="Incline Bench Press">
            </div>

            <div class="exercise" onclick="openExerciseChest('Decline Bench Press')">
                <h3>Decline Bench Press</h3>
                <img src="images/chest/declineBenchPress.png" alt="Decline Bench Press">
            </div>

            <div class="exercise" onclick="openExerciseChest('Reverse Grip Bench Press')">
                <h3>Reverse Grip Bench Press </h3>
                <img src="images/chest/reverseGripBenchPress.png" alt="Reverse Grip Bench Press">
            </div>

            <div class="exercise" onclick="openExerciseChest('Dumbbell Bench Press')">
                <h3>Dumbbell Bench Press</h3>
                <img src="images/chest/dumbbellBenchPress.png" alt="Dumbbell Bench Press">
            </div>

            <div class="exercise" onclick="openExerciseChest('Decline Dumbbell Bench Press')">
                <h3>Decline Dumbbell Bench Press</h3>
                <img src="images/chest/declineDumbbellBenchPress.png" alt="Decline Dumbbell Bench Press">
            </div>

            <div class="exercise" onclick="openExerciseChest('Incline Dumbbell Bench Press')">
                <h3>Incline Dumbbell Bench Press</h3>
                <img src="images/chest/inclineDumbbellBenchPress.png" alt="Incline Dumbbell Bench Press">
            </div>

            <div class="exercise" onclick="openExerciseChest('Close Grip Dumbbell Press')">
                <h3>Close Grip Dumbbell Press</h3>
                <img src="images/chest/closeGripDumbbell.png" alt="Close Grip Dumbbell Press">
            </div>

            <div class="exercise" onclick="openExerciseChest('Alternating Dumbbell Bench Press')">
                <h3>Alternating Dumbbell Bench Press</h3>
                <img src="images/chest/alternateDumbbellBenchPress.png" alt="Alternate Dumbbell Bench Press">
            </div>

            <div class="exercise" onclick="openExerciseChest('Alternating Dumbbell Fly')">
                <h3>Alternating Dumbbell Fly</h3>
                <img src="images/chest/alternatingDumbbellFly.png" alt="Alternating Dumbbell Fly">
            </div>

            <div class="exercise" onclick="openExerciseChest('Dumbbell Fly')">
                <h3>Dumbbell Fly</h3>
                <img src="images/chest/dumbbellFly.png" alt="Dumbbell Flys">
            </div>

            <div class="exercise" onclick="openExerciseChest('Incline Dumbbell Fly')">
                <h3>Incline Dumbbell Fly</h3>
                <img src="images/chest/inclineDumbbellFly.png" alt="Incline Dumbbell Flys">
            </div>

            <div class="exercise" onclick="openExerciseChest('Decline Dumbbell Fly')">
                <h3>Decline Dumbbell Fly</h3>
                <img src="images/chest/declineDumbbellFly.png" alt="Decline Dumbbell Flys">
            </div>

            <div class="exercise" onclick="openExerciseChest('Cable Chest Press')">
                <h3>Cable Chest Press</h3>
                <img src="images/chest/cableChestPress.png" alt="Cable Chest Press">
            </div>

            <div class="exercise" onclick="openExerciseChest('Standing Cable Fly')">
                <h3>Standing Cable Fly</h3>
                <img src="images/chest/standingCableFly.png" alt="Standing Cable Fly">
            </div>

            <div class="exercise" onclick="openExerciseChest('Standing High to Low Cable Fly')">
                <h3>Standing High to Low Cable Fly</h3>
                <img src="images/chest/highToLowCableFly.png" alt="Standing High to Low Cable Fly">
            </div>
        </div>
        <?php include 'exercise_modal.php'; ?>
        </main>

        <?php include 'footer.php'; ?>
        <script src="exercises.js"></script>
        <script src="chest_exercises.js"></script>
    </body>
</html>