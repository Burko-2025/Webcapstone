<?php
      session_start();
      
    $currentPage = basename($_SERVER['PHP_SELF']);

?>   
    <body class="<?= $pageClass ?? '' ?>">
        <a id="logo" href="index.php">
            <img src="images/gymlogo.png" alt="logo">
        </a>

        <div id="social">
            <img src="images/dragonbit.png" alt="dragonbit" class="socialDragonbit">
            <img src="images/linkedin.png" alt="linkedin" class="socialLinkedin">
            <img src="images/facebook.png" alt="facebook" class="socialFacebook">
        </div>
       <header>
            <h1 class="header-title">
            <span>Workout</span> <span>Tracker</span>
            </h1>
        </header>
        <nav>
            <a class="<?= $currentPage == 'index.php' ? 'active' : '' ?>" href="index.php">Home</a>

            <a class="<?= $currentPage == 'chest.php' ? 'active' : '' ?>" href="chest.php">Chest</a>

            <a class="<?= $currentPage == 'back.php' ? 'active' : '' ?>" href="back.php">Back</a>

            <a class="<?= $currentPage == 'shoulders.php' ? 'active' : '' ?>" href="shoulders.php">Shoulders</a>

            <a class="<?= $currentPage == 'biceps.php' ? 'active' : '' ?>" href="biceps.php">Biceps</a>

            <a class="<?= $currentPage == 'triceps.php' ? 'active' : '' ?>" href="triceps.php">Triceps</a>

            <a class="<?= $currentPage == 'legs.php' ? 'active' : '' ?>" href="legs.php">Legs</a>

            <a class="<?= $currentPage == 'core.php' ? 'active' : '' ?>" href="core.php">Core</a>

            <?php
            if (isset($_SESSION['userName'])) {
                echo '<a class="' . ($currentPage == 'logout.php' ? 'active' : '') . '" href="logout.php">Logout</a>';
            } else {
                echo '<a class="' . ($currentPage == 'login_form.php' ? 'active' : '') . '" href="login_form.php">Login</a>';
            }
            ?>
        </nav>
    </body>