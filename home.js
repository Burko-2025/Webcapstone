document.addEventListener("DOMContentLoaded", () => {
  loadWorkout();
  loadPreviousWorkouts();
});

function loadWorkout() {
  let workout = JSON.parse(localStorage.getItem("workout")) || [];
  let table = document.getElementById("workoutTable");

  table.innerHTML = "";

  workout.forEach((exercise) => {
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${exercise}</td>
        <td>
            <button class="complete-btn"
                onclick="completeExercise('${exercise}')">
                Completed
            </button>
        </td>
    `;

    table.appendChild(row);
  });
}
function completeExercise(name) {
  let sets = prompt("How many sets?");
  sets = parseInt(sets);

  if (!sets || sets <= 0) return;

  let container = document.getElementById("setsContainer");

  container.innerHTML = `<h3>${name}</h3>`;

  for (let i = 1; i <= sets; i++) {
    container.innerHTML += `
            <div>
                <h4>Set ${i}</h4>
                Reps: <input type="number" id="reps-${i}"><br>
                Weight: <input type="number" id="weight-${i}"><br>
                Comment: <input type="text" id="comment-${i}"><br><br>
            </div>
        `;
  }

  container.innerHTML += `
        <button onclick="saveExercise('${name}', ${sets})">
            Save Exercise
        </button>
    `;
}

function saveExercise(name, sets) {
  let setData = [];

  for (let i = 1; i <= sets; i++) {
    setData.push({
      setNumber: i,
      reps: document.getElementById(`reps-${i}`).value,
      weight: document.getElementById(`weight-${i}`).value,
      comment: document.getElementById(`comment-${i}`).value,
    });
  }

  // get exerciseID from DB
  fetch(`get_exercise_id.php?name=${encodeURIComponent(name)}`)
    .then((res) => res.json())
    .then((result) => {
      fetch("save_workout.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          exerciseID: result.exerciseID,
          sets: setData,
        }),
      })
        .then((res) => res.text())
        .then((data) => {
          console.log("Server response:", data);
          alert(data);
        })
        .catch((err) => {
          console.error("Error:", err);
        });
    });
}
function finishWorkout() {
  if (!confirm("Finish workout?")) return;

  localStorage.removeItem("workout");

  document.getElementById("workoutTable").innerHTML = "";
  document.getElementById("setsContainer").innerHTML = "";

  loadPreviousWorkouts();
}
function loadPreviousWorkouts() {
  // fetch("previous_workouts.php")
  // .then((res) => res.text())
  // .then((data) => {
  //   console.log("RAW RESPONSE:", data);
  // });
  fetch("previous_workouts.php")
    .then((res) => res.json())
    .then((data) => {
      let table = document.getElementById("previousWorkoutsTable");
      table.innerHTML = "";

      data.forEach((workout) => {
        let row = document.createElement("tr");

        row.innerHTML = `
          <td>${workout.date}</td>
          <td>${workout.exercises.join(", ")}</td>
          <td>
            <button onclick="viewWorkout('${workout.date}')">
              View
            </button>
          </td>
        `;

        table.appendChild(row);
      });
    });
}
function viewWorkout(date) {
  fetch(`get_workout_details.php?date=${date}`)
    .then((res) => res.json())
    .then((data) => {
      let container = document.getElementById("setsContainer");

      container.innerHTML = `<h7>Workout on ${date}</h7>`;

      data.forEach((exercise) => {
        container.innerHTML += `<h6>${exercise.name}</h6>`;

        exercise.sets.forEach((set) => {
          container.innerHTML += `
            <div>
              Set ${set.setNumber} |
              Reps: ${set.reps} |
              Weight: ${set.weight} |
              Comment: ${set.comment || ""}
            </div>
          `;
        });
      });
    });
}
function clearWorkout() {
  if (!confirm("Clear current workout?")) return;

  // remove workout from localStorage
  localStorage.removeItem("workout");

  // clear workout table
  document.getElementById("workoutTable").innerHTML = "";

  // clear sets/details section
  document.getElementById("setsContainer").innerHTML = "";

  alert("Workout cleared.");
}