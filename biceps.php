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
            <h2 class="chest">Bicep Exercises</h2>
        <div class="exercises">
            <div class="exercise" onclick="openExercise('Standing Hammer Curl')">
                <h3>Standing Hammer Curl</h3>
                <img src="images/biceps/StandingHammerCurl.png" alt="Standing Hammer Curl">
            </div>

            <div class="exercise" onclick="openExercise('Standing Dumbbell Curl')">
                <h3>Standing Dumbbell Curl</h3>
                <img src="images/biceps/StandingDumbbellCurl.png" alt="Standing Dumbbell Curl">
            </div>

            <div class="exercise" onclick="openExercise('Incline Dumbbell Curl')">
                <h3>Incline Dumbbell Curl</h3>
                <img src="images/biceps/InclineDumbbellCurl.png" alt="Incline Dumbbell Curl">
            </div>

            <div class="exercise" onclick="openExercise('Cable Curl')">
                <h3>Cable Curl</h3>
                <img src="images/biceps/CableCurl.png" alt="Cable Curl">
            </div>

            <div class="exercise" onclick="openExercise('Standing Barbell Curl')">
                <h3>Standing Barbell Curl</h3>
                <img src="images/biceps/StandingBarbellCurl.png" alt="Standing Barbell Curl">
            </div>

            <div class="exercise" onclick="openExercise('Concentration Curl')">
                <h3>Concentration Curl</h3>
                <img src="images/biceps/ConcentrationCurl.png" alt="Concentration Curl">
            </div>

            <div class="exercise" onclick="openExercise('Barbell Preacher Curl')">
                <h3>Barbell Preacher Curl</h3>
                <img src="images/biceps/BarbellPreacherCurl.png" alt="Barbell Preacher Curl">
            </div>

            <div class="exercise" onclick="openExercise('Cable Curl (Rope Extension)')">
                <h3>Cable Curl (Rope Extension)</h3>
                <img src="images/biceps/CableCurl(RopeExtension).png" alt="Cable Curl (Rope Extension)">
            </div>

            <div class="exercise" onclick="openExercise('Machine Bicep Curl')">
                <h3>Machine Bicep Curl</h3>
                <img src="images/biceps/MachineBicepCurl.png" alt="Machine Bicep Curl">
            </div>

            <div class="exercise" onclick="openExercise('Dumbbell Hammer Preacher Curl')">
                <h3>Dumbbell Hammer Preacher Curl</h3>
                <img src="images/biceps/DumbbellHammerPreacherCurl.png" alt="Dumbbell Hammer Preacher Curl">
            </div>

            <div class="exercise" onclick="openExercise('Standing Dumbbell Reverse Curl')">
                <h3>Standing Dumbbell Reverse Curl</h3>
                <img src="images/biceps/StandingDumbbellReverseCurl.png" alt="Standing Dumbbell Reverse Curl">
            </div>

            <div class="exercise" onclick="openExercise('Incline Hammer Curl')">
                <h3>Incline Hammer Curl</h3>
                <img src="images/biceps/InclineHammerCurl.png" alt="Incline Hammer Curl">
            </div>

            <div class="exercise" onclick="openExercise('Dumbbell Preacher Curl')">
                <h3>Dumbbell Preacher Curl</h3>
                <img src="images/biceps/DumbbellPreacherCurl.png" alt="Dumbbell Preacher Curl">
            </div>

            <div class="exercise" onclick="openExercise('Close Grip Standing Barbell Curl')">
                <h3>Close Grip Standing Barbell Curl</h3>
                <img src="images/biceps/CloseGripStandingBarbellCurl.png" alt="Close Grip Standing Barbell Curl">
            </div>
        
        </div>
        <?php include 'exercise_modal.php'; ?>
        </main>
        

        <?php include 'footer.php'; ?>
    </body>
    <script src="exercises.js"></script>
</html>