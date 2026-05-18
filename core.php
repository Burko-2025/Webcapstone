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
            <h2 class="chest">Core Exercises</h2>
        <div class="exercises">
            <div class="exercise" onclick="openExercise('Lying Floor Leg Raise')">
                <h3>Lying Floor Leg Raise</h3>
                <img src="images/core/lyingFloorLegRaise.png" alt="Lying Floor Leg Raise ">
            </div>

            <div class="exercise" onclick="openExercise('Cable Crunch')">
                <h3>Cable Crunch</h3>
                <img src="images/core/CableCrunch.png" alt="Cable Crunch">
            </div>

            <div class="exercise" onclick="openExercise('Weighted Crunch')">
                <h3>Weighted Crunch</h3>
                <img src="images/core/WeightedCrunch.png" alt="Weighted Crunch">
            </div>

            <div class="exercise" onclick="openExercise('Plank')">
                <h3>Plank</h3>
                <img src="images/core/Plank.png" alt="Plank">
            </div>

            <div class="exercise" onclick="openExercise('Hanging Leg Raise')">
                <h3>Hanging Leg Raise</h3>
                <img src="images/core/HangingLegRaise.png" alt="Hanging Leg Raise">
            </div>

            <div class="exercise" onclick="openExercise('Side Plank')">
                <h3>Side Plank</h3>
                <img src="images/core/SidePlank.png" alt="Side Plank">
            </div>

            <div class="exercise" onclick="openExercise('Sit Up')">
                <h3>Sit Up</h3>
                <img src="images/core/SitUp.png" alt="Sit Up">
            </div>

            <div class="exercise" onclick="openExercise('Decline Bench Sit Up')">
                <h3>Decline Bench Sit Up</h3>
                <img src="images/core/DeclineBenchSitUp.png" alt="Decline Bench Sit Up">
            </div>

            <div class="exercise" onclick="openExercise('Ab Crunch')">
                <h3>Ab Crunch</h3>
                <img src="images/core/AbCrunch.png" alt="Ab Crunch">
            </div>

            <div class="exercise" onclick="openExercise('Abdominal Air Bike (AKA Bicycle)')">
                <h3>Abdominal Air Bike (AKA Bicycle)</h3>
                <img src="images/core/AbdominalAirBike.png" alt="Abdominal Air Bike (AKA Bicycle)">
            </div>

            <div class="exercise" onclick="openExercise('Rotating Mountain Climber')">
                <h3>Rotating Mountain Climber</h3>
                <img src="images/core/RotatingMountainClimber.png" alt="Rotating Mountain Climber">
            </div>

            <div class="exercise" onclick="openExercise('Lying Floor Knee Tuck')">
                <h3>Lying Floor Knee Tuck</h3>
                <img src="images/core/LyingFloorKneeTuck.png" alt="Lying Floor Knee Tuck">
            </div>

            <div class="exercise" onclick="openExercise('Straight Leg Toe Touch (Floor Toe Reach)')">
                <h3>Straight Leg Toe Touch (Floor Toe Reach)</h3>
                <img src="images/core/StraightLegToeTouch.png" alt="Straight Leg Toe Touch (Floor Toe Reach)">
            </div>

            <div class="exercise" onclick="openExercise('Frog Sit Up')">
                <h3>Frog Sit Up</h3>
                <img src="images/core/FrogSitUp.png" alt="Frog Sit Up">
            </div>
        
            <div class="exercise" onclick="openExercise('Wide Stance Cable Anti-Rotation')">
                <h3>Wide Stance Cable Anti-Rotation</h3>
                <img src="images/core/WideStanceCableAnti-Rotation.png" alt="Wide Stance Cable Anti-Rotation">
            </div>

            <div class="exercise" onclick="openExercise('Hands Overhead Ab Crunch')">
                <h3>Hands Overhead Ab Crunch</h3>
                <img src="images/core/HandsOverheadAbCrunch.png" alt="Hands Overhead Ab Crunch">
            </div>
        </div>
        <?php include 'exercise_modal.php'; ?>
        </main>
        </main>

        <?php include 'footer.php'; ?>
    </body>
    <script src="exercises.js"></script>
</html>