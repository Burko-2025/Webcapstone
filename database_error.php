<?php
    session_start();
?>
<!DOCTYPE html>
<html>

    <head>
        <title>Players Manager - Database Error</title>
        <link rel="stylesheet" type="text/css" href="css/app.css"/>
      </head>

    <body>
        <?php include 'header.php'; ?>

        <main>
          <h2>Database Error</h2>

          <p2>There was an error connecting to the database.</p2>
          <p2>The database must be installed and configured correctly.</p2>
          <p2>MySQL must be running.</p2>
          <p2>Error Message: <?php echo $_SESSION['database_error']; ?></p2>

          <p><a href="login_form.php">Login Screen</a></p>
        </main>

        <?php include 'footer.php'; ?>


    </body>
</html>