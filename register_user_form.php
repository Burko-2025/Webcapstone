<!DOCTYPE html>
<html>

    <head>
        <title>Register User</title>
        <link rel="stylesheet" type="text/css" href="css/app.css"/>
      </head>

    <body>
        <?php
        $pageClass = 'register-page'; 
        include 'header.php'; ?>
        <main>
          <div class= "login-details">
          <h2>Register User</h2>
          <form action="register_user.php" method="post" id="register_user_form" 
          enctype="multipart/form-data">
            <div id ="data">
              <div class="form-row-register">
                <label for="userName">First Name:</label>
                <input type="text" id="userName" name="user_name" required><br>
              </div>

              <div class="form-row-register">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required><br>
              </div>

              <div class="form-row-register">
                <label for="emailAddress">Email Address:</label>
                <input type="text" id="emailAddress" name="email_address" required><br>
              </div>

            </div>

            <div>
              <input type="submit" class="add-button" value="Register">
            </div>

          </form>

        <p><a class="add-button" href="login_form.php">View Login</a></p>
        </div>
        </main>

        <?php include 'footer.php'; ?>


    </body>
</html>