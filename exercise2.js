function openExercise2(id) {
  const exercise = exercises[id];

  if (!exercise) {
    console.error("Exercise not found:", id);
    return;
  }

  document.getElementById("exerciseTitle").innerText = exercise.name;
  document.getElementById("exerciseDetails").innerText = exercise.details;
  document.getElementById("exerciseSteps").innerText = exercise.steps;
  document.getElementById("exerciseTips").innerText = exercise.tips;
  document.getElementById("exerciseVideo").src = exercise.video;

  document.getElementById("exerciseModal").style.display = "block";
}
const exercises = {
  "bent_over_row": {
    name: "Bent Over Row",
    muscleGroup: "Back",
    image: "images/back/bentOverRow.jpg",
    details: "The bent over row is a back day staple exercise and is considered one of the best muscle building back building exercises you can do. Sometimes referred to as the barbell row, the bent over row is a staple movement in most muscle building workouts. Those looking to build muscle utilize the bent over row to target their back, bicep and core muscle. Those in powerlifting and strength circles perform bent over rows to increase their strength on the big 3 movements. The bent over row is typically used to build and strengthen the muscles of the upper back (latissimus dorsi, rhomboids, and trapezius). However, it requires assistance from muscles of the low back, core, and arms to perform a bent over row correctly. There are several variations of the bent over row one can and should perform. Bent over row variations include: \n • Dumbbell Bent Over Row \n • One Arm Bent Over Dumbbell Row \n • Reverse Grip Bent Over Row \n • T-Bar Row \n • Smith Machine Row \n The back is a tricky muscle group to build and strengthen. Sometimes it can help to vary the degree in which you perform the bent over row and well as the hand placement on the bar. Regardless, the bent over row is a great exercise to include in your back workout.",
    steps: "1. Assume a standing position while holding the bar using a double overhand grip.\n2. Hinge forward until your torso is roughly parallel with the floor (or slightly above) and then begin the movement by driving the elbows behind the body while retracting the shoulder blades.\n3. Pull the bar towards your belly button until it touches your body and then slowly lower the bar back to the starting position under control.\n",
    tips: "1. Experiment with head position and see which option (looking forward vs. packing the neck) works better for you.\n2. Keep some tone through your abdominals as you pull the bar into your body to ensure you don’t arch excessively through your spine.\n3. Don’t allow momentum to dictate the movement, control the bar throughout the entirety of each rep.\n4. Don’t allow the head to jut forward as you pull.\n5. Similarly, ensure the shoulder blade moves on the rib cage. Don’t lock the shoulder blade down and just move through the glenohumeral joint.",
    video: "https://www.youtube.com/embed/paCfxhgW6bI"
  },

  "incline_bench_barbell_row": {
    name: "Incline Bench Barbell Row",
    muscleGroup: "Back",
    image: "images/back/barbellInclineRow.jpg",
    details: "This variation reduces lower back strain by using an incline bench.",
    steps: "1. Set up an incline bench at around a 30-degree angle. You can also use a propped up flat bench. Grab a barbell and place it at the end of the incline bench.\n2. Lay down on the bench in a prone (facing down) position with your legs at the lower end of the bench. If it's more comfortable, you can put your feet on the floor. This also adds stability.\n3. Grip the barbell with a wide overhand grip.\n4. Keeping your head up, eyes looking forward, slowly raise the bar up towards your chest.\n5. Raise the bar as far as possible, pause, and then slowly lower the bar back to the starting position.\n",
    tips: "1. Keep your elbows in.\n2. Squeeze your shoulder blades together and hold at the top of the movement to get the maximum results from this exercise.",
    video: "https://www.youtube.com/embed/2cGfXlLaJT0?"
  },

  "pendlay_row": {
    name: "Pendlay Row",
    muscleGroup: "Back",
    image: "images/back/pendlay-row.jpg",
    details: "The Pendlay row is a variation of the bent over row and an exercise used to build strength in the muscles of the upper back.\nThe main difference between a Pendlay row and other rowing variations is the Pendlay row involves coming to a complete dead stop during the movement. This dead stop allows the lifter to train power and explosiveness as s/he contracts the back to bring the weight to their body.",
    steps: "1. Position the bar directly in front of your shins and hinge forward until your torso is roughly parallel with the floor (or slightly above).\n2. Grasp the bar with a double overhand grip and begin the movement by driving the elbows explosively behind the body while retracting the shoulder blades.\n3. Pull the bar towards your belly button until it touches your body and then slowly lower the bar back to the starting position under control.",
    tips: "1. Experiment with head position and see which option (looking forward vs. packing the neck) works better for you.\n2. Keep some tone through your abdominals as you pull the bar into your body to ensure you don’t arch excessively through your spine.\n3. Focus on bar speed, the idea is to be as explosive as possible.\n4. If you aren’t able to use 45lb plates on either side of the bar when performing this exercise, utilize the deadstop rack row.\n5. Don’t allow the head to jut forward as you pull.\n6. Similarly, ensure the shoulder blade moves on the rib cage.",
    video: "https://www.youtube.com/embed/EDhJ_FTlaXA"
  },

  "seated_cable_row": {
    name: "Seated Cable Row",
    muscleGroup: "Back",
    image: "images/back/seatedcablerow.png",
    details: "The seated cable row is a horizontal rowing exercise done on a cable machine, usually with a close-grip handle. You sit with your feet braced, hold the handle with straight arms, keep your torso tall, and pull the handle toward your midsection under control. According to the American Council on Exercise, the goal is to keep the spine straight, lift the chest, pull the elbows back, and return the weight slowly instead of letting it yank you forward. What Is the Seated Cable Row? In simple terms, it is one of the most practical gym exercises for training your mid-back and lats through a stable setup. That stability can make it easier for many people to focus on technique compared with unsupported row variations. This is a coaching inference based on the supported seated setup and the American Council on Exercise movement description.",
    steps: "1. Set the appropriate weight on the weight stack and attach a close-grip bar or V-bar to the seated row machine.\n2. Grasp the bar with a neutral grip (palms facing in).\n3. Keeping your legs slightly bent and your back straight, pull the weight up slightly off the stack. You should be sitting straight upright with your shoulders back. This is the starting position.\n4. Keeping your body in position, pull the handle into your stomach.\n5. Pull your shoulder blades back, squeeze, pause, and then slowly lower the weight back to the starting position.",
    tips: "1. Your back must remain straight at all times. Your torso should be kept still throughout the entire set.\n2. Don't let your shoulders hunch over when your arms are extended.\n3. Use the back muscles to move the weight - do not lean forward and use momentum to swing the weight back.\n4. Pausing and squeezing at the top of the movement for a 1-2 count will increase intensity and results.",
    video: "https://www.youtube.com/embed/lJoozxC0Rns"
  },

  "bent_over_dumbbell_row": {
    name: "Bent Over Dumbbell Row",
    muscleGroup: "Back",
    image:"images/back/bentoverdumbbellrow.png" ,
    details: "The dumbbell row is a variation of the bent over row and an exercise used to build back muscle and strength.The back is a muscle group that requires a fair amount of variation. So, experiment with several different angles and hand positions to maximize your back muscle growth.\nRows are a foundational movement pattern and are very important to train for balanced muscle growth and strength. So, experiment until you find a rowing variation that you enjoy and work on it.\nThe dumbbell row can be performed during your back workouts, upper body workouts, pull workouts, and full body workouts.",
    steps: "1. Assume a standing position while holding a dumbbell in each hand with a neutral grip.\n2. Hinge forward until your torso is roughly parallel with the floor (or slightly above) and then begin the movement by driving the elbows behind the body while retracting the shoulder blades.\n3. Pull the dumbbells towards your body until the elbows are at (or just past) the midline and then slowly lower the dumbbells back to the starting position under control.\n",
    tips: "1. Experiment with head position and see which option (looking forward vs. packing the neck) works better for you.\n2. Keep some tone through your abdominals as you pull the dumbbells into your body to ensure you don’t arch excessively through your spine.\n3. Don’t allow momentum to dictate the movement, control the dumbbells throughout the entirety of each rep.\n4. If you feel your biceps being overused and your back remaining under active, consider utilizing a false grip (i.e. don’t wrap the thumb around the dumbbell).\n5. Don’t allow the head to jut forward as you pull.\n6. Similarly, ensure the shoulder blade moves on the rib cage.",
    video: "https://www.youtube.com/embed/DhewkuU_95s"
  },

  "chest_supported_dumbbell_row_with_isohold": {
    name: "Chest Supported Dumbbell Row with Isohold",
    muscleGroup: "Back",
    image: "images/back/chest-supported-row.png",
    details: "The chest supported dumbbell row with isohold is an exercise used to target the muscles of the upper back. The exercise will also indirectly target the muscles of the lats, biceps, and shoulders. One would use the chest supported dumbbell row with isohold to isolate one side of the back, while also creating time under tension for the other side through an isometric hold.",
    steps: "1. Position an adjustable incline bench at 45 degrees and lie prone on the bench.\n2. Grab a dumbbell in each hand utilizing a neutral grip and then begin the movement by driving the elbows behind the body while retracting the shoulder blades.\n3. Pull the dumbbells towards your body until the elbows are at (or just past) the midline and then slowly lower the dumbbells back to the starting position under control.\n4. Hold one dumbbell at peak contraction while completing the assigned repetitions on the other arm.\n",
    tips: "1. Experiment with head position and see which option works better for you.\n2. Keep some tone through your abdominals.\n3. Don’t allow momentum to dictate the movement.\n4. Consider utilizing a false grip.\n5. Avoid excessive torso lift off the bench.\n6. Adjust leg position for comfort.\n7. Don’t allow the head to jut forward.\n8. Ensure the shoulder blade moves properly.",
    video: "https://www.youtube.com/embed/Ko-9zlThtPs"
  },

  "incline_bench_two_arm_dumbbell_row": {
    name: "Incline Bench Two Arm Dumbbell Row",
    muscleGroup: "Back",
    image: "images/back/inclineBenchDumbbellRow.png",
    details: "The incline bench two arm dumbbell row is a variation of the bent over dumbbell row used to strengthen and build the muscles of the back.\nBy supporting your chest on an incline bench, you take pressure off the lower back and better isolate the back.",
    steps: "1. Position an adjustable incline bench at 45 degrees and lie prone on the bench.\n2. Grab a dumbbell in each hand utilizing a pronated grip and begin the movement.\n3. Pull the dumbbells towards your body and lower under control.\n",
    tips: "1. Experiment with head position.\n2. Keep core engaged.\n3. Control the movement.\n4. Consider false grip.\n5. Avoid excessive torso extension.\n6. Adjust leg position.\n7. Don’t allow head to jut forward.\n8. Ensure proper shoulder blade movement.",
    video: "https://www.youtube.com/embed/WPpMRmgoe8I"
  },

  "neutral_grip_chest_supported_dumbbell_row": {
    name: "Neutral Grip Chest Supported Dumbbell Row",
    muscleGroup: "Back",
    image: "images/back/neutralGripDumbbellRow.png",
    details: "The chest supported dumbbell row is a variation used to build back muscle and strength.\nThe back requires variation, so experiment with different angles and grips.",
    steps: "1. Position an incline bench at 45 degrees.\n2. Grab dumbbells with neutral grip.\n3. Pull towards your body and lower under control.",
    tips: "1. Experiment with head position.\n2. Keep core engaged.\n3. Control movement.\n4. Consider false grip.\n5. Avoid excessive torso lift.\n6. Adjust leg position.\n7. Don’t allow head to jut forward.\n8. Ensure proper shoulder blade movement.",
    video: "https://www.youtube.com/embed/oKNjFM1bxAs"
  },

  "palms_in_bent_over_dumbbell_row": {
    name: "Palms In Bent-Over Dumbbell Row",
    muscleGroup: "Back",
    image: "images/back/palmsInDumbbellRow.png",
    details: "The Palms In Bent-Over Dumbbell Row is an effective exercise for targeting the upper back muscles, including the rhomboids and trapezius. It also engages secondary muscles such as the biceps and lats.",
    steps: "1. Select dumbbells.\n2. Bend at hips and knees.\n3. Pull dumbbells toward torso.\n4. Pause and lower.",
    tips: "1. Keep your eyes forward and back straight.",
    video: "https://www.youtube.com/embed/KIdzT7ZJT0o"
  },

  "reverse_grip_bent_over_dumbbell_row": {
    name: "Reverse Grip Bent-Over Dumbbell Row",
    muscleGroup: "Back",
    image: "images/back/reverseGripRow.png",
    details: "This exercise primarily targets the upper back, with secondary emphasis on the biceps, lats, and shoulders.",
    steps: "1. Pick up dumbbells with underhand grip.\n2. Hinge forward.\n3. Pull toward torso.\n4. Lower under control.",
    tips: "1. Keep back straight.\n2. Keep elbows tucked.\n3. Squeeze shoulder blades.",
    video: "https://www.youtube.com/embed/y3h8M_ECs-I"
  },

  "dumbbell_deadlift": {
    name: "Dumbbell Deadlift",
    image: "images/back/dumbbellDeadlift.png",
    muscleGroup: "Back",
    details: "The dumbbell deadlift is a beginner-friendly variation of the traditional deadlift that helps build proper form and strength.",
    steps: "1. Stand with dumbbells.\n2. Hinge at hips.\n3. Lower with control.\n4. Stand back up.",
    tips: "1. Engage core.\n2. Push hips back.\n3. Drive through heels.\n4. Keep dumbbells close.\n5. Move slowly.",
    video: "https://www.youtube.com/embed/d8fGui9OFHA"
  },

  "smith_machine_deadlift": {
    name: "Smith Machine Deadlift",
    image: "images/back/smithMachineDeadlift.png",
    muscleGroup: "Back",
    details: "Smith machine deadlifts are a great alternative to traditional deadlifts, offering stability and accessibility while targeting key muscle groups.",
    steps: "1. Set up machine.\n2. Position feet.\n3. Grip bar.\n4. Lift and stand.\n5. Lower under control.",
    tips: "1. Check foot positioning.\n2. Use grip aids if needed.\n3. Maintain proper hip position.\n4. Keep head up and back straight.",
    video: "https://www.youtube.com/embed/p6KK6yHxd4k"
  },
"t_bar_row": {
  name: "T Bar Row",
  muscleGroup: "Back",
  image: "images/back/tbarrow.png",
  details: "The T-Bar row, also known as the close grip barbell row, is an excellent exercise to target the upper back. It allows a more neutral grip which can reduce stress on the shoulder joint while emphasizing back thickness.",
  steps: "1. Position the bar between your legs.\n2. Attach a V-grip handle.\n3. Hinge forward until torso is roughly parallel to the floor.\n4. Pull the bar toward your chest and slowly lower under control.\n",
  tips: "1. Keep core tight throughout.\n2. Avoid using momentum.\n3. Maintain a neutral spine.\n4. Control shoulder blade movement.\n5. Do not jerk the weight.",
  video: "https://www.youtube.com/embed/gJSov9rHIf0"
},

"lat_pulldown": {
  name: "Lat Pull Down",
  muscleGroup: "Back",
  image: "images/back/latPullDown.png",
  details: "The lat pulldown is a fundamental back exercise that targets the lats while also engaging the biceps and mid-back muscles. It is highly effective for building upper body pulling strength.",
  steps: "1. Sit at the machine and attach a wide grip bar.\n2. Grip with a pronated (overhand) grip.\n3. Pull the bar down toward your upper chest by driving elbows down.\n4. Slowly return to the starting position.\n",
  tips: "1. Keep torso stable.\n2. Avoid swinging or leaning back excessively.\n3. Focus on pulling with elbows, not hands.\n4. Control the negative portion of the movement.\n",
  video: "https://www.youtube.com/embed/iKrKgWR9wbY"
},

"straight_arm_lat_pulldown": {
  name: "Straight Arm Lat Pull Down",
  muscleGroup: "Back",
  image: "images/back/straightArmLatPullDown.png",
  details: "The straight arm lat pulldown is a cable-based variation that isolates the lats by minimizing elbow flexion. It is excellent for building a strong mind-muscle connection with the back.",
  steps: "1. Attach a straight bar or rope to a high cable.\n2. Hinge slightly forward at the hips.\n3. Keep arms mostly straight with slight elbow bend.\n4. Pull bar down toward thighs and return slowly.\n",
  tips: "1. Keep core engaged.\n2. Avoid momentum.\n3. Focus on lat contraction.\n4. Keep movement controlled.\n5. Think about pulling with your elbows.\n",
  video: "https://www.youtube.com/embed/gDtXrJWPdlY"
},

"behind_neck_lat_pulldown": {
  name: "Behind Neck Lat Pull Down",
  muscleGroup: "Back",
  image: "images/back/behindNeckLatPullDown.png",
  details: "The behind the neck lat pulldown is a variation of the standard pulldown that places more stress on the shoulder joint. It should be used cautiously and only if mobility allows.",
  steps: "1. Sit at lat pulldown machine.\n2. Grip bar wide with overhand grip.\n3. Pull bar behind neck toward upper traps.\n4. Return slowly under control.\n",
  tips: "1. Do not force painful range of motion.\n2. Keep movement controlled.\n3. Avoid excessive arching.\n4. Engage core throughout.\n5. Stop if shoulder discomfort occurs.\n",
  video: "https://www.youtube.com/embed/u0NAUhxSt6M"
}
};


function closeExercise(){
  document.getElementById("exerciseModal").style.display = "none";
}

function addToWorkout(){
  alert("Exercise added to workout!");
}