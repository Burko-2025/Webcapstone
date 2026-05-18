<?php
    


?>

<!DOCTYPE html>
<html>

    <head>
        <title>Login</title>
        <link rel="stylesheet" type="text/css" href="css/app.css"/>
      </head>

    <body>
        
        <?php
        $pageClass = 'login-page'; 
        include 'header.php'; ?>

        <main>
          <div class = "login-details">
          <h2>Login </h2>
          
          <?php
          if (isset($_SESSION['login_error'])) {
              echo '<p style="color: red; font-weight: bold;">' . htmlspecialchars($_SESSION['login_error']) . '</p>';
              unset($_SESSION['login_error']);
          }
          ?>
          
            <form action="login.php" method="post" id="login_form" 
            enctype="multipart/form-data">
            <div id="data">

              <div class="form-row">
                <label for="userName">User Name:</label>
                <input type="text" id="userName" name="user_name">
              </div>

              <div class="form-row">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password">
              </div>



              </div>
            

            <div>
              <button type="submit" class="add-button">Login</button>
              
            </div>

            

          </form>
            <a href="register_user_form.php">
              <button class="add-button">Register</button>
            </a>

            </div>
        </main>

        <?php include 'footer.php'; ?>


    </body>
</html>