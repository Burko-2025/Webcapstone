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
            <h2 class="chest">Shoulder Exercises</h2>
        <div class="exercises">
            <div class="exercise" onclick="openExercise('Dumbbell Lateral Raise')">
                <h3>Dumbbell Lateral Raise</h3>
                <img src="images/shoulder/DumbbellLateralRaise.png" alt="Dumbbell Lateral Raise">
            </div>

            <div class="exercise" onclick="openExercise('Military Press (AKA Overhead Press)')">
                <h3>Military Press (AKA Overhead Press)</h3>
                <img src="images/shoulder/MilitaryPress.png" alt="Military Press (AKA Overhead Press)">
            </div>

            <div class="exercise" onclick="openExercise('Bent Over Dumbbell Reverse Fly')">
                <h3>Bent Over Dumbbell Reverse Fly</h3>
                <img src="images/shoulder/BentOverDumbbellReverseFly.png" alt="Bent Over Dumbbell Reverse Fly">
            </div>

            <div class="exercise" onclick="openExercise('Seated Dumbbell Press')">
                <h3>Seated Dumbbell Press</h3>
                <img src="images/shoulder/SeatedDumbbellPress.png" alt="Seated Dumbbell Press">
            </div>

            <div class="exercise" onclick="openExercise('Standing Dumbbell Shoulder Press')">
                <h3>Standing Dumbbell Shoulder Press</h3>
                <img src="images/shoulder/StandingDumbbellShoulderPress.png" alt="Standing Dumbbell Shoulder Press">
            </div>

            <div class="exercise" onclick="openExercise('Smith Machine Shoulder Press')">
                <h3>Smith Machine Shoulder Press</h3>
                <img src="images/shoulder/SmithMachineShoulderPress.png" alt="Smith Machine Shoulder Press">
            </div>

            <div class="exercise" onclick="openExercise('Seated Arnold Press')">
                <h3>Seated Arnold Press</h3>
                <img src="images/shoulder/SeatedArnoldPress.png" alt="Seated Arnold Press">
            </div>

            <div class="exercise" onclick="openExercise('Cable Face Pull')">
                <h3>Cable Face Pull</h3>
                <img src="images/shoulder/CableFacePull.png" alt="Cable Face Pull">
            </div>

            <div class="exercise" onclick="openExercise('Seated Barbell Shoulder Press')">
                <h3>Seated Barbell Shoulder Press</h3>
                <img src="images/shoulder/SeatedBarbellShoulderPress.png" alt="Seated Barbell Shoulder Press">
            </div>

            <div class="exercise" onclick="openExercise('Standing Dumbbell Front Raise')">
                <h3>Standing Dumbbell Front Raise</h3>
                <img src="images/shoulder/StandingDumbbellFrontRaise.png" alt="Standing Dumbbell Front Raise">
            </div>

            <div class="exercise" onclick="openExercise('Standing Cable Reverse Fly')">
                <h3>Standing Cable Reverse Fly</h3>
                <img src="images/shoulder/StandingCableReverseFly.png" alt="Standing Cable Reverse Fly">
            </div>

            <div class="exercise" onclick="openExercise('Machine Shoulder Press')">
                <h3>Machine Shoulder Press</h3>
                <img src="images/shoulder/MachineShoulderPress.png" alt="Machine Shoulder Press">
            </div>

            <div class="exercise" onclick="openExercise('Cable Lateral Raise')">
                <h3>Cable Lateral Raise</h3>
                <img src="images/shoulder/CableLateralRaise.png" alt="Cable Lateral Raise">
            </div>

            <div class="exercise" onclick="openExercise('Seated Behind the Neck Shoulder Press')">
                <h3>Seated Behind the Neck Shoulder Press</h3>
                <img src="images/shoulder/SeatedBehindtheNeckShoulderPress.png" alt="Seated Behind the Neck Shoulder Press">
            </div>

            <div class="exercise" onclick="openExercise('Cable Upright Row')">
                <h3>Cable Upright Row</h3>
                <img src="images/shoulder/CableUprightRow.png" alt="Cable Upright Row">
            </div>

            <div class="exercise" onclick="openExercise('Standing Arnold Press')">
                <h3>Standing Arnold Press</h3>
                <img src="images/shoulder/StandingArnoldPress.png" alt="Standing Arnold Press">
            </div>
        
        </div>
        <?php include 'exercise_modal.php'; ?>
        </main>
        

        <?php include 'footer.php'; ?>
    </body>
    <script src="exercises.js"></script>
</html>