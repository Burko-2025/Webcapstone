
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

        <?php foreach ($exercises as $id => $exercise): ?>
            <div class="exercise" onclick="openExercise2('<?php echo $exercise['js']; ?>')">
                
                <h3><?php echo $exercise['name']; ?></h3>

                <img 
                    src="<?php echo $exercise['image']; ?>" 
                    alt="<?php echo $exercise['name']; ?>"
                >

            </div>
        <?php endforeach; ?>

    </div>

    <?php include 'exercise_modal.php'; ?>
</main>

<?php include 'footer.php'; ?>

<script src="exercises.js"></script>
<script src="exercise2.js"></script>

</body>
</html>