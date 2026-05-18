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
            <h2 class="chest">Leg Exercises</h2>
        <div class="exercises">
            <div class="exercise" onclick="openExercise('Leg Curl')">
                <h3>Leg Curl</h3>
                <img src="images/legs/LegCurl.png" alt="Leg Curl">
            </div>

            <div class="exercise" onclick="openExercise('Seated Leg Curl')">
                <h3>Seated Leg Curl</h3>
                <img src="images/legs/SeatedLegCurl.png" alt="Seated Leg Curl">
            </div>

            <div class="exercise" onclick="openExercise('Glute Ham Raise')">
                <h3>Glute Ham Raise</h3>
                <img src="images/legs/GluteHamRaise.png" alt="Glute Ham Raise">
            </div>

            <div class="exercise" onclick="openExercise('Nordic Hamstring Curl (Bodyweight)')">
                <h3>Nordic Hamstring Curl (Bodyweight)</h3>
                <img src="images/legs/NordicHamstringCurl.png" alt="Nordic Hamstring Curl (Bodyweight)">
            </div>

            <div class="exercise" onclick="openExercise('Barbell Back Squat')">
                <h3>Barbell Back Squat</h3>
                <img src="images/legs/BarbellBackSquat.png" alt="Barbell Back Squat">
            </div>

            <div class="exercise" onclick="openExercise('Dumbbell Goblet Squat')">
                <h3>Dumbbell Goblet Squat</h3>
                <img src="images/legs/DumbbellGobletSquat.png" alt="Dumbbell Goblet Squat">
            </div>

            <div class="exercise" onclick="openExercise('Leg Extension')">
                <h3>Leg Extension</h3>
                <img src="images/legs/LegExtension.png" alt="Leg Extension">
            </div>

            <div class="exercise" onclick="openExercise('Dumbbell Lunge')">
                <h3>Dumbbell Lunge</h3>
                <img src="images/legs/DumbbellLunge.png" alt="Dumbbell Lunge">
            </div>

            <div class="exercise" onclick="openExercise('Leg Press')">
                <h3>Leg Press</h3>
                <img src="images/legs/LegPress.png" alt="Leg Press">
            </div>

            <div class="exercise" onclick="openExercise('One Leg Dumbbell Squat')">
                <h3>One Leg Dumbbell Squat</h3>
                <img src="images/legs/OneLegDumbbellSquat.png" alt="One Leg Dumbbell Squat">
            </div>

            <div class="exercise" onclick="openExercise('Machine Hack Squat')">
                <h3>Machine Hack Squat</h3>
                <img src="images/legs/MachineHackSquat.png" alt="Machine Hack Squat">
            </div>

            <div class="exercise" onclick="openExercise('Bodyweight Pistol Squat')">
                <h3>Bodyweight Pistol Squat</h3>
                <img src="images/legs/BodyweightPistolSquat.png" alt="Bodyweight Pistol Squat">
            </div>

            <div class="exercise" onclick="openExercise('Seated Calf Raise')">
                <h3>Seated Calf Raise</h3>
                <img src="images/legs/SeatedCalfRaise.png" alt="Seated Calf Raise">
            </div>

            <div class="exercise" onclick="openExercise('45 Degree Leg Press Calf Raise')">
                <h3>45 Degree Leg Press Calf Raise</h3>
                <img src="images/legs/45DegreeLegPressCalfRaise.png" alt="45 Degree Leg Press Calf Raise">
            </div>
        
            <div class="exercise" onclick="openExercise('Bodyweight Standing Calf Raise')">
                <h3>Bodyweight Standing Calf Raise</h3>
                <img src="images/legs/BodyweightStandingCalfRaise.png" alt="Bodyweight Standing Calf Raise">
            </div>

        </div>
        <?php include 'exercise_modal.php'; ?>
        </main>
        </main>

        <?php include 'footer.php'; ?>
    </body>
    <script src="exercises.js"></script>
</html>