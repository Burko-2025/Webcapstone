        <div id="exerciseModal" class="modal">
        <div class="modal-content">

            <span class="close" onclick="closeExercise()">&times;</span>

            <div class="modal-body">

            <!-- LEFT SIDE -->
            <div class="exercise-info">
                <h5 class="exercise-title" id="exerciseTitle"></h5>
                <p id="exerciseDetails"></p>
                <div class="exercise-video">
                  <iframe id="exerciseVideo"
                  width="800"
                  height="600"
                  src=""
                  frameborder="0"
                  allowfullscreen>
                  </iframe>
                </div>
            </div>

            <!-- RIGHT SIDE -->
            <div class="exercise-how">
                <h5 class="perform">How to Perform</h5>
                <p id="exerciseSteps"></p>
                <h5 class="tips">Exercise Tips</h5>
                <p id="exerciseTips"></p>


            </div>

            </div>

            <div class="modal-footer">
                <?php if (isset($_SESSION['isLoggedIn']) && $_SESSION['isLoggedIn']) : ?>
                    <button onclick="addToWorkout(document.getElementById('exerciseTitle').textContent)">
                        Add to Workout
                    </button>
                <?php else : ?>
                    <button disabled>Please log in</button>
                <?php endif; ?>
            </div>

        </div>
        </div>