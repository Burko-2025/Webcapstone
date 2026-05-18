<?php
session_start();
    if (!isset($_SESSION['isLoggedIn'])){
        header("Location: login_form.php");
        die();
    }
    require 'database.php';
?>
<!DOCTYPE html>
<html>

    <head>
        <title>Workout Tracker</title>
        <link rel="stylesheet" type="text/css" href="css/app.css"/>
      </head>

        <?php include 'header.php'; ?>
        <body>
        <main>
            <h6>Welcome to the Workout Tracker Page(<?php echo $_SESSION['userName']; ?>)</h6>
            <h7>Today is a great day to improve yourself!</h7><br>
            <h8>Current Workout</h8>

            <table border="1">
                <thead>
                    <tr>
                        <th>Exercise</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="workoutTable"></tbody>
            </table>

            <div id="setsContainer"></div>

<button class="finish-btn" onclick="finishWorkout()">
    Finish Workout
</button>

<button class="clear-btn" onclick="clearWorkout()">
    Clear Workout
</button><br>
            <h8>Previous Workouts</h8>

            <table border="1">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Exercises</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="previousWorkoutsTable"></tbody>
            </table>
            <script src="home.js"></script>
        </main>

        <?php include 'footer.php'; ?>
    </body>
</html>