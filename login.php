<?php
    session_start();
    date_default_timezone_set('America/Toronto');

    require 'database.php';

    $user_name = filter_input(INPUT_POST, 'user_name');
    $user_password = filter_input(INPUT_POST, 'password');
    

    //check for duplicate userName
    $queryUsers = 'SELECT userID, userName, password, emailAddress FROM registrations WHERE userName = :user_name';
    $statement = $db->prepare($queryUsers);
    $statement->bindValue(':user_name', $user_name);
    $statement->execute();
    $user = $statement->fetch();
    $statement->closeCursor();

    if ($user) {
        if (password_verify($user_password, $user['password'])) {
            // Password is correct, set session variables
            $_SESSION['userID'] = $user['userID'];
            $_SESSION['userName'] = $user['userName'];
            $_SESSION['isLoggedIn'] = true;
            header("Location: index.php");
            exit();
        } else {
            // Password is incorrect

            $_SESSION['login_error'] = "Invalid password.";
            header("Location: login_form.php");
            exit();
        }
    }
    else {
        $_SESSION['login_error'] = "No user found with that username.";
        header("Location: login_form.php");
        exit();
    }
?>