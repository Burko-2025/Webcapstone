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
            <h2 class="chest">Tricep Exercises</h2>
            <div class="exercises">
            <div class="exercise" onclick="openExercise('Straight Bar Tricep Extension')">
                <h3>Straight Bar Tricep Extension</h3>
                <img src="images/triceps/StraightBarTricepExtension.png" alt="Straight Bar Tricep Extension">
            </div>

            <div class="exercise" onclick="openExercise('Seated Dumbbell Tricep Extension')">
                <h3>Seated Dumbbell Tricep Extension</h3>
                <img src="images/triceps/SeatedDumbbellTricepExtension.png" alt="Seated Dumbbell Tricep Extension">
            </div>

            <div class="exercise" onclick="openExercise('Lying Dumbbell Extension')">
                <h3>Lying Dumbbell Extension</h3>
                <img src="images/triceps/LyingDumbbellExtension.png" alt="Lying Dumbbell Extension">
            </div>

            <div class="exercise" onclick="openExercise('Rope Tricep Extension')">
                <h3>Rope Tricep Extension</h3>
                <img src="images/triceps/RopeTricepExtension.png" alt="Rope Tricep Extension">
            </div>

            <div class="exercise" onclick="openExercise('EZ Bar Skullcrusher')">
                <h3>EZ Bar Skullcrusher</h3>
                <img src="images/triceps/EZBarSkullcrusher.png" alt="EZ Bar Skullcrusher">
            </div>

            <div class="exercise" onclick="openExercise('Close Grip Bench Press')">
                <h3>Close Grip Bench Press</h3>
                <img src="images/triceps/CloseGripBenchPress.png" alt="Close Grip Bench Press">
            </div>

            <div class="exercise" onclick="openExercise('Tricep Dip')">
                <h3>Tricep Dip</h3>
                <img src="images/triceps/TricepDip.png" alt="Tricep Dip">
            </div>

            <div class="exercise" onclick="openExercise('Bent Over Dumbbell Tricep Kickback')">
                <h3>Bent Over Dumbbell Tricep Kickback</h3>
                <img src="images/triceps/BentOverDumbbellTricepKickback.png" alt="Bent Over Dumbbell Tricep Kickback">
            </div>

            <div class="exercise" onclick="openExercise('Two Arm Standing Dumbbell Extension')">
                <h3>Two Arm Standing Dumbbell Extension</h3>
                <img src="images/triceps/TwoArmStandingDumbbellExtension.png" alt="Two Arm Standing Dumbbell Extension">
            </div>

            <div class="exercise" onclick="openExercise('Reverse Grip Cable Tricep Extension')">
                <h3>Reverse Grip Cable Tricep Extension</h3>
                <img src="images/triceps/ReverseGripCableTricepExtension.png" alt="Reverse Grip Cable Tricep Extension">
            </div>

            <div class="exercise" onclick="openExercise('High Pulley Overhead Tricep Extension (Rope Extension)')">
                <h3>High Pulley Overhead Tricep Extension (Rope Extension)</h3>
                <img src="images/triceps/HighPulleyOverheadTricepExtension(RopeExtension).png" alt="High Pulley Overhead Tricep Extension (Rope Extension)">
            </div>

            <div class="exercise" onclick="openExercise('High Pulley Overhead Tricep Extension (Straight Bar Extension)')">
                <h3>High Pulley Overhead Tricep Extension (Straight Bar Extension)</h3>
                <img src="images/triceps/HighPulleyOverheadTricepExtension.png" alt="High Pulley Overhead Tricep Extension">
            </div>

            <div class="exercise" onclick="openExercise('Smith Machine Reverse Close Grip Bench Press')">
                <h3>Smith Machine Reverse Close Grip Bench Press</h3>
                <img src="images/triceps/SmithMachineReverseCloseGripBenchPress.png" alt="Smith Machine Reverse Close Grip Bench Press">
            </div>

            <div class="exercise" onclick="openExercise('Single Bench Dip')">
                <h3>Single Bench Dip</h3>
                <img src="images/triceps/SingleBenchDip.png" alt="Single Bench Dip">
            </div>
        
            <div class="exercise" onclick="openExercise('Seated EZ Bar French Press')">
                <h3>Seated EZ Bar French Press</h3>
                <img src="images/triceps/SeatedEZBarFrenchPress.png" alt="Seated EZ Bar French Press">
            </div>

        </div>
        <?php include 'exercise_modal.php'; ?>
        </main>

        <?php include 'footer.php'; ?>
        <script src="exercises.js"></script>
    </body>
</html>