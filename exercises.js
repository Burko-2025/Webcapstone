function openExercise(name) {
  document.getElementById("exerciseModal").style.display = "flex";

  document.getElementById("exerciseTitle").innerText = name;

  const modal = document.getElementById("exerciseModal");
  if (!modal) {
    console.error("Modal not found!");
    return;
  }

  modal.style.display = "flex";

  document.getElementById("exerciseTitle").innerText = name;
  //Back------------------------------------------------------------
  //1
  if (name === "Bent Over Row") {
    document.getElementById("exerciseDetails").innerText =
      "The bent over row is a back day staple exercise and is considered one of the best muscle building back building exercises you can do. Sometimes referred to as the barbell row, the bent over row is a staple movement in most muscle building workouts. Those looking to build muscle utilize the bent over row to target their back, bicep and core muscle. Those in powerlifting and strength circles perform bent over rows to increase their strength on the big 3 movements. The bent over row is typically used to build and strengthen the muscles of the upper back (latissimus dorsi, rhomboids, and trapezius). However, it requires assistance from muscles of the low back, core, and arms to perform a bent over row correctly. There are several variations of the bent over row one can and should perform. Bent over row variations include: \n •	Dumbbell Bent Over Row \n •	One Arm Bent Over Dumbbell Row \n •	Reverse Grip Bent Over Row \n •	T-Bar Row \n•	Smith Machine Row \n The back is a tricky muscle group to build and strengthen. Sometimes it can help to vary the degree in which you perform the bent over row and well as the hand placement on the bar. Regardless, the bent over row is a great exercise to include in your back workout.";

    document.getElementById("exerciseSteps").innerText =
      "1. Assume a standing position while holding the bar using a double overhand grip.\n2. Hinge forward until your torso is roughly parallel with the floor (or slightly above) and then begin the movement by driving the elbows behind the body while retracting the shoulder blades.\n3.	Pull the bar towards your belly button until it touches your body and then slowly lower the bar back to the starting position under control.\n";

    document.getElementById("exerciseTips").innerText =
      "1.	Experiment with head position and see which option (looking forward vs. packing the neck) works better for you. \n 2.	Keep some tone through your abdominals as you pull the bar into your body to ensure you don’t arch excessively through your spine.\n 3.	Don’t allow momentum to dictate the movement, control the bar throughout the entirety of each rep.\n 4.	Don’t allow the head to jut forward as you pull.\n 5.	Similarly, ensure the shoulder blade moves on the rib cage. Don’t lock the shoulder blade down and just move through the glenohumeral joint.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/paCfxhgW6bI";
  }
  //2
  if (name === "Incline Bench Barbell Row") {
    document.getElementById("exerciseDetails").innerText =
      "This variation reduces lower back strain by using an incline bench.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Set up an incline bench at around a 30-degree angle. You can also use a propped up flat bench. Grab a barbell and place it at the end of the incline bench. \n 2.	Lay down on the bench in a prone (facing down) position with your legs at the lower end of the bench. If it's more comfortable, you can put your feet on the floor. This also adds stability.\n 3.	Grip the barbell with a wide overhand grip.\n 4.	Keeping your head up, eyes looking forward, slowly raise the bar up towards your chest.\n 5.	Raise the bar as far as possible, pause, and then slowly lower the bar back to the starting position.\n";

    document.getElementById("exerciseTips").innerText =
      "1.	Keep your elbows in.\n 2.	Squeeze your shoulder blades together and hold at the top of the movement to get the maximum results from this exercise.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/2cGfXlLaJT0?";
  }
  //3
  if (name === "Pendlay Row") {
    document.getElementById("exerciseDetails").innerText =
      "The Pendlay row is a variation of the bent over row and an exercise used to build strength in the muscles of the upper back.\n The main difference between a Pendlay row and other rowing variations is the Pendlay row involves coming to a complete dead stop during the movement. This dead stop allows the lifter to train power and explosiveness as s/he contracts the back to bring the weight to their body.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Position the bar directly in front of your shins and hinge forward until your torso is roughly parallel with the floor (or slightly above).\n2.	Grasp the bar with a double overhand grip and begin the movement by driving the elbows explosively behind the body while retracting the shoulder blades.\n3.	Pull the bar towards your belly button until it touches your body and then slowly lower the bar back to the starting position under control.";

    document.getElementById("exerciseTips").innerText =
      "1.	Experiment with head position and see which option (looking forward vs. packing the neck) works better for you.\n2.	Keep some tone through your abdominals as you pull the bar into your body to ensure you don’t arch excessively through your spine.\n3.	Focus on bar speed, the idea is to be as explosive as possible.\n4.	If you aren’t able to use 45lb plates on either side of the bar when performing this exercise, utilize the deadstop rack row.\n5.	Don’t allow the head to jut forward as you pull.\n6.	Similarly, ensure the shoulder blade moves on the rib cage. Don’t lock the shoulder blade down and just move through the glenohumeral joint.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/EDhJ_FTlaXA";
  }
  //4
  if (name === "T Bar Row") {
    document.getElementById("exerciseDetails").innerText =
      "The T-Bar row, also known as the close grip barbell row, is an excellent exercise to use if you are trying to target your upper back. A variation of the bent over row, the T-bar row allows one to utilize a more neutral grip which can help alleviate some of the tension placed on the shoulder joint.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Assume a standing position with the bar positioned directly between your legs.\n2.	Utilize a v-grip handle and place the bar directly in the notch of the v.\n3.	Hinge forward until your torso is roughly parallel with the floor (or slightly above) and then begin the movement by driving the elbows behind the body while retracting the shoulder blades.\n4.	Pull the bar towards your body until the plates touch your chest and then slowly lower the handle back to the starting position under control.\n";

    document.getElementById("exerciseTips").innerText =
      "1.	Experiment with head position and see which option (looking forward vs. packing the neck) works better for you.\n2.	Keep some tone through your abdominals as you pull the bar into your body to ensure you don’t arch excessively through your spine.\n3.	Don’t allow momentum to dictate the movement, control the bar throughout the entirety of each rep.\n4.	Don’t allow the head to jut forward as you pull.\n5.	Similarly, ensure the shoulder blade moves on the rib cage. Don’t lock the shoulder blade down and just move through the glenohumeral joint.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/gJSov9rHIf0";
  }
  //5
  if (name === "Seated Cable Row") {
    document.getElementById("exerciseDetails").innerText =
      "The seated cable row is a horizontal rowing exercise done on a cable machine, usually with a close-grip handle. You sit with your feet braced, hold the handle with straight arms, keep your torso tall, and pull the handle toward your midsection under control. According to the American Council on Exercise, the goal is to keep the spine straight, lift the chest, pull the elbows back, and return the weight slowly instead of letting it yank you forward. What Is the Seated Cable Row? In simple terms, it is one of the most practical gym exercises for training your mid-back and lats through a stable setup. That stability can make it easier for many people to focus on technique compared with unsupported row variations. This is a coaching inference based on the supported seated setup and the American Council on Exercise movement description.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Set the appropriate weight on the weight stack and attach a close-grip bar or V-bar to the seated row machine.\n2.	Grasp the bar with a neutral grip (palms facing in).\n3.	Keeping your legs slightly bent and your back straight, pull the weight up slightly off the stack. You should be sitting straight upright with your shoulders back. This is the starting position.\n4.	Keeping your body in position, pull the handle into your stomach.\n5.	Pull your shoulder blades back, squeeze, pause, and then slowly lower the weight back to the starting position.";

    document.getElementById("exerciseTips").innerText =
      "1.	Your back must remain straight at all times. Your torso should be kept still throughout the entire set.\n2. Don't let your shoulders hunch over when your arms are extended.\n3. Use the back muscles to move the weight - do not lean forward and use momentum to swing the weight back.\n4. Pausing and squeezing at the top of the movement for a 1-2 count will increase intensity and results.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/lJoozxC0Rns";
  }
  //6
  if (name === "Bent Over Dumbbell Row") {
    document.getElementById("exerciseDetails").innerText =
      "The dumbbell row is a variation of the bent over row and an exercise used to build back muscle and strength.The back is a muscle group that requires a fair amount of variation. So, experiment with several different angles and hand positions to maximize your back muscle growth.\nRows are a foundational movement pattern and are very important to train for balanced muscle growth and strength. So, experiment until you find a rowing variation that you enjoy and work on it.\nThe dumbbell row can be performed during your back workouts, upper body workouts, pull workouts, and full body workouts.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Assume a standing position while holding a dumbbell in each hand with a neutral grip.\n2.	Hinge forward until your torso is roughly parallel with the floor (or slightly above) and then begin the movement by driving the elbows behind the body while retracting the shoulder blades.\n3.	Pull the dumbbells towards your body until the elbows are at (or just past) the midline and then slowly lower the dumbbells back to the starting position under control.\n";

    document.getElementById("exerciseTips").innerText =
      "1.	Experiment with head position and see which option (looking forward vs. packing the neck) works better for you.\n2.	Keep some tone through your abdominals as you pull the dumbbells into your body to ensure you don’t arch excessively through your spine.\n3.	Don’t allow momentum to dictate the movement, control the dumbbells throughout the entirety of each rep.\n4.	If you feel your biceps being overused and your back remaining under active, consider utilizing a false grip (i.e. don’t wrap the thumb around the dumbbell).\n5.	Don’t allow the head to jut forward as you pull.\n6.	Similarly, ensure the shoulder blade moves on the rib cage. Don’t lock the shoulder blade down and just move through the glenohumeral joint.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/DhewkuU_95s";
  }
  //7
  if (name === "Chest Supported Dumbbell Row with Isohold") {
    document.getElementById("exerciseDetails").innerText =
      "The chest supported dumbbell row with isohold is an exercise used to target the muscles of the upper back. The exercise will also indirectly target the muscles of the lats, biceps, and shoulders. One would use the chest supported dumbbell row with isohold to isolate one side of the back, while also creating time under tension for the other side through an isometric hold.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Position an adjustable incline bench at 45 degrees and lie prone on the bench.\n2.	Grab a dumbbell in each hand utilizing a neutral grip and then begin the movement by driving the elbows behind the body while retracting the shoulder blades.\n3.	Pull the dumbbells towards your body until the elbows are at (or just past) the midline and then slowly lower the dumbbells back to the starting position under control.\n4.	Hold one dumbbell at peak contraction while completing the assigned repetitions on the other arm.\n";

    document.getElementById("exerciseTips").innerText =
      "1.	Experiment with head position and see which option (looking forward vs. packing the neck) works better for you.\n2.	Keep some tone through your abdominals as you pull the bar into your body to ensure you don’t arch excessively through your spine.\n3.	Don’t allow momentum to dictate the movement, control the dumbbells throughout the entirety of each rep.\n4.	If you feel your biceps being overused and your back remaining under active, consider utilizing a false grip (i.e. don’t wrap the thumb around the dumbbell).\n5.	As you pull the dumbbells towards your body, don’t hyperextend the thoracic spine by pulling your entire upper torso off the bench. You can extend slightly but don’t make it too drastic.\n6.	Some feel more comfortable with bending their knees and positioning them on the bottom pad whereas if you have longer legs than you may want to extend your legs and plant your feet flat on the floor.\n7.	Don’t allow the head to jut forward as you pull.\n8.	Similarly, ensure the shoulder blade moves on the rib cage. Don’t lock the shoulder blade down and just move through the glenohumeral joint.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/Ko-9zlThtPs";
  }
  //8
  if (name === "Incline Bench Two Arm Dumbbell Row") {
    document.getElementById("exerciseDetails").innerText =
      "The incline bench two arm dumbbell row is a variation of the bent over dumbbell row used to strengthen and build the muscles of the back.\nBy supporting your chest on an incline bench, as seen in the incline bench two arm dumbbell row, you take pressure off the lower back and eliminate some of the stability required to perform the row. This allows you to better isolate the target muscle group (the back).";

    document.getElementById("exerciseSteps").innerText =
      "1.	Position an adjustable incline bench at 45 degrees and lie prone on the bench.\n2.	Grab a dumbbell in each hand utilizing a pronated (thumbs facing) grip and then begin the movement by driving the elbows behind the body while retracting the shoulder blades.\n3.	Pull the dumbbells towards your body until the elbows are at (or just past) the midline and then slowly lower the dumbbells back to the starting position under control.\n";

    document.getElementById("exerciseTips").innerText =
      "1.	Experiment with head position and see which option (looking forward vs. packing the neck) works better for you.\n2.	Keep some tone through your abdominals as you pull the bar into your body to ensure you don’t arch excessively through your spine.\n3.	Don’t allow momentum to dictate the movement, control the dumbbells throughout the entirety of each rep.\n4.	If you feel your biceps being overused and your back remaining under active, consider utilizing a false grip (i.e. don’t wrap the thumb around the dumbbell).\n5.	As you pull the dumbbells towards your body, don’t hyperextend the thoracic spine by pulling your entire upper torso off the bench. You can extend slightly but don’t make it too drastic.\n6.	Some feel more comfortable with bending their knees and positioning them on the bottom pad whereas if you have longer legs than you may want to extend your legs and plant your feet flat on the floor.\n7.	Don’t allow the head to jut forward as you pull.\n8.	Similarly, ensure the shoulder blade moves on the rib cage. Don’t lock the shoulder blade down and just move through the glenohumeral joint.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/WPpMRmgoe8I";
  }
  //9
  if (name === "Neutral Grip Chest Supported Dumbbell Row") {
    document.getElementById("exerciseDetails").innerText =
      "The chest supported dumbbell row is a variation of the dumbbell bent over row and an exercise used to build back muscle and strength.\nThe back is a muscle group that requires a fair amount of variation. So, experiment with several different angles and hand positions to maximize your back muscle growth.\nRows are a foundational movement pattern and are very important to train for balanced muscle growth and strength. So, experiment until you find a rowing variation that you enjoy and work on it.\nThe chest supported dumbbell row can be performed during your back workouts, upper body workouts, pull workouts, and full body workouts.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Position an adjustable incline bench at 45 degrees and lie prone on the bench.\n2.	Grab a dumbbell in each hand utilizing a neutral grip and then begin the movement by driving the elbows behind the body while retracting the shoulder blades.\n3.	Pull the dumbbells towards your body until the elbows are at (or just past) the midline and then slowly lower the dumbbells back to the starting position under control.";

    document.getElementById("exerciseTips").innerText =
      "1.	Experiment with head position and see which option (looking forward vs. packing the neck) works better for you.\n2.	Keep some tone through your abdominals as you pull the dumbbells into your body to ensure you don’t arch excessively through your spine.\n3.	Don’t allow momentum to dictate the movement, control the dumbbells throughout the entirety of each rep.\n4.	If you feel your biceps being overused and your back remaining under active, consider utilizing a false grip (i.e. don’t wrap the thumb around the dumbbell).\n5.	As you pull the dumbbells towards your body, don’t hyperextend the thoracic spine by pull your entire upper torso off the bench. You can extend slightly but don’t make it too drastic.\n6.	Some feel more comfortable with bending their knees and positioning them on the bottom pad whereas if you have longer legs than you may want to extend your legs and plant your feet flat on the floor.\n7.	Don’t allow the head to jut forward as you pull.\n8.	Similarly, ensure the shoulder blade moves on the rib cage. Don’t lock the shoulder blade down and just move through the glenohumeral joint.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/oKNjFM1bxAs";
  }
  //10
  if (name === "Palms In Bent-Over Dumbbell Row") {
    document.getElementById("exerciseDetails").innerText =
      "The Palms In Bent-Over Dumbbell Row is an effective exercise for targeting the upper back muscles, including the rhomboids and trapezius. It also engages secondary muscles such as the biceps and lats. To perform this exercise, hold a dumbbell in each hand with your palms facing inward, then bend at the hips and knees, maintaining a neutral spine. Pull the dumbbells toward your torso, keeping your elbows close to your body. This movement helps build strength and definition in the upper back while also improving posture and stability. \nFor beginners, the Palms In Bent-Over Dumbbell Row is generally easier because the neutral grip is more comfortable and often reduces shoulder strain. Focus first on mastering the hip hinge, neutral spine, and a slow 2–3 second eccentric before increasing load. \nThe exercise can be modified to suit your fitness level, with traditional dumbbells or adjustable dumbbells available. It's important to maintain a neutral spine and engage your core to support your spine, avoiding rounding your back to ensure proper posture and reduce the risk of injury.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Select the appropriate dumbbells and place them on the floor in front of you.\n2.	Stand facing the dumbbells with your feet together.\n3.	Bending at the knees and keeping your back straight, squat down and pick up the dumbbells with a neutral grip (palms in).\n4.	Get into the starting position by keeping your back straight and bending at the knees. Let the dumbbells slide down your thighs until they're just below knee height.\n5.	Execute by pulling the dumbbells up under your chest as far as possible.\n6.	Pause, and then slowly lower the weights back to the starting position.";

    document.getElementById("exerciseTips").innerText =
      "1.	Keep your eyes facing forward and head up to ensure that your back stays straight throughout the set.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/KIdzT7ZJT0o";
  }
  //11
  if (name === "Reverse Grip Bent-Over Dumbbell Row") {
    document.getElementById("exerciseDetails").innerText =
      "The Reverse Grip Bent-Over Dumbbell Row primarily targets the upper back, with secondary emphasis on the biceps, lats, and shoulders. To perform this exercise, hold a dumbbell in each hand with your palms facing upward (supine grip), bend at the hips to a 45-degree angle, and keep your back straight. Pull the dumbbells towards your torso, squeezing your shoulder blades together, and lower them back down with control. This movement engages the muscles of the upper back, improving posture and strength, while also providing a great workout for the biceps, lats, and shoulders.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Select the appropriate dumbbells and place them on the floor in front of you.\n2.	Bending at the knees and keeping your back straight, squat down and pick up the dumbbells with an underhand grip (palms facing up).\n3.	Get into the starting position by keeping your back straight and bending at the knees. Let the dumbbells slide down your thighs until they're just below knee height.\n4.	Execute by pulling the dumbbells up under your chest as far as possible.\n5.	Pause, and then slowly lower the dumbbells back to the starting position.\n";

    document.getElementById("exerciseTips").innerText =
      "1. Keep your back straight, shoulder blades back, and eyes facing the front.\n2. Keep your elbows tucked in by your sides as you pull the weight up.\n3. Squeeze your shoulder blades together at the top of the movement.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/y3h8M_ECs-I";
  }
  //12
  if (name === "Dumbbell Deadlift") {
    document.getElementById("exerciseDetails").innerText =
      "The Smith machine deadlift is a variation of the traditional deadlift performed on a Smith machine, which features a barbell fixed to a vertical track. This setup allows for a controlled lifting motion, making it easier for beginners to learn proper form and technique while minimizing the risk of injury.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Stand with feet hip-width apart, holding a dumbbell in each hand at your sides or in front of your thighs.\n2.	Keep your chest up, shoulders back, and core engaged. This is the starting position.\n3.	With a slight bend in your knees, hinge at your hips and lower the dumbbells down the front of your legs.\n4.	Lower until you feel a stretch in your hamstrings, keeping your back flat.\n5.	Push through your heels to stand back up, driving your hips forward. This is one rep.\n";

    document.getElementById("exerciseTips").innerText =
      "1.	Engage your core throughout the movement to protect your spine.\n2.	Push your hips back, not down, as you lower the dumbbells (think of closing a car door with your hips).\n3.	Drive through your heels to stand back up, not your toes.\n4.	Keep the dumbbells close to your body as you lower and raise them to avoid excess strain on your lower back.\n5.	Move in a slow, controlled manner.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/d8fGui9OFHA";
  }
  //13
  if (name === "Smith Machine Deadlift") {
    document.getElementById("exerciseDetails").innerText =
      "Smith machine deadlifts are a great alternative to traditional deadlifts, offering stability and accessibility while targeting key muscle groups.\nThe Smith machine deadlift is a variation of the traditional deadlift performed on a Smith machine, which features a barbell fixed to a vertical track. This setup allows for a controlled lifting motion, making it easier for beginners to learn proper form and technique while minimizing the risk of injury.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Set up for the smith machine deadlift by loading the appropriate amount of weight onto the smith machine and setting the bar to the lowest setting.\n2.	Stand in front of the bar with your feet around shoulder width apart and halfway under the loaded bar. Your toes should be pointed straight ahead or slightly outward. Do what is comfortable for you.\n3.	Reach down and grab the bar with both hands using an overhand grip just outside of shoulder width. You can use an alternating grip (one over/one under) to help you lift more weight. Lifting straps can also be used to help lift more weight.\n4.	Drop your hips until your shins are touching the barbell. Your hips should be in the best, most natural position for leverage so you may need to raise or lower them slightly.\n5.	Make sure your eyes are looking ahead. Your body will follow your head so keep your head up and eyes forward!  \n6.	Be sure to keep a straight back and never allow it to round. You are now in the starting position.\n7.	Focus on standing up with the bar - not pulling the bar from the floor, and lead with your head as you rise.\n8.	Drive with your heels and explode upward (leading with your head) as you rise.\n9.	As the bar rises above your knees, thrust your hips forward and contract your back by bringing your shoulder blades back.\n10.	Pause here for a moment and then reverse the movement by bending at the knees while slowly lowering the weight - keeping it under strict control on the descent.";

    document.getElementById("exerciseTips").innerText =
      "1.	When positioning your feet under the bar (with the bar over the halfway point from your heels to toes) it can be difficult to gauge if your foot position is correct, so ask another lifter for guidance or record your deadlift setup.\n2.	Use an alternating grip if the weight gets too heavy. Using lifting straps will also allow you to lift heavier than your grip strength will allow.\n3.	The biggest mistake you can make is trying to perform deadlifts from an unnatural body position. Read and re-read the form tips presented in this guide and practice them with a moderate weight. Start the deadlift with the hips in a position of strength and maximal leverage.\n4.	If you start the deadlift with your hips too high you will be at a mechanical disadvantage and will tax your lower back. Starting with your hips too low will also cause you to lose your leverage and power. If you start the deadlift while looking down, there is a good chance your hips will lift causing you to lose form and lift with your lower back. This is a very common deadlift mistake. Think about exploding your head upward while trying to stand erect. The body will follow the head.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/p6KK6yHxd4k";
  }
  //14
  if (name === "Lat Pull Down") {
    document.getElementById("exerciseDetails").innerText =
      "The lat pull down is an exercise used to build the muscles of the back. While the exercise will primarily target the lats, you will also notice a fair amount of bicep and middle back activation.\nThe back is a muscle group that requires a fair amount of variation. So, experiment with several different angles and hand positions to maximize your back muscle growth.\nThe lat pull down can be performed during your back workouts, upper body workouts, pull workouts, and full body workouts.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Attach a wide grip handle to the lat pulldown machine and assume a seated position.\n2.	Grasp the handle with a pronated grip (double overhand) and initiate the movement by depressing the shoulder blade and then flexing the elbow while extending the shoulder.\n3.	Pull the handle towards your body until the elbows are in line with your torso and then slowly lower the handle back to the starting position under control.\n";

    document.getElementById("exerciseTips").innerText =
      "1.	Keep some tone through your abdominals as you pull the bar into your body to ensure you don’t arch excessively through the spine.\n2.	Don’t allow momentum to dictate the movement, control the dumbbells throughout the entirety of each rep.\n3.	If you feel your biceps being overused and your back remaining under active, consider utilizing a false grip (i.e. don’t wrap the thumb around the dumbbell).\n4.	Don’t allow the head to jut forward as you pull.\n5.	Similarly, ensure the shoulder blade moves on the rib cage. Don’t lock the shoulder blade down and just move through the glenohumeral joint.\n6.	Allow the shoulder to internally rotate and shrug slightly at the top of the movement. You will obviously reverse the movement and depress the shoulder blade before you pull with the arm.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/iKrKgWR9wbY";
  }
  //15
  if (name === "Straight Arm Lat Pull Down") {
    document.getElementById("exerciseDetails").innerText =
      "The straight arm lat pull down is a variation of the lat pull down and an exercise used to build the muscles of the back. While the exercise will primarily target the lats, you will also notice a fair amount of bicep and middle back activation.\nThe back is a muscle group that requires a fair amount of variation. So, experiment with several different angles and hand positions to maximize your back muscle growth.\nThe straight arm lat pull down mimics the movement of a dumbbell pullover. The emphasis should be on feeling the entire range of motion, not the amount of weight you use on the exercise.\nThe straight arm lat pull down can be performed during your back workouts, upper body workouts, pull workouts, and full body workouts.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Attach a wide grip handle to a cable stack and assume a standing position.\n2.	Grasp the handle with a pronated grip (double overhand) at roughly shoulder width and lean forward slightly by hinging at the hips.\n3.	Keep the elbow slightly flexed and initiate the movement by depressing the shoulder blades and extending the shoulders.\n4.	Pull the bar to your thigh until the lats are fully contracted and then slowly lower under control.\n";

    document.getElementById("exerciseTips").innerText =
      "1.	Keep some tone through your abdominals as you pull the bar into your body to ensure you don’t arch excessively through the spine.\n2.	If you feel your biceps being overused and your back remaining under active, consider utilizing a false grip (i.e. don’t wrap the thumb around the dumbbell).\n3.	Don’t allow the head to jut forward as you pull.\n4.	Similarly, ensure the shoulder blade moves on the rib cage. Don’t lock the shoulder blade down and just move through the glenohumeral joint.\n5.	If you can’t seem to feel your lats engaging, try to “screw your shoulders” into their sockets by pointing your elbows behind your body. Another cue that works exceptionally well is to “squeeze oranges in your armpits”.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/gDtXrJWPdlY";
  }
  //16
  if (name === "Behind Neck Lat Pull Down") {
    document.getElementById("exerciseDetails").innerText =
      "The behind the neck lat pull down is a variation of the lat pull down and an exercise used to build the muscles of the back. While the exercise will primarily target the lats, you will also notice a fair amount of bicep and middle back activation.\nBehind the neck exercises are seen as a dated practice as the range of motion can put the shoulder joint in an unfavorable position. Some tension can be alleviated by stopping the rep at the top of the neckline.\nThat said, if you are experiencing pain while performing the exercise, it may be beneficial to experiment with other pull down variations.\nThe behind the neck lat pull down can be performed during your back workouts, upper body workouts, pull workouts, and full body workouts.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Attach a wide grip handle to the lat pulldown machine and assume a seated position.\n2.	Grasp the handle with a pronated grip (double overhand) and initiate the movement by depressing the shoulder blades and then flexing the elbow while extending the shoulder.\n3.	Pull the handle behind your neck until it nearly touches at the base of your traps and then slowly lower the handle back to the starting position under control.";

    document.getElementById("exerciseTips").innerText =
      "1.	Keep some tone through your abdominals as you pull the bar into your body to ensure you don’t arch excessively through the spine.\n2.	Don’t allow momentum to dictate the movement, control the dumbbells throughout the entirety of each rep.\n3.	If you feel your biceps being overused and your back remaining under active, consider utilizing a false grip (i.e. don’t wrap the thumb around the dumbbell).\n4.	Don’t allow the head to jut forward as you pull.\n5.	Similarly, ensure the shoulder blade moves on the rib cage. Don’t lock the shoulder blade down and just move through the glenohumeral joint.\n6.	Allow the shoulder to internally rotate and shrug slightly at the top of the movement. You will obviously reverse the movement and depress the shoulder blade before you pull with the arm.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/u0NAUhxSt6M";
  }

  //Core exercises--------
  //1
  if (name === "Lying Floor Leg Raise") {
    document.getElementById("exerciseDetails").innerText =
      "The lying floor leg raise is a variation of the abdominal crunch and an exercise used to isolate the muscles of the abdomen.\nThe lying floor leg raise is a flexion based exercise which keeps the lower abdominal muscles under constant tension during the entire range of motion.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Lay supine in a relaxed position with your legs straight and your hands underneath your low back for support.\n2.	Keep your legs straight and raise them towards your forehead while contracting your abdominals and exhaling.\n3.	Once your abs are fully contracted and your legs are slightly above parallel, slowly lower your legs back to the starting position.";

    document.getElementById("exerciseTips").innerText =
      "1.	Exhale hard like you’re blowing out candles on a cake and hold the contraction for a second in order to improve mind muscle connection.\n2.	If your lower back bothers you during this exercise, choose more anti extension and anti rotation based movements.\n3.	Avoid putting the hands behind the head as this can lead to excess strain upon the neck.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/r24ntO4IvKc";
  }
  //2
  if (name === "Cable Crunch") {
    document.getElementById("exerciseDetails").innerText =
      "The Cable Crunch is an effective core exercise that targets the abdominal muscles, particularly the rectus abdominis.\nUnlike floor crunches, the cable crunch reduces neck strain by allowing you to focus on using your abs without needing to lift your head or shoulders. It also helps improve spinal flexion, a fundamental movement for building a strong, functional core.\nThis exercise helps strengthen and define the core, improve posture, and enhance overall abdominal endurance. Proper form is crucial to avoid strain on the lower back and ensure maximum activation of the ab muscles.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Attach a rope handle to the high pulley of a cable machine.\n2.	Kneel in front of the machine and hold the rope with both hands, bringing it around your head.\n3.	Keep your knees slightly bent and your hips stationary. This is the starting position.\n4.	Engage your core and pull the rope down by crunching your torso forward.\n5.	Continue to pull the rope towards your knees, focusing on contracting your abs. Keep your elbows fixed.\n 6.	Release the tension and slowly return to the starting position. This is one rep.";

    document.getElementById("exerciseTips").innerText =
      "1.	Use controlled movements. Perform the crunch slowly and with control to maximize muscle engagement and avoid injury.\n2.	Focus on crunching with your abs, not pulling with your arms. The arms should only guide the rope.\n3.	Avoid arching your back too much. Keep the motion in your torso to protect your spine.\n4.	Avoid using your hips or legs to assist in the movement. Focus on flexing your spine using your abs.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/3qjoXDTuyOE";
  }
  //3
  if (name === "Weighted Crunch") {
    document.getElementById("exerciseDetails").innerText =
      "The weighted crunch is a variation of the crunch and an exercise used to build the abdominal muscles.\nAdding weight is a common form of progression used to make bodyweight exercises, such as the crunch, more challenging. Doing so allows for the lifter to progress, adapt, and build more muscle.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Lay supine in a relaxed position with your knees bent.\n2.	Hold a weight plate directly over your chest and press it to extension.\n3.	Raise your knees to 90 degrees, at which point they will be perpendicular to the floor.\n4.	Exhale as you reach towards your toes with the weight plate.\n5.	Once your abs are fully contracted and your upper back is off the floor, slowly lower yourself back to the starting position.";

    document.getElementById("exerciseTips").innerText =
      "1.	Exhale hard like you’re blowing out candles on a cake and hold the contraction for a second to improve mind muscle connection.\n2.	If your lower back bothers you during this exercise, choose more anti extension and anti rotation based movements.\n3.	Avoid putting the hands behind the head as this can lead to excess strain upon the neck.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/6kHg3JAFNFo";
  }
  //4
  if (name === "Plank") {
    document.getElementById("exerciseDetails").innerText =
      "The plank is a core-strengthening exercise that targets the abdominals, lower back, shoulders, and glutes.\nPlanks help build endurance, enhance balance, and prevent injuries by strengthening the muscles that support the spine. They also promote better posture and can improve athletic performance.\nWith no equipment needed, planks are a versatile and efficient exercise for developing core strength and stability, making them a must-have in any fitness routine.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Start by lying face down on the floor. Place your forearms on the ground, elbows directly below your shoulders.\n2.	Position your feet hip-width apart with your toes tucked under.\n3.	Push through your forearms and toes to lift your body off the floor.\n4.	Your body should form a straight line from your head to your heels. Keep your neck neutral by looking straight down, not forward.\n5.	Tighten your core (imagine pulling your belly button toward your spine) and squeeze your glutes to prevent your hips from sagging or rising.\n6.	Hold the position for as long as you can while maintaining good form.";

    document.getElementById("exerciseTips").innerText =
      "1.	If you're new to planks, it's important to build strength and endurance gradually. Here’s a beginner progression to help you work up to a full plank:\n•	Wall Plank: Stand facing a wall and place your hands on it at shoulder height. Step your feet back slightly and bend your elbows to create a straight line from your head to your heels. Hold for 30 seconds, focusing on keeping your core tight.\n•	Incline Plank: Use a bench or sturdy surface. Place your forearms on the bench and your feet on the floor, forming a straight line from head to heels. Engage your core and hold for 30 seconds.\n•	Knee Plank: Start in a standard plank position but with your knees on the ground instead of your toes. Keep your body in a straight line from head to knees, engaging your core. Hold for 30 seconds.\n2.	Keep breathing steadily through the nose and mouth.\n3.	Keep your body in a straight line, and avoid letting your hips sag or rise.\n4.	Gradually increase your hold time by 5-10 seconds as you build strength.\n5.	If holding for longer is too difficult, try breaking it into shorter sets (e.g., 2 sets of 20 seconds).";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/pvIjsG5Svck";
  }

  //5
  if (name === "Hanging Leg Raise") {
    document.getElementById("exerciseDetails").innerText =
      "The hanging leg raise is a challenging core exercise performed by hanging from a pull-up bar and lifting your legs straight up in front of you.\nIt primarily targets the lower abdominal muscles while also working the hip flexors, obliques, and stabilizing muscles in the shoulders and forearms due to the grip and hang position.\nThis exercise is excellent for developing core strength and definition, especially in the lower abs, and it also helps improve core stability, grip strength, and body control, making it beneficial for athletes and anyone working on calisthenics or gymnastics-style movements.\nBecause of its difficulty, beginners can start with hanging knee raises and progress to straight-leg versions as their strength improves.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Grab a pull-up bar with your palms facing forward (overhand grip) and arms shoulder-width apart. Hang with your arms fully extended and feet off the ground.\n2.	Engage your abdominal muscles to stabilize your body and minimize swinging. This is the starting position.\n3.	Slowly raise your legs in front of you until they’re about hip or chest height. Keep the movement controlled.\n4.	Hold for a second, then slowly lower your legs back to the starting position without swinging.";

    document.getElementById("exerciseTips").innerText =
      "1.	Keep your body as still as possible. Use slow, controlled movements to prevent using momentum.\n2.	Tighten your abs before lifting your legs to protect your lower back and get the most out of the exercise.\n3.	Exhale as you lift your legs, and inhale as you lower them.\n4.	Bring your legs as high as you can without bending your knees or arching your back.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/ttdkm6ESUjI";
  }
  //6
  if (name === "Side Plank") {
    document.getElementById("exerciseDetails").innerText =
      "The side plank is a fundamental core stability exercise that primarily targets the obliques and helps develop lateral core strength. It is an isometric exercise where you support your body on one forearm and the side of one foot, maintaining a straight line from head to feet.\nBenefits of side planks include:\n1.	Improved core strength and stability.\n2.	Enhanced balance and posture.\n3.	Reduced risk of lower back pain.\n4.	Better performance in functional movements.To perform a side plank, lie on your side with your legs extended, stack your feet, and engage your core. Hold for 20-30 seconds, progressively increasing to 45-60 seconds as strength improves. ";

    document.getElementById("exerciseSteps").innerText =
      "1.	The side plank is a great exercise for building core strength, and more specifically oblique strength. It's also a good balance exercise. It's your choice whether to use a mat in this exercise. Start by laying on your side with one hand on the floor and your feet on top of one another.\n2.	If you prefer, you can rest on your elbow instead of your hand.\n3.	Lift your hips up until your body is exactly straight.\n4.	Now hold this position for as long as possible. You should feel this exercise in your abs and obliques.\n5.	Complete the same for the opposite side of the body.";

    document.getElementById("exerciseTips").innerText =
      "1.	Do not let your mid-section sag. Always stay perfectly straight.\n2.	Do the side plank in front of the mirror to ensure you keep your technique tight!\n3.	Try to hold your plank for a full minute. Hold the plank for longer periods of time for increased intensity. ";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/_R389Jk0tIo";
  }
  //7
  if (name === "Sit Up") {
    document.getElementById("exerciseDetails").innerText =
      "The sit up is a classic abdominal exercise.\nIt’s rarely performed anymore, however, it’s still a very effective flexion based exercise for those looking to utilize it to target their core.\nThere are some risks involved in performing the sit up as opposed to crunches (or stability ball crunches). The primary one being the common complaint of lower back pain.\nOne can perform sit ups as part of their ab workout or full body workout.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Lay supine in a relaxed position with your knees up and hands across your chest.\n2.	Exhale and squeeze your abs as you curl your upper body off the floor.\n3.	Once your torso is perpendicular to the floor, slowly lower yourself back to the starting position.";

    document.getElementById("exerciseTips").innerText =
      "1.	Exhale hard like you’re blowing out candles on a cake and hold the contraction for a second in order to improve mind muscle connection.\n2.	If your lower back bothers you during this exercise, choose more anti extension and anti rotation based movements.\n3.	Avoid putting the hands behind the head as this can lead to excess strain upon the neck.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/MQDopvLZOS8";
  }
  //8
  if (name === "Decline Bench Sit Up") {
    document.getElementById("exerciseDetails").innerText =
      "The Decline Bench Sit Up is an effective core-strengthening exercise that targets the rectus abdominis (the main abdominal muscle) and works the hip flexors as secondary muscles.\nBy performing this exercise on a decline bench, the angle increases the intensity of the movement, making it more challenging than a traditional floor sit up.\nThe decline position requires greater activation of the abdominal muscles to lift the torso against gravity, helping to build strength and endurance in the core.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Position yourself on a decline bench, securing your feet under the foot pads. \n2.	Lie back on the bench and position your arms over your chest or place them behind your head for support.\n3.	Exhale and squeeze your abs as you curl your upper body off the bench, bringing your chest toward your knees. \n4.	Pause at the top of the movement, then slowly lower your upper body back to the starting position. This is one rep.";

    document.getElementById("exerciseTips").innerText =
      "1.	Exhale as you lift your torso and inhale as you lower yourself back down.\n2.	If you want to engage the obliques, add a twisting motion to help improve posture, stability, and overall core function.\n 3.	Perform the sit up slowly and with control, both while rising and lowering, to maximize muscle engagement and avoid using momentum.\n4.	Keep a neutral spine position throughout the movement; don’t let your back arch too much as you lower yourself.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/M0Z-HtAVr1g";
  }
  //9
  if (name === "Ab Crunch") {
    document.getElementById("exerciseDetails").innerText =
      "The abdominal crunch, or ab crunch, is a flexion based abdominal exercise. It is a very common movement that even the newest of beginner lifters have probably tried before.\nMost ab workouts include the ab crunch as it is thought to be one of the best core building exercises. However, instead of performing marathon sets of ab crunches, it is best to pair it with other ab movements such as the plank and hanging leg raise to get a complete ab workout.\nThe ab crunch replaced the sit up as the corner stone ab exercise. This is because people believed the sit up involved too much flexion which lends itself to lower back pain. Thus, it was replaced by the ab crunch, which accomplished the same movement pattern without overextending the spine.\nSome may still experience low back pain performing the ab crunch. If this is the case, it is best to stick with ab exercises that focus more on stability and less on flexion such as the plank.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Lay on your back in a relaxed position with your knees up and hands across your chest.\n2.	Exhale and squeeze your abs as you curl your upper body off the floor.\n3.	Once your abs are fully contracted and your upper back is off the floor, slowly lower yourself back to the starting position.";

    document.getElementById("exerciseTips").innerText =
      "1.	Exhale hard like you’re blowing out candles on a cake and hold the contraction for a second in order to improve mind muscle connection.\n2.	If your lower back bothers you during this exercise, choose more anti extension and anti rotation based movements.\n3.	Avoid putting the hands behind the head as this can lead to excess strain upon the neck.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/Plh1CyiPE_Y";
  }
  //10
  if (name === "Abdominal Air Bike (AKA Bicycle)") {
    document.getElementById("exerciseDetails").innerText =
      "The abdominal air bike is probably the most feared abdominal movement from anyone who’s performed an at-home ab workout video.\nThe bicycle exercise targets the whole abdomen and places constant tension on the mid-section as you go through the motions on both sides.\nThis exercise is an advanced variation of a crunch.\nIt can be performed for timed sets or as a set with a fixed rep range.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Lay on your back in a relaxed position with your arms behind your head and legs straight.\n2.	Exhale as you raise one knee towards your face while driving the opposite elbow to the knee.\n3.	Once your abs are fully contracted, slowly lower yourself back to the starting position and repeat on the opposite side.";

    document.getElementById("exerciseTips").innerText =
      "1.	Exhale hard like you’re blowing out candles on a cake and hold the contraction for a second in order to improve mind muscle connection.\n2.	If your lower back bothers you during this exercise, choose more anti extension and anti rotation based movements.\n3.	Avoid putting the hands behind the head as this can lead to excess strain upon the neck.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/vV_sKNCpiVM";
  }
  //11
  if (name === "Rocky Mountain Climber") {
    document.getElementById("exerciseDetails").innerText =
      "The rotating mountain climber is a variation of the mountain climber and an exercise used to target the muscles of the core.\nThe rotating mountain climber stems from the plank exercise family tree and works the core through stability (maintaining a neutral spine) and flexion (driving the knee towards the elbow).\nThe rotating mountain climber will incorporate the obliques to a greater extent than the traditional variation of the exercise.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Assume a plank pushup position with your hands underneath your shoulders.\n2.	Drive one knee towards the opposing elbow until the hip reaches 90 degrees of flexion.\n3.	Slowly return to the starting position and repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1.	Do not hold your breath, you shouldn’t be using respiration to compensate for a lack of stability. Learn how to move while maintaining position without having to rely upon your breath.\n2.	Move slowly but methodically. The goal is control within space, not simply completion of repetitions.\n3.	Exhale as you drive the knee up.\n4.	Ensure that you don’t lift the knee too high. If the pelvis tucks under or you lose control of a neutral spine then you’ve moved too far.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/5ZL0gFRjCTw";
  }
  //12
  if (name === "Lying Floor Knee Tuck") {
    document.getElementById("exerciseDetails").innerText =
      "The lying floor knee tuck is a variation of the abdominal crunch and an exercise used to isolate the muscles of the abdomen.\nThe lying floor knee tuck is a flexion based exercise which keeps the lower abdominal muscles under constant tension during the entire range of motion.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Lay on your back in a relaxed position with your legs straight and your hands underneath your low back for support.\n2.	Raise the knees toward your forehead while contracting your abdominals and exhaling.\n3.	Once your abs are fully contracted and your knees are slightly above parallel, slowly lower your legs back to the starting position.";

    document.getElementById("exerciseTips").innerText =
      "1.	Exhale hard like you’re blowing out candles on a cake and hold the contraction for a second in order to improve mind muscle connection.\n2.	If your lower back bothers you during this exercise, choose more anti extension and anti rotation based movements.\n3.	Avoid putting the hands behind the head as this can lead to excess strain upon the neck.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/V95h0UX8UyI";
  }
  //13
  if (name === "Straight Leg Toe Touch (Floor Toe Reach)") {
    document.getElementById("exerciseDetails").innerText =
      "The straight leg toe touch is a variation of the abdominal crunch and an exercise used to isolate the muscles of the abdomen.\nThe straight leg toe touch keeps constant tension on the lower abs as you go through flexion with the top portion of your abs.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Lay on your back in a relaxed position with your arms and legs straight.\n2.	Raise your legs straight until they are perpendicular with the floor.\n3.	Exhale as you reach straight up towards your toes.\n4.	Once your abs are fully contracted and your upper back is off the floor, slowly lower yourself back to the starting position.";

    document.getElementById("exerciseTips").innerText =
      "1.	Exhale hard like you’re blowing out candles on a cake and hold the contraction for a second in order to improve mind muscle connection.\n2.	If your lower back bothers you during this exercise, choose more anti extension and anti rotation based movements.\n3.	Avoid putting the hands behind the head as this can lead to excess strain upon the neck.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/yjfLpiFyGxs";
  }
  //14
  if (name === "Frog Sit Up") {
    document.getElementById("exerciseDetails").innerText =
      "The frog sit up is an exercise used to target the muscles of the core. It is a flexion based exercise and may not be suitable for those with low back pain.\nThe frog sit up is a variation of the sit up. The main difference in the frog sit up is the foot positioning, which as a result, encourages you to open up your hips more than a standard sit up would.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Lay supine in a relaxed position with your arms crossed, feet together, legs open, and knees pushed outwards.\n2.	Exhale and squeeze your abs as you raise your upper back off the floor.\n3.	Once your abs are fully contracted, slowly lower yourself back to the starting position and complete for the assigned number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1.	Exhale hard like you’re blowing out candles on a cake and hold the contraction for a second in order to improve mind muscle connection.\n2.	If your lower back bothers you during this exercise, choose more anti extension and anti rotation based movements.\n3.	Avoid putting the hands behind the head as this can lead to excess strain upon the neck.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/BFBjfwAkhhY";
  }
  //15
  if (name === "Wide Stance Cable Anti-Rotation") {
    document.getElementById("exerciseDetails").innerText =
      "The wide stance cable anti-rotation is a variation of the wood chop and an exercise used to strengthen the muscles of the core.\nThe wide stance cable anti-rotation exercise challenges the core to stabilize the spine as you move the weight through the exercise’s range of motion.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Assume an athletic position with your feet much wider than shoulder width and attach a rope to a cable stack at chest height.\n2.	Keep the arms locked out and rotate at the shoulders to bring the rope across your body.\n3.	Slowly return to the starting position and repeat for the desired number of repetitions on both sides.";

    document.getElementById("exerciseTips").innerText =
      "1.	The goal is to keep your hips/pelvis as stationary as possible. If you have trouble with rotation at the pelvis or lumbar spine then consider widening the feet and slowly progressing to shorten your stance over time as you gain the requisite motor control.\n2.	All rotation should primarily come through the upper back and not through the lumbar spine. If you’re finding that there is some rotation and/or pain through the SI joint then you may need to regress to a half kneeling or tall kneeling exercise variation.\n3.	Exhale as you rotate and don’t feel the need to over rotate. The exercise is complete once the upper back has fully rotated, you don’t need the arms to complete a 180.\n4.	Control the eccentric with your core, don’t just let the arms drop back to the starting position.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/4ezQO5hK9PA";
  }

  //16

  if (name === "Hands Overhead Ab Crunch") {
    document.getElementById("exerciseDetails").innerText =
      "The hands overhead ab crunch is an ab crunch variation that provides a little more resistance than its traditional counterpart.\nBy bringing your arms up overhead, you add just a little more bodyweight to the exercise than if you were to keep your arms crossed or behind the head.";

    document.getElementById("exerciseSteps").innerText =
      "1.	Lay on your back in a relaxed position with your knees up and hands overhead.\n2.	Exhale and squeeze your abs as you curl your upper body off the floor.\n3.	Once your abs are fully contracted and your upper back is off the floor, slowly lower yourself back to the starting position.";

    document.getElementById("exerciseTips").innerText =
      "1.	Exhale hard like you’re blowing out candles on a cake and hold the contraction for a second in order to improve mind muscle connection.\n2.	If your lower back bothers you during this exercise, choose more anti extension and anti rotation based movements.\n3.	Avoid putting the hands behind the head as this can lead to excess strain upon the neck.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/NyGHMQNx2ik";
  }

  //leg exercises--------
  //1
  //1
  if (name === "Leg Curl") {
    document.getElementById("exerciseDetails").innerText =
      "The lying leg curl is an isolation exercise primarily targeting the hamstrings (the muscles at the back of your thighs).\nThe lying leg curl helps improve hamstring strength and flexibility, knee stability, and overall leg development. It also helps correct muscle imbalances by isolating the hamstrings without involving other muscle groups like the quads.\nIt’s an effective exercise for building strength, improving athletic performance, and preventing injuries, especially for activities that rely heavily on knee flexion, such as running and jumping.";

    document.getElementById("exerciseSteps").innerText =
      "1.\tOn a leg curl machine, adjust the pad so it sits comfortably just above your ankles, and ensure the backrest is set to match your body size.\n2.\tSelect the desired weight and position your body face down on the machine, keeping your torso flat and your legs extended straight.\n3.\tPlace your feet under the ankle pad and hold onto the machine's handles for stability. This is the starting position.\n4.\tSlowly bend your knees and bring your heels toward your glutes by contracting your hamstrings.\n5.\tAt the top of the movement, pause briefly and squeeze your hamstrings.\n6.\tSlowly return to the starting position, fully extending your legs. This is one rep.\n7.\tPerform the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1.\tTo fully engage the hamstrings, perform the movement slowly and with control, especially when lowering your legs.\n2.\tWhen your legs curl up, pause briefly at the top and squeeze your hamstrings for maximum contraction.\n3.\tExhale as you curl your legs up, and inhale as you slowly lower them back down.\n4.\tUse a full range of motion. Aim to fully extend your legs at the bottom and bring your heels as close to your glutes as possible at the top.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/SiwJ_T62l9c";
  }

  //2
  if (name === "Seated Leg Curl") {
    document.getElementById("exerciseDetails").innerText =
      "The seated leg curl is a variation of the leg curl and an exercise used to isolate the hamstrings.\nThe seated leg curl is best used as part of your leg workout or in a full body workout routine.";

    document.getElementById("exerciseSteps").innerText =
      "1.\tSelect the desired weight, then adjust the pad so it rests comfortably above the back of the heels.\n2.\tTense up the hamstrings by taking the weight slightly off the stack. This is the starting position for the exercise.\n3.\tTake a deep breath, squeeze the hamstrings, and curl the weight up as far as possible while keeping the spine neutral.\n4.\tSlowly lower the weight back to the starting position and repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1.\tTo keep tension on the hamstrings, keep the knees just shy of lockout.\n2.\tDon’t allow the back to arch, keep your hips pressed into the pad.\n3.\tKeep your low back flat against the pad throughout the movement.\n4.\tEnsure the head does not jut forward excessively.\n5.\tDon’t allow momentum to dictate the tempo of the exercise, control the movement throughout the entire range of motion.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/3BWiLFc8Dbg";
  }

  //3
  if (name === "Glute Ham Raise") {
    document.getElementById("exerciseDetails").innerText =
      "The glute ham raise is an exercise used to strengthen the muscles of the hamstrings.\nGlute ham raises are a great alternative to the leg curl and an exercise that can help improve deadlift and squat strength.";

    document.getElementById("exerciseSteps").innerText =
      "1.\tSet up in a GHD with your knees bent, hips extended, and torso upright.\n2.\tStraighten your legs while keeping your hips extended.\n3.\tContinue until your body is in a straight line and parallel to the floor.\n4.\tPull yourself back to the starting position using your hamstrings.\n5.\tRepeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1.\tYou should feel this primarily through your glutes and hamstrings. If you’re getting a lower back pump then odds are, you’re dealing with a core/pelvis stability issue.\n2.\tIf you struggle with keeping a neutral spine, regress to easier variations.\n3.\tAvoid locking out your knees at the bottom to maintain tension.\n4.\tAdvanced: slight hip flexion at the bottom can increase glute activation.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/xUU553-2SAc";
  }

  //4
  if (name === "Nordic Hamstring Curl (Bodyweight)") {
    document.getElementById("exerciseDetails").innerText =
      "The Nordic hamstring curl is a bodyweight exercise used to strengthen the hamstrings.\nIt is very challenging but excellent for building strength and muscle, with strong carryover to major leg movements.";

    document.getElementById("exerciseSteps").innerText =
      "1.\tSet up in a Nordic position with hips extended and torso upright.\n2.\tSlowly lower yourself while keeping hips extended.\n3.\tCatch yourself with your arms when needed.\n4.\tPush lightly off the floor and pull yourself back up using your hamstrings.\n5.\tRepeat for desired reps.";

    document.getElementById("exerciseTips").innerText =
      "1.\tKeep hips extended to maintain hamstring tension.\n2.\tControl the descent as long as possible.\n3.\tAvoid using the lower back to compensate.\n4.\tUse assistance setups if needed.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/rzK7glg8OnA";
  }

  //5
  if (name === "Barbell Back Squat") {
    document.getElementById("exerciseDetails").innerText =
      "The squat is a foundational compound movement that targets the quads, hamstrings, glutes, and core.\nIt is one of the most important exercises for strength, athletic performance, and muscle development.";

    document.getElementById("exerciseSteps").innerText =
      "1.\tSet the bar just below shoulder height.\n2.\tPosition it on your upper back.\n3.\tStep back and stabilize.\n4.\tLower your body until thighs are parallel.\n5.\tPush through your heels to return to start.\n6.\tRepeat.";

    document.getElementById("exerciseTips").innerText =
      "1.\tKeep your back straight and chest up.\n2.\tPush through your heels.\n3.\tAvoid knees caving inward.\n4.\tControl movement throughout.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/R2dMsNhN3DE";
  }

  //6
  if (name === "Dumbbell Goblet Squat") {
    document.getElementById("exerciseDetails").innerText =
      "The dumbbell goblet squat is a squat variation emphasizing the quads and teaching proper squat mechanics.";

    document.getElementById("exerciseSteps").innerText =
      "1.\tHold a dumbbell at chest height.\n2.\tDescend by bending knees and hips.\n3.\tLower until thighs are parallel.\n4.\tDrive back up to start.\n5.\tRepeat.";

    document.getElementById("exerciseTips").innerText =
      "1.\tKeep core braced.\n2.\tDrive through full foot.\n3.\tExperiment with stance and toe angle.\n4.\tStay upright.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/5Y3KW5rWMh4";
  }

  //7
  if (name === "Leg Extension") {
    document.getElementById("exerciseDetails").innerText =
      "The leg extension is an isolation exercise targeting the quadriceps.";

    document.getElementById("exerciseSteps").innerText =
      "1.\tAdjust machine to align knees.\n2.\tPlace shins under pad.\n3.\tExtend legs fully.\n4.\tLower slowly.\n5.\tRepeat.";

    document.getElementById("exerciseTips").innerText =
      "1.\tAlign knee joint with machine axis.\n2.\tAvoid excessive weight.\n3.\tControl movement.\n4.\tPoint toes for better activation.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/0fl1RRgJ83I";
  }

  //8
  if (name === "Dumbbell Lunge") {
    document.getElementById("exerciseDetails").innerText =
      "The dumbbell lunge targets quads, hamstrings, glutes, and improves balance and coordination.";

    document.getElementById("exerciseSteps").innerText =
      "1.\tStand holding dumbbells.\n2.\tStep forward and lower to 90 degrees.\n3.\tPush back to start.\n4.\tAlternate legs.";

    document.getElementById("exerciseTips").innerText =
      "1.\tKeep front knee aligned.\n2.\tEngage core.\n3.\tMove slowly.\n4.\tAdjust step length for muscle emphasis.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/lf4gJgKyLpI";
  }

  //9
  if (name === "Leg Press") {
    document.getElementById("exerciseDetails").innerText =
      "The leg press is a machine-based squat variation targeting the lower body.";

    document.getElementById("exerciseSteps").innerText =
      "1.\tSit and place feet on platform.\n2.\tExtend legs and unlock safeties.\n3.\tLower weight under control.\n4.\tPush back up.\n5.\tRepeat.";

    document.getElementById("exerciseTips").innerText =
      "1.\tKeep back flat.\n2.\tControl movement.\n3.\tAdjust foot pressure for emphasis.\n4.\tAvoid locking knees.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/sEM_zo9w2ss";
  }

  //10
  if (name === "One Leg Dumbbell Squat") {
    document.getElementById("exerciseDetails").innerText =
      "The Bulgarian split squat is a unilateral leg exercise focusing on quads and glutes.";

    document.getElementById("exerciseSteps").innerText =
      "1.\tSet rear foot elevated.\n2.\tLower until back knee touches ground.\n3.\tDrive through front foot to stand.\n4.\tRepeat.";

    document.getElementById("exerciseTips").innerText =
      "1.\tAdjust stance for emphasis.\n2.\tKeep balance controlled.\n3.\tMaintain neutral spine.\n4.\tUse slight forward lean.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/uqI3GVwfToU";
  }

  //11
  if (name === "Machine Hack Squat") {
    document.getElementById("exerciseDetails").innerText =
      "The hack squat is a machine squat variation targeting quads, glutes, and hamstrings.";

    document.getElementById("exerciseSteps").innerText =
      "1.\tPosition body in machine.\n2.\tLower weight to 90 degrees.\n3.\tDrive back up.\n4.\tRepeat.";

    document.getElementById("exerciseTips").innerText =
      "1.\tKeep back flat.\n2.\tControl movement.\n3.\tAdjust foot pressure.\n4.\tAvoid locking knees.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/63tboDKQksc";
  }

  //12
  if (name === "Bodyweight Pistol Squat") {
    document.getElementById("exerciseDetails").innerText =
      "The pistol squat is an advanced single-leg squat requiring balance and mobility.";

    document.getElementById("exerciseSteps").innerText =
      "1.\tStand on one leg.\n2.\tLower body while extending other leg.\n3.\tReturn to start.\n4.\tRepeat.";

    document.getElementById("exerciseTips").innerText =
      "1.\tUse assistance if needed.\n2.\tControl descent.\n3.\tKeep heel down.\n4.\tFocus on balance.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/6U7210EZHoE";
  }

  //13
  if (name === "Seated Calf Raise") {
    document.getElementById("exerciseDetails").innerText =
      "The seated calf raise isolates the calf muscles.";

    document.getElementById("exerciseSteps").innerText =
      "1.\tPlace feet on platform.\n2.\tLower heels.\n3.\tRaise heels by contracting calves.\n4.\tRepeat.";

    document.getElementById("exerciseTips").innerText =
      "1.\tMove slowly.\n2.\tPause at top.\n3.\tAvoid excessive stretch pain.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/Yh5TXz99xwY";
  }

  //14
  if (name === "45 Degree Leg Press Calf Raise") {
    document.getElementById("exerciseDetails").innerText =
      "The leg press calf raise targets the calf muscles using a machine.";

    document.getElementById("exerciseSteps").innerText =
      "1.\tPosition feet at bottom of platform.\n2.\tLower heels.\n3.\tRaise heels by extending ankles.\n4.\tRepeat.";

    document.getElementById("exerciseTips").innerText =
      "1.\tBe cautious with setup.\n2.\tControl movement.\n3.\tAvoid knee strain.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/RcKQbiL-ZOc";
  }

  //15
  if (name === "Bodyweight Standing Calf Raise") {
    document.getElementById("exerciseDetails").innerText =
      "The standing calf raise strengthens the calf muscles.";

    document.getElementById("exerciseSteps").innerText =
      "1.\tStand on a step.\n2.\tLower heels.\n3.\tRaise heels.\n4.\tRepeat.";

    document.getElementById("exerciseTips").innerText =
      "1.\tUse full range of motion.\n2.\tPause at top.\n3.\tAvoid resting at bottom.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/mLqA5D0Dsw0";
  }

  //Bicep exercises--------

  //1
  if (name === "Standing Hammer Curl") {
    document.getElementById("exerciseDetails").innerText =
      "The standing hammer curl is a variation of the traditional dumbbell curl and an exercise used to build the biceps and forearms.\nIt primarily targets the brachialis muscle, which lies underneath the biceps and contributes to overall arm thickness and size.\nAdditionally, the neutral grip used during the hammer curl increases activation of the brachioradialis, improving forearm development and grip strength.\nThis exercise is effective for building balanced arm strength and improving functional performance in pulling movements.";

    document.getElementById("exerciseSteps").innerText =
      "1. Grab a pair of dumbbells and stand upright with the dumbbells at your sides.\n2. Use a neutral grip (palms facing your body) and slightly bend your arms to create tension on the biceps.\n3. Slowly curl the dumbbells upward while keeping your palms facing inward.\n4. Squeeze your biceps at the top of the movement.\n5. Slowly lower the weights back to the starting position.\n6. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. Keep the movement slow and controlled to maximize muscle engagement.\n2. Avoid swinging your body or using momentum.\n3. Keep your elbows close to your sides throughout the movement.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/CFBZ4jN1CMI";
  }

  //2
  if (name === "Standing Dumbbell Curl") {
    document.getElementById("exerciseDetails").innerText =
      "The standing dumbbell curl is a fundamental bicep exercise used to build strength and size in the upper arms.\nIt primarily targets the biceps brachii while also engaging the forearms as secondary muscles.\nThis exercise allows for a natural range of motion and helps improve muscle symmetry when performed correctly.\nIt is commonly used in both beginner and advanced training programs due to its effectiveness and simplicity.";

    document.getElementById("exerciseSteps").innerText =
      "1. Stand upright with a pair of dumbbells at your sides.\n2. Use a supinated grip (palms facing forward).\n3. Slightly bend your elbows to create tension in the biceps.\n4. Slowly curl the dumbbells upward as far as possible.\n5. Squeeze your biceps at the top of the movement.\n6. Slowly lower the dumbbells back to the starting position.\n7. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. Keep tension on the biceps throughout the entire movement.\n2. Avoid letting the dumbbells rest at the bottom.\n3. Do not swing your body or use momentum.\n4. Keep your torso upright and stable.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/6DeLZ6cbgWQ";
  }

  //3
  if (name === "Incline Dumbbell Curl") {
    document.getElementById("exerciseDetails").innerText =
      "The incline dumbbell curl is a variation of the dumbbell curl used to build bigger biceps.\nBy positioning yourself on an incline bench, the exercise increases the stretch on the biceps during the lowering phase, leading to greater muscle activation.\nThis extended range of motion makes it particularly effective for improving muscle growth and developing the long head of the biceps.\nIt is commonly used by individuals looking to improve arm aesthetics.";

    document.getElementById("exerciseSteps").innerText =
      "1. Set an incline bench to approximately 55–65 degrees and sit back against the pad.\n2. Hold a pair of dumbbells with a supinated grip (palms facing up).\n3. Curl the dumbbells toward your shoulders while keeping your elbows stationary.\n4. Squeeze the biceps at the top of the movement.\n5. Slowly lower the weights back to the starting position.\n6. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. Do not allow your elbows to move behind your body.\n2. Maintain a slight bend in your elbows at the bottom to keep tension.\n3. Use a slow eccentric (lowering phase) to increase muscle engagement.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/UeleXjsE-98";
  }

  //4
  if (name === "Cable Curl") {
    document.getElementById("exerciseDetails").innerText =
      "The cable curl is an effective isolation exercise that targets the biceps brachii.\nUnlike free weights, the cable provides constant tension throughout the entire range of motion, improving muscle activation.\nIt also engages the brachialis and forearm muscles, making it a great option for building both strength and muscle definition.\nThis exercise is suitable for all experience levels and is commonly used in hypertrophy-focused training.";

    document.getElementById("exerciseSteps").innerText =
      "1. Attach a straight bar to a low pulley cable machine.\n2. Stand facing the machine with feet shoulder-width apart.\n3. Grasp the bar with an underhand grip.\n4. Curl the bar upward while keeping your elbows tucked at your sides.\n5. Squeeze the biceps at the top.\n6. Slowly lower the bar back to the starting position.\n7. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. Keep your elbows fixed at your sides throughout the movement.\n2. Avoid leaning back or using momentum.\n3. Focus on controlled movement and full contraction.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/rfRdD5PKrko";
  }

  //5
  if (name === "Standing Barbell Curl") {
    document.getElementById("exerciseDetails").innerText =
      "The standing barbell curl is a classic bicep exercise used to build size and strength in the upper arms.\nIt primarily targets the biceps brachii and allows for heavier loading compared to dumbbell variations.\nThis exercise is effective for progressive overload and is commonly included in strength and hypertrophy programs.";

    document.getElementById("exerciseSteps").innerText =
      "1. Stand with feet shoulder-width apart and grasp a barbell with an underhand grip.\n2. Keep your elbows close to your sides.\n3. Curl the barbell upward by bending your elbows.\n4. Squeeze your biceps at the top.\n5. Slowly lower the barbell back to the starting position.\n6. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. Do not swing your body to lift the weight.\n2. Keep the movement slow and controlled.\n3. Focus on isolating the biceps.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/N5x5M1x1Gd0";
  }

  //6
  if (name === "Concentration Curl") {
    document.getElementById("exerciseDetails").innerText =
      "The concentration curl is a highly effective isolation exercise used to build the biceps.\nIt emphasizes strict form and a strong mind-muscle connection, making it a favorite among bodybuilders.\nBecause it is performed unilaterally, it helps correct muscular imbalances and ensures equal development between both arms.\nThe slow, controlled tempo of this movement makes it particularly effective for muscle growth and definition.";

    document.getElementById("exerciseSteps").innerText =
      "1. Sit on a flat bench holding a dumbbell.\n2. Lean forward and rest your elbow against the inside of your thigh.\n3. Using a supinated grip, curl the dumbbell toward your shoulder.\n4. Squeeze the biceps at the top of the movement.\n5. Slowly lower the weight back to the starting position.\n6. Repeat for the desired number of repetitions on both arms.";

    document.getElementById("exerciseTips").innerText =
      "1. Maintain a slight bend in the elbow at the bottom to keep tension.\n2. Use a slow and controlled tempo.\n3. Avoid using momentum or swinging the weight.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/LHDwya1KY8M";
  }

  //7
  if (name === "Barbell Preacher Curl") {
    document.getElementById("exerciseDetails").innerText =
      "The barbell preacher curl is an isolation exercise designed to target the biceps.\nThe preacher bench setup limits momentum and ensures strict form, placing greater emphasis on the biceps during the lifting phase.\nThis movement is particularly effective for building the peak of the biceps and improving overall arm aesthetics.\nIt is commonly used toward the end of workouts for focused muscle fatigue.";

    document.getElementById("exerciseSteps").innerText =
      "1. Sit on a preacher bench with your chest against the pad.\n2. Hold a barbell with a supinated grip.\n3. Extend your arms fully.\n4. Curl the bar upward toward your shoulders.\n5. Squeeze your biceps at the top.\n6. Slowly lower the bar back down.\n7. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. Use a full range of motion.\n2. Keep the movement slow and controlled.\n3. Avoid lifting your arms off the pad.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/sxA__DoLsgo";
  }

  //8
  if (name === "Cable Curl (Rope Extension)") {
    document.getElementById("exerciseDetails").innerText =
      "The cable curl with rope attachment is an effective exercise for isolating the biceps.\nIt provides constant tension throughout the movement and allows for a more natural wrist position using a neutral grip.\nThis variation helps target both the biceps and brachialis, contributing to overall arm thickness and development.\nIt is suitable for both beginners and advanced lifters.";

    document.getElementById("exerciseSteps").innerText =
      "1. Attach a rope to the low pulley cable.\n2. Stand facing the machine with feet shoulder-width apart.\n3. Hold the rope with a neutral grip.\n4. Curl the rope upward while keeping your elbows tucked in.\n5. Squeeze the biceps at the top.\n6. Slowly return to the starting position.\n7. Repeat for desired reps.";

    document.getElementById("exerciseTips").innerText =
      "1. Keep your elbows close to your sides.\n2. Avoid leaning back or swinging.\n3. Focus on controlled movement.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/INms4j4rz-A";
  }

  //9
  if (name === "Machine Bicep Curl") {
    document.getElementById("exerciseDetails").innerText =
      "The machine bicep curl is an isolation exercise designed to strengthen the biceps with controlled movement.\nThe fixed path of the machine reduces the need for stabilization, making it ideal for beginners and those recovering from injury.\nIt provides consistent resistance and helps improve muscle size, strength, and endurance.\nThis exercise is especially useful for maintaining proper form throughout the movement.";

    document.getElementById("exerciseSteps").innerText =
      "1. Adjust the seat height so your arms rest comfortably on the pad.\n2. Grip the handles with an underhand grip.\n3. Slightly bend your elbows to create tension.\n4. Curl the weight upward as far as possible.\n5. Squeeze the biceps at the top.\n6. Slowly lower the weight back down.\n7. Repeat for desired reps.";

    document.getElementById("exerciseTips").innerText =
      "1. Use a full range of motion.\n2. Keep the movement slow and controlled.\n3. Avoid letting the weight stack slam.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/HB6IQsuWEDE";
  }

  //10
  if (name === "Dumbbell Hammer Preacher Curl") {
    document.getElementById("exerciseDetails").innerText =
      "The dumbbell hammer preacher curl combines the preacher bench setup with a neutral grip to target the biceps and brachialis.\nThis variation limits momentum and creates a strict range of motion, allowing for a more focused contraction.\nIt is particularly useful for building arm thickness and improving muscle symmetry.\nThis exercise is commonly used in hypertrophy-focused training programs.";

    document.getElementById("exerciseSteps").innerText =
      "1. Sit on a preacher bench with your chest against the pad.\n2. Hold a dumbbell with a neutral grip.\n3. Lower the dumbbell until your arm is nearly fully extended.\n4. Curl the dumbbell back toward your shoulder.\n5. Squeeze at the top.\n6. Slowly lower back down.\n7. Repeat for both arms.";

    document.getElementById("exerciseTips").innerText =
      "1. Maintain a slight bend at the bottom.\n2. Use slow eccentric movement.\n3. Keep your upper arm fixed on the pad.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/ZdcFOgFi1Dg";
  }

  //11
  if (name === "Standing Dumbbell Reverse Curl") {
    document.getElementById("exerciseDetails").innerText =
      "The standing dumbbell reverse curl is a variation of the traditional curl that uses a pronated grip.\nThis grip increases activation of the forearms while still targeting the biceps.\nIt is effective for building balanced arm strength and improving grip.\nThis exercise is often used to enhance forearm development and overall arm aesthetics.";

    document.getElementById("exerciseSteps").innerText =
      "1. Stand with dumbbells at your sides.\n2. Use a pronated grip (palms facing down).\n3. Curl the dumbbells toward your shoulders.\n4. Squeeze at the top.\n5. Slowly lower the weights.\n6. Repeat for desired reps.";

    document.getElementById("exerciseTips").innerText =
      "1. Keep elbows stable.\n2. Avoid swinging.\n3. Use controlled tempo.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/i5h3myNHVFk";
  }

  //12
  if (name === "Incline Hammer Curl") {
    document.getElementById("exerciseDetails").innerText =
      "The incline hammer curl is a variation of the hammer curl performed on an incline bench.\nBy positioning the arms behind the torso, it increases the stretch on the biceps and targets the long head and brachialis.\nThis helps improve both arm width and peak development.\nIt also engages the forearms, contributing to overall arm strength.";

    document.getElementById("exerciseSteps").innerText =
      "1. Set an incline bench to 30–45 degrees.\n2. Sit back holding dumbbells with a neutral grip.\n3. Slightly bend your arms to create tension.\n4. Curl the dumbbells upward.\n5. Squeeze at the top.\n6. Slowly lower back down.\n7. Repeat.";

    document.getElementById("exerciseTips").innerText =
      "1. Keep elbows fixed.\n2. Use slow controlled reps.\n3. Avoid swinging.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/1Z6XiaBxwHQ";
  }

  //13
  if (name === "Dumbbell Preacher Curl") {
    document.getElementById("exerciseDetails").innerText =
      "The dumbbell preacher curl is an isolation exercise that targets the biceps.\nThe preacher bench setup restricts movement and eliminates momentum, ensuring strict form.\nThis exercise is effective for building bicep peaks and improving muscle definition.\nIt is commonly used in bodybuilding-focused routines.";

    document.getElementById("exerciseSteps").innerText =
      "1. Sit on a preacher bench with your chest against the pad.\n2. Hold a dumbbell with a supinated grip.\n3. Lower the weight until your arm is extended.\n4. Curl the dumbbell back up.\n5. Squeeze at the top.\n6. Slowly lower back down.\n7. Repeat for both arms.";

    document.getElementById("exerciseTips").innerText =
      "1. Maintain tension at the bottom.\n2. Use slow eccentric movement.\n3. Keep your upper arm fixed.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/pwEhS1sg9mU";
  }

  //14
  if (name === "Close Grip Standing Barbell Curl") {
    document.getElementById("exerciseDetails").innerText =
      "The close grip standing barbell curl is a variation of the barbell curl that targets the outer portion of the biceps.\nUsing a narrower grip shifts emphasis to the long head of the biceps, helping improve peak development.\nThis variation is useful for building more defined and aesthetic arms.\nIt can be incorporated into various training programs focused on hypertrophy.";

    document.getElementById("exerciseSteps").innerText =
      "1. Grip the barbell with a narrow underhand grip.\n2. Stand upright with feet shoulder-width apart.\n3. Curl the bar upward.\n4. Squeeze at the top.\n5. Slowly lower back down.\n6. Repeat.";

    document.getElementById("exerciseTips").innerText =
      "1. Keep elbows stable.\n2. Maintain a slight bend at the bottom.\n3. Use slow eccentric reps.\n4. Switch to EZ bar if wrists hurt.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/exqx_2Uyopw";
  }

  // Tricep Exercises ------------------------------------------------------------

  // 1
  if (name === "Straight Bar Tricep Extension") {
    document.getElementById("exerciseDetails").innerText =
      "The straight bar tricep extension is a variation of the cable tricep extension and an exercise used to build the muscles of the triceps.\nWell-built triceps also have a lot of positive carryover into your pressing movements such as bench press variations and shoulder press variations.\nThe straight bar tricep extension can be included in your tricep workouts, upper body workouts, push workouts, and full body workouts.";

    document.getElementById("exerciseSteps").innerText =
      "1. Attach a straight bar to a cable stack as high as possible and assume a standing position.\n2. Grasp the straight bar with a pronated grip (palms facing down) and lean forward slightly by hinging at the hips.\n3. Initiate the movement by extending the elbows and flexing the triceps.\n4. Pull the handle downward until the elbows are almost locked out and then slowly lower under control back to the starting position.\n5. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. If you want to keep more tension in the triceps, don’t lock the elbows out entirely.\n2. Imagine there’s a screw running through your elbow and don’t allow them to move in front of the body as you extend at the bottom of the movement.\n3. Experiment with static elbow positioning throughout the lift - some may find that they get a better stretch in the bottom portion of the movement by allowing their elbows to drift behind the body during the eccentric portion of the movement (similar to a drag curl).\n4. Ensure the shoulder blades don’t tilt forward as you extend the elbows.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/mpZ9VRisAyw";
  }

  // 2
  if (name === "Seated Dumbbell Tricep Extension") {
    document.getElementById("exerciseDetails").innerText =
      "The seated dumbbell tricep extension is a variation of the dumbbell tricep extension and an exercise used to isolate the muscles of the triceps.\nOverhead extension exercises are particularly useful in targeting the long head of the triceps muscle. Having a larger and more dense long head will give you an overall appearance of a larger tricep.\nIsolation exercises for the triceps are particularly useful for those looking to achieve aesthetics. They can also be helpful for those looking to increase their strength on other pressing motions.";

    document.getElementById("exerciseSteps").innerText =
      "1. Select the desired weight from the rack and position an adjustable bench at 90 degrees.\n2. To get into position, sit in an upright position and lift the dumbbell to the top of your shoulder. Take a deep breath, overlap your hands around the dumbbell, then press it into position overhead.\n3. Maintain an overlapping grip and slowly lower the dumbbell behind your head by unlocking your elbows.\n4. Once your forearms reach parallel or just below, drive the dumbbell back to the starting point by extending the elbows and flexing the triceps.\n5. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. Don’t overextend through the lumbar spine, keep your ribcage down by maintaining tension through the abs and glutes.\n2. Using a slow eccentric (lowering portion) of the exercise can help to improve tension and mind muscle connection.\n3. Keep the head in a fairly neutral position, don’t allow the neck to jut forward as this may place excessive pressure on the cervical spine.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/LlCFtWCQc5s";
  }

  // 3
  if (name === "Lying Dumbbell Extension") {
    document.getElementById("exerciseDetails").innerText =
      "The lying dumbbell extension is an effective triceps isolation exercise that emphasizes the long head while promoting balanced arm development.";

    document.getElementById("exerciseSteps").innerText =
      "1. Grab a pair of dumbbells and sit on the end of a flat bench with the dumbbells resting on your thighs.\n2. Lie back on the bench and extend the dumbbells above your head. The dumbbells should not be touching and you should be using a neutral grip (palms facing each other).\n3. Bending at the elbows only, keeping your elbows fixed and pointing at your hips, slowly lower the dumbbells down beside your head until they are about level with your ears.\n4. Pause and squeeze the triceps. Then raise the dumbbells back to the starting position.\n5. Do not lock the elbows out, and then repeat for desired reps.";

    document.getElementById("exerciseTips").innerText =
      "1. It's important to keep your elbows in and facing toward your hips. Don't let them flare out as you lower the dumbbells down.\n2. Keep the rep timing slow and control the weight throughout the set.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/1BDGIcMTSXc";
  }

  // 4
  if (name === "Rope Tricep Extension") {
    document.getElementById("exerciseDetails").innerText =
      "The rope tricep extension is a variation of the cable tricep extension and an exercise used to build the muscles of the triceps.\nWell-built triceps also have a lot of positive carryover into your pressing movements such as bench press variations and shoulder press variations.\nThe rope tricep extension can be included in your tricep workouts, upper body workouts, push workouts, and full body workouts.";

    document.getElementById("exerciseSteps").innerText =
      "1. Attach a rope to a cable stack as high as possible and assume a standing position.\n2. Grasp the rope with a neutral grip (palms facing in) and lean forward slightly by hinging at the hips.\n3. Initiate the movement by extending the elbows and flexing the triceps.\n4. Pull the rope downward until the elbows are almost locked out and then slowly lower under control back to the starting position.\n5. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. If you want to keep more tension in the triceps, don’t lock the elbows out entirely.\n2. Imagine there’s a screw running through your elbow and don’t allow them to move in front of the body as you extend at the bottom of the movement.\n3. Experiment with static elbow positioning throughout the lift - some may find that they get a better stretch in the bottom portion of the movement by allowing their elbows to drift behind the body during the eccentric portion of the movement (similar to a drag curl).\n4. Ensure the shoulder blades don’t tilt forward as you extend the elbows.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/LzwgB15UdO8";
  }

  // 5
  if (name === "EZ Bar Skullcrusher") {
    document.getElementById("exerciseDetails").innerText =
      "The EZ bar skullcrusher is a variation of the skullcrusher and an exercise used to strengthen the muscles of the triceps.\nThe triceps can be trained in many different ways to promote growth and overhead extensions, such as the EZ bar skullcrusher, are an effective way to target the long head of the tricep.\nHaving bigger and stronger triceps are not only important from an aesthetic standpoint but can also help contribute to better performance on pressing motions such as the bench press.";

    document.getElementById("exerciseSteps").innerText =
      "1. Select your desired weight and sit on the edge of a flat bench.\n2. To get into position, lay back and keep the bar close to your chest. Once you are supine, press the weight to lockout.\n3. Lower the weights towards your head by unlocking the elbows and allowing the ez bar to drop toward your forehead or just above.\n4. Once your forearms reach parallel or just below, reverse the movement by extending the elbows while flexing the triceps to lockout the weight.\n5. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. Don’t overextend through the lumbar spine as you lower the weight, keep some tension through the abdominals.\n2. Exhale as you extend the elbows and lockout the weight overhead.\n3. If you experience elbow pain during the movement, consider implementing a slight angle (incline or decline) or adjust elbow position (in versus out).\n4. You may slightly reduce tension through the ligamentous portions of the triceps during the movement by keeping the bar just above your head and not locking out directly over your line of sight.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/K6MSN4hCDM4";
  }

  // 6
  if (name === "Close Grip Bench Press") {
    document.getElementById("exerciseDetails").innerText =
      "The close grip bench press is a variation of the bench press and an exercise used to build muscle and strength in the triceps. The movement will also indirectly target the muscles of the chest and shoulders.\nThe close grip bench press is a superior movement when we’re talking about exercises that will pack mass onto your triceps. That said, use of close grips can provide some shoulder and elbow discomfort for some.\nThis exercise can be included in your tricep workouts, push workouts, upper body workouts, and full body workouts.";

    document.getElementById("exerciseSteps").innerText =
      "1. Lie flat on a bench and set your hands at shoulder width.\n2. Set your shoulder blades by pinching them together and driving them into the bench.\n3. Take a deep breath and allow your spotter to help you with the lift off in order to maintain tightness through your upper back.\n4. Let the weight settle and ensure your upper back remains tight after lift off.\n5. Inhale and allow the bar to descend slowly by unlocking the elbows.\n6. Lower the bar in a straight line to the base of the sternum (breastbone) and touch the chest.\n7. Push the bar back up in a straight line by pressing yourself into the bench, driving your feet into the floor for leg drive, and extending the elbows.\n8. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. Technique first, weight second - no one cares how much you bench if you get injured.\n2. Keep the bar in line with your wrist and elbows and ensure it travels in a straight line. To keep the wrist straight, try to position the bar as low in the palm as possible while still being able to wrap the thumb.\n3. If you want to keep more tension through the triceps and chest, stop each repetition just short of lockout at the top.\n4. The elbows will be tucked more than a normal bench due to the decrease grip width but if you experience shoulder pain during this variation you may have to slightly tweak grip width and elbow tuck to provide more space within the shoulder capsule.\n5. Arching may be advisable depending upon your goals but ensure that most of the arch comes from the mid to upper back and not your lower back. If your lower back is cramping as you set up for the lift, you’re out of position and putting yourself at risk for potential injury.\n6. The bar should touch your chest with every single repetition. If you want to overload specific ranges of motion, look into board presses or accommodating resistance with chains or bands.\n7. As the bar descends, aim for your sternum (breastbone) or slightly below depending upon the length of your upper arm to promote a linear bar path.\n8. Intermediate and advanced lifters may use a thumbless or “suicide” grip but for the majority of lifters, it would be wiser to learn how to bench with the thumb wrapped around the bar at first.\n9. Fight to the urge to allow the wrists to roll back into extension, think about rolling your knuckles toward the ceiling.\n10. Experiment with grip width - if your have longer arms you may need to use a slightly wider grip. However, if you’re feeling pressure in the front of the shoulder during the exercise, you may need to widen your grip, improve scapular retraction, or slightly lessen the range of motion via exercises such as floor or board presses.\n11. Squeeze the bar as tightly as possible to help enhance shoulder stability.\n12. Some lifters prefer to tuck their toes while other prefer to keep the feet flat to optimize leg drive - experiment with both and see which one feels and allows for greater power production.\n13. Ensure the shoulder blades remain retracted and don’t allow them to change position as you press.\n14. The bar should descend under control and touch the lifter’s chest - no bouncing or excess momentum.\n15. Think about trying to push yourself away from the bar instead of pushing the bar off of you.\n16. Tightness through the upper back should be one of your main priorities throughout the course of the lift.\n17. Ideally, use a spotter to help assist with the lift off in order to maintain tension through the upper back.\n18. Keep the feet quiet throughout the lift and utilize leg drive by pushing your feet into the floor and squeezing your glutes to stabilize the pelvis.\n19. Focus on pulling the bar apart or trying to “bend the bar” to activate some of the intrinsic stabilizers in the shoulder.\n20. The glutes and shoulder blades should maintain contact with the bench throughout the entirety of the movement.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/j-NhORwJDb4";
  }

  // 7
  if (name === "Tricep Dip") {
    document.getElementById("exerciseDetails").innerText =
      "The tricep dip is a bodyweight exercise that primarily targets the triceps, but it also engages the shoulders and chest. To perform a tricep dip, sit on the edge of a bench or chair, place your hands next to your hips, and lower your body by bending your elbows while keeping your torso upright. This exercise is effective for building upper body strength and can be performed on various surfaces, including the floor or parallel bars. Variations include bent knee dips and ring dips, which can be adjusted for different muscle engagement and difficulty levels.\nMany people don't know that there are two ways to do dips - focusing on your triceps, or focusing on your chest. This version of the dip hits the triceps hardest.";

    document.getElementById("exerciseSteps").innerText =
      "1. Grab the parallel dip bars with an inward grip.\n2. If the bars are adjustable, adjust them to around shoulder-width apart.\n3. Jump up off the floor and take your weight on the bars.\n4. The key to hitting your triceps on this version of the dip is to keep your body as straight as possible and don't lean forward. This may mean not crossing your legs and keeping them hanging down.\n5. Slowly lower yourself down, keeping your eyes facing forward.\n6. Lower until your elbow is at around the same height as your shoulder, and then raise your body back up without locking your arms at the top of the movement.\n7. Repeat for desired reps.";

    document.getElementById("exerciseTips").innerText =
      "1. Do not lower yourself down too far, as this can result in heavy strain on your shoulder joints and possible injury.\n2. Use the mind-muscle connection to focus on working your triceps throughout the movement. Squeeze your triceps hard at the top of the movement and feel the stretch on the way down.\n3. Do not lock your elbows out at the top of the movement.\n4. And finally, keep the rep timing slow for maximum results from this exercise.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/_wUdg_4wCCk";
  }

  // 8
  if (name === "Bent Over Dumbbell Tricep Kickback") {
    document.getElementById("exerciseDetails").innerText =
      "The bent over dumbbell tricep kickback is a classic tricep exercise that has been used for ages.\nWhen performing bent over dumbbell tricep kickbacks, the movement should be slow and focused. The point of this exercise is to get a good contraction on the triceps and establish a mind-muscle connection.\nThe bent over dumbbell tricep kickback is typically included in hypertrophy-based splits and are also an excellent tricep finisher at the end of your workout.";

    document.getElementById("exerciseSteps").innerText =
      "1. Select the desired weight from the rack and stand in an open area.\n2. Hinge forward, row the dumbbells into position, then extend the elbows while flexing the triceps.\n3. Slowly lower the dumbbells back to the starting position and repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. Hinge forward from the hips, there shouldn’t be excessive curvature within the lumbar spine.\n2. Don’t overextend through the lumbar spine, keep some tension through the abdominals.\n3. Exhale as you extend the dumbbell behind your body and flex the tricep.\n4. Keep the head in a fairly neutral position, focus on a spot on the floor and complete all of the assigned repetitions.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/BL9CzOQZDrs";
  }

  // 9
  if (name === "Two Arm Standing Dumbbell Extension") {
    document.getElementById("exerciseDetails").innerText =
      "The standing dumbbell tricep extension is a variation of the tricep extension and an exercise used to isolate the muscles of the triceps.\nOverhead extension exercises are particularly useful in targeting the long head of the triceps muscle. Having a larger and more dense long head will give you an overall appearance of a larger tricep.\nIsolation exercises for the triceps are particularly useful for those looking to achieve aesthetics. They can also be helpful for those looking to increase their strength on other pressing motions.";

    document.getElementById("exerciseSteps").innerText =
      "1. Select the desired weight from the rack and stand in an open area.\n2. To get into position, lift the dumbbell to the top of your shoulder, take a deep breath, overlap your hands around the dumbbell, then press it into position overhead.\n3. Maintain an overlapped grip and slowly lower the dumbbell behind your head by unlocking your elbows.\n4. Once your forearms reach parallel or just below, drive the dumbbell back to the starting point by extending the elbows and flexing the triceps.\n5. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. Don’t overextend through the lumbar spine, keep your ribcage down by maintaining tension through the abs and glutes.\n2. Using a slow eccentric (lowering portion) of the exercise can help to improve tension and mind muscle connection.\n3. Keep the head in a fairly neutral position, don’t allow the neck to jut forward as this may place excessive pressure on the cervical spine.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/VjmgzEmODnI";
  }

  // 10
  if (name === "Reverse Grip Cable Tricep Extension") {
    document.getElementById("exerciseDetails").innerText =
      "The reverse grip tricep pushdown is a variation of the straight bar tricep pushdown and an exercise used to target the muscles of the triceps.\nTaking an underhand grip can minimize the involvement of the forearms and help place less stress on the elbows.";

    document.getElementById("exerciseSteps").innerText =
      "1. Attach a straight bar to a cable stack as high as possible and assume a standing position.\n2. Grasp the straight bar with a supinated grip (palms facing up) and lean forward slightly by hinging at the hips.\n3. Initiate the movement by extending the elbows and flexing the triceps.\n4. Pull the handle downward until the elbows are almost locked out and then slowly lower under control back to the starting position.\n5. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. If you want to keep more tension in the triceps, don’t lock the elbows out entirely.\n2. Imagine there’s a screw running through your elbow and don’t allow them to move in front of the body as you extend at the bottom of the movement.\n3. Experiment with static elbow positioning throughout the lift - some may find that they get a better stretch in the bottom portion of the movement by allowing their elbows to drift behind the body during the eccentric portion of the movement (similar to a drag curl).\n4. Ensure the shoulder blades don’t tilt forward as you extend the elbows.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/mNDpEivaal8";
  }

  // 11
  if (name === "High Pulley Overhead Tricep Extension (Rope Extension)") {
    document.getElementById("exerciseDetails").innerText =
      "The overhead rope tricep extension is a variation of the rope tricep extension and an exercise used to build the muscles of the triceps.\nOverhead tricep extension variations are especially good at targetting the long head of the triceps. The denser your long head muscle is, the overall larger the triceps appear.\nWell-built triceps also have a lot of positive carryover into your pressing movements such as bench press variations and shoulder press variations.\nThe overhead rope tricep extension can be included in your tricep workouts, upper body workouts, push workouts, and full body workouts.";

    document.getElementById("exerciseSteps").innerText =
      "1. Attach a rope to a cable stack as high as possible and assume a standing position.\n2. Utilize a split stance, grasp the rope overhead with a neutral grip (palms facing), and lean forward by hinging at the hips.\n3. Initiate the movement by extending the elbows and flexing the triceps.\n4. Pull the rope downward until the elbows are almost locked out and then slowly lower under control back to the starting position.\n5. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. If you want to keep more tension in the triceps, don’t lock the elbows out entirely.\n2. Don’t allow the rope to pull you backwards or cause you to overarch throughout your lumbar spine.\n3. You may need to tuck the chin slightly to allow the rope to travel overhead and not graze the back of your head.\n4. Ensure the shoulder blades don’t tilt forward as you extend the elbows.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/NRENeEgaIgA";
  }

  // 12
  if (name === "High Pulley Overhead Tricep Extension") {
    document.getElementById("exerciseDetails").innerText =
      "This exercise targets the long head of the triceps, promoting muscle growth and improving overall arm strength. Make sure to maintain proper form to avoid injury and maximize effectiveness.";

    document.getElementById("exerciseSteps").innerText =
      "1. Set up for the high pulley tricep extension by attaching a straight bar to a high pulley and selecting the weight you want to use on the stack.\n2. Facing away from the pulley, grab the bar behind your neck with an overhand grip at shoulder width apart.\n3. Bend over at the waist until your torso is almost parallel to the floor. This will lift the weight slightly from the stack.\n4. You can stagger your feet and bend slightly at the knees to help with balance.\n5. Your upper arms should be parallel to the floor at this point and you should be grabbing the bar behind your head. You are now in the starting position.\n6. Moving only at your elbow joints, slowly push the bar out in from of your body until your arms are fully extended.\n7. Pause, and then slowly bring the bar back to the starting position.\n8. Repeat this movement for desired reps.";

    document.getElementById("exerciseTips").innerText =
      "1. Focus on moving the weight with your triceps, keeping control of the weight as you slowly lower the weight stack back to the starting position.\n2. Keep your body as still as possible, moving only your forearms.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/ocq1d8HlDQ8";
  }

  // 13
  if (name === "Smith Machine Reverse Close Grip Bench Press") {
    document.getElementById("exerciseDetails").innerText =
      "1. Set up for the smith machine reverse close grip bench press by placing a flat bench in the smith machine, lowering the bar, and adding the weight you want to use to the bar.\n2. Lay back on the bench and grasp the bar with an underhand grip (palms facing your head) at around 6-12 inches apart.\n3. Take the weight off the rack by twisting the bar.\n4. Keeping your elbows tucked in at your sides, slowly lower the weight focusing on your triceps as the prime movers.\n5. Lower the weight until it almost touches your chest, and then slowly raise up, pushing the weight with your triceps.\n6. Do not lock your elbows out at the top of the exercise, and then repeat.";

    document.getElementById("exerciseSteps").innerText =
      "1. It's easy for the triceps to get complacent in the close grip bench press. It's important that you focus on slow rep timing and feel the triceps stretch and contract during the set.\n2. Keep your elbows tucked in at your sides. Don't let them flare as you raise the weight.\n3. And finally, you need to keep the tension on your triceps during the entire set so don't lock your elbows out at the top of the movement.";

    document.getElementById("exerciseTips").innerText =
      "Same detailed instruction already included above.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/cLuBjXG_0c0";
  }

  // 14
  if (name === "Single Bench Dip") {
    document.getElementById("exerciseDetails").innerText =
      "The Single Bench Dip is a bodyweight exercise that primarily targets the triceps, with secondary emphasis on the chest and shoulders. This movement effectively works the triceps by using your body weight as resistance, and the angle of the dip also engages the chest and shoulders. It requires minimal equipment—just a bench or stable surface—making it an accessible and effective exercise for strengthening the upper body.";

    document.getElementById("exerciseSteps").innerText =
      "1. To perform this exercise all you need is a flat bench and some space. Position your hands shoulder width apart on the flat bench.\n2. Move your feet out until your legs are straight.\n3. Straighten out your arms and keep a little bend in your elbows in order to always keep tension on your triceps and off of your elbow joints.\n4. Slowly lower your upper body down towards the floor with your elbows tucked in at your sides until your elbows are level with your shoulders.\n5. Pause, and then slowly press off with your hands and push yourself back up to the starting position with your triceps.\n6. Repeat for desired reps.";

    document.getElementById("exerciseTips").innerText =
      "1. It's important that you do not dip down too low. Your shoulders should go no lower than your elbows. Dipping lower than this places a lot of stress on your shoulder joints.\n2. Keep your elbows tucked in at your sides as your dip down.\n3. Squeeze the triceps at the top of the movement.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/larQGD02ndE";
  }

  // 15
  if (name === "Seated EZ Bar French Press") {
    document.getElementById("exerciseDetails").innerText =
      "The seated EZ bar French press is a variation of the French press and an exercise used to strengthen the muscles of the triceps.\nThe triceps can be trained in many different ways to promote growth and overhead extensions, such as the seated EZ bar french press, are an effective way to target the long head of the tricep.\nHaving bigger and stronger triceps are not only important from an aesthetic standpoint but can also help contribute to better performance on pressing motions such as the bench press.";

    document.getElementById("exerciseSteps").innerText =
      "1. Select your desired weight and sit on an upright bench.\n2. To get into position, reverse curl the bar to your chest and then press it straight overhead by locking out the triceps.\n3. Lower the weights towards your shoulders by unlocking the elbows and allowing the ez bar to drop behind your head.\n4. Once your forearms reach parallel or just below, reverse the movement by extending the elbows while flexing the triceps to lockout the weight.\n5. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. Don’t overextend through the lumbar spine as you lower the weight, keep some tension through the abdominals.\n2. Exhale as you extend the elbows and lockout the weight overhead.\n3. Keep the head in a fairly neutral position, focus on a spot on the floor and complete all of the assigned repetitions.\n4. If you experience elbow pain during the movement, consider implementing a slight angle (incline or decline) or adjust elbow position (in versus out).\n5. You may slightly reduce tension through the ligamentous portions of the triceps during the movement by keeping the bar just above your head and not locking out directly over your line of sight.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/9agrvvcUsNM";
  }

  //Shoulder Exercises ------------------------------------------------------------

  //1
  if (name === "Dumbbell Lateral Raise") {
    document.getElementById("exerciseDetails").innerText =
      'The dumbbell lateral raise is a shoulder exercise used to strengthen the muscles of the shoulder. It\'s a good exercise for building width in your upper body which gives you the "V" shape.';

    document.getElementById("exerciseSteps").innerText =
      "1. Select the desired weight from the rack, then take a few steps back into an open area.\n2. Take a deep breath and raise the dumbbells to shoulder height using a neutral grip (palms facing in) while keeping the elbows slightly bent.\n3. Slowly lower the dumbbells back to the starting position under control.\n4. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. Focus on keeping the reps slow and controlled. Because this is an isolation exercise, the focus should be on correctly working the muscle - not moving as much weight as possible.\n2. Don't bring your arms up too high - up to shoulder height is far enough.\n3. If you encounter pain in the shoulder while performing the movement, consider implementing one of the following tweaks:\nTilt your pinkies slightly higher than your thumbs. Imagine you’re pouring out a cup of water.\nTurn your palms forward so that your thumbs are pointing away from your body. This will put the shoulder in a more externally rotated position and potentially open up the shoulder joint to allow for a bit more movement.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/XPPfnSEATJA";
  }

  //2
  if (name === "Military Press (AKA Overhead Press)") {
    document.getElementById("exerciseDetails").innerText =
      "The military press is a complete shoulder building exercise perfect for building shoulder muscle. The military press is an exercise with many names and is often referred to as the shoulder press, overhead press, and strict press.\nThe military press is used primarily to build the deltoid muscle. It also indirectly targets the other muscles of the shoulder, your triceps, and your core. Since the military press is completed standing up, it involves a lot of core strength to help stabilize the spine while pressing weight overhead.\nThere are a number of variations to the military press you can use to target the deltoids from different angles and different ways.\nThese military press variations include:\nSeated Military Press,\nDumbbell Military Press,\nSeated Dumbbell Press,\nArnold Press,\nBehind The Neck Military Press,\nSmith Machine Military Press\nBe sure to add a variation of the military press to your shoulder workout to get the benefits from one of the most complete shoulder exercises out there.";

    document.getElementById("exerciseSteps").innerText =
      "1. Adjust the barbell to just below shoulder height then load the desired weight onto the bar.\n2. Assume a shoulder width stance and place your hands at (or just outside of) shoulder width with a pronated grip on the bar.\n3. Step underneath the bar and unrack it while keeping the spine in a neutral position.\n4. Take two steps back, inhale, brace, tuck the chin, then press the bar to lockout overhead.\n5. Exhale once the bar gets to lockout and reverse the movement slowly while controlling the bar back to your chest.\n6. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. Reach tall at the top and don’t worry about keeping the shoulders packed down and back.\n2. Allow the elbows to rotate and point outward at the top of the movement but tuck them tight to the ribcage at the bottom.\n3. Fight to control the bar from rolling your wrists into extension and think about “rolling your knuckles toward the ceiling.”\n4. Keep momentum out of the movement and don’t add any additional leg drive by flexing and extending the knees.\n5. Squeeze your glutes and brace your abs as you press. You shouldn’t be leaning back excessively as you press.\n6. Imagine you’re trying to look out a window at the top, your ears should be in line with your biceps.\n7. If your shoulders are bothering you during the movement, consider experimenting with a wider grip or utilizing some of the vertical pressing progressions listed on the site.\n8. You can use a staggered stance to prevent the lower back from arching excessively but if you still can’t control the anterior core then consider using a half kneeling regression shown on the site.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/j7ULT6dznNc";
  }

  //3
  if (name === "Bent Over Dumbbell Reverse Fly") {
    document.getElementById("exerciseDetails").innerText =
      "The bent over dumbbell reverse fly, also known as the bent over rear delt fly, is a great exercise to assist you in building a complete set of shoulders.\nMany lifters utilize the bent over dumbbell reverse fly to target the rear delts, an often lagging muscle for many lifters alike.\nStrengthening the rear delts by using the bent over rear delt fly can lead to improved posture and a greater level of strength on other lifts.";

    document.getElementById("exerciseSteps").innerText =
      "1. Select the desired weight from the rack then take a few steps back into an open area.\n2. Hinge from the hips until your body is almost parallel to the floor and allow the arms to hang straight down from the shoulders with a neutral grip.\n3. Take a deep breath and pull the dumbbells towards the ceiling using the rear deltoids.\n4. Slowly lower the dumbbells back to the starting position under control.\n5. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. Ideally we want to focus on the rear deltoids, not the scapular retractors so movement at the shoulder blade should be limited. Move the shoulder within the joint, not the shoulder blade on the ribcage.\n2. Keep the abs braced and don’t arch the back at the top of the movement.\n3. If you can’t hinge to 90 degrees, then hinge as far as comfortably possible while completing the exercise. Or, you could also take a seated position to complete the exercise as well.\n4. If you experience shoulder pain during the movement then it may be beneficial to rotate the dumbbells until the thumbs are pointing away from one another and the palms are facing forward. This is also known as a supinated grip and will externally rotate the shoulder.\n5. Don’t jut your head forward during the movement - this about stimulation for a small muscle group. Focus during the movement and don’t just rely on momentum.\n6. Allow the arms to move freely but don’t lock out the elbows.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/Fgz_FdzDukE";
  }

  //4
  if (name === "Seated Dumbbell Press") {
    document.getElementById("exerciseDetails").innerText =
      "The seated dumbbell press is a variation of the standing dumbbell press and an exercise used to strengthen the muscles of the shoulders.\nThe overhead press is a foundational movement for establishing baseline strength and building a completely balanced physique.\nUtilizing dumbbells as opposed to performing with a barbell will allow the individual to strengthen each side of the muscle equally.\nThe exercise can be included in shoulder workouts, push workouts, upper body workouts, and full body workouts.";

    document.getElementById("exerciseSteps").innerText =
      "1. Set up an adjustable angle bench to 90 degrees and select the desired weight from the rack.\n2. Pick up the dumbbells from the floor using a neutral grip (palms facing in). Position the end of the dumbbells on your knees and sit down on the bench.\n3. Using a safe and controlled motion, kick your knees up one at a time in order to get each dumbbell into place.\n4. Once the dumbbells are in place, rotate your palms so they are facing forward.\n5. Take a deep breath then press the dumbbells overhead by extending the elbows and contracting the deltoids.\n6. Slowly lower the dumbbells back to the starting position (the arms should be roughly 90 degrees or slightly lower depending upon limb lengths).\n7. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. Keep your back flat against the pad throughout the duration of the exercise.\n2. Don’t allow the head to jut forward excessively.\n3. Drive the bicep to the ear and exhale as you press.\n4. If you sense any pressure in your neck or traps during the movement, look to address a lack of thoracic spine extension or shoulder flexion.\n5. Keeping the elbows slightly bent at the top and not locking out entirely will help to keep tension on the shoulders.\n6. If you can’t lock out the elbows overhead than it may indicate a lack of shoulder mobility due to poor scapular upward rotation.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/FRxZ6wr5bpA";
  }

  //5
  if (name === "Standing Dumbbell Shoulder Press") {
    document.getElementById("exerciseDetails").innerText =
      "The standing dumbbell shoulder press is a variation of the seated dumbbell shoulder press and is used to strengthen the muscles of the shoulders.\nThe overhead press is a foundational movement for establishing baseline strength and building a completely balanced physique.\nUtilizing dumbbells as opposed to performing with a barbell will allow the individual to strengthen each side of the muscle equally.\nThe exercise can be included in shoulder workouts, push workouts, upper body workouts, and full body workouts.";

    document.getElementById("exerciseSteps").innerText =
      "1. Set up for the exercise by grabbing a pair of dumbbells and standing up with your feet around shoulder width apart.\n2. Raise the dumbbells to shoulder height on each side, and rotate your palms so they are facing forward. This is the starting position for the exercise.\n3. Take a deep breath then press the dumbbells overhead by extending the elbows and contracting the deltoids.\n4. Slowly lower the dumbbells back to the starting position (the arms should be roughly 90 degrees or slightly lower depending upon limb lengths).\n5. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. Don’t allow the head to jut forward excessively.\n2. Drive the bicep to the ear and exhale as you press.\n3. If you sense any pressure in your neck or traps during the movement, look to address a lack of thoracic spine extension or shoulder flexion.\n4. Keeping the elbows slightly bent at the top and not locking out entirely will help to keep tension on the shoulders.\n5. If you can’t lock out the elbows overhead then it may indicate a lack of shoulder mobility due to poor scapular upward rotation.\n6. If you need lower back support, try modifying the movement by doing a seated dumbbell press.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/OM23fjJB3-0";
  }

  //6
  if (name === "Smith Machine Shoulder Press") {
    document.getElementById("exerciseDetails").innerText =
      "The Smith machine shoulder press is a variation of the barbell shoulder press and is used to strengthen the muscles of the shoulders.\nUtilizing a Smith machine will ensure the bar path remains in a fixed position, eliminating some of the need to stabilize during the exercise. It's also a viable option for moving heavy weight without a spotter.\nThe overhead press is a foundational movement for establishing baseline strength and building a completely balanced physique.\nThe exercise can be included in shoulder workouts, push workouts, upper body workouts, and full body workouts.";

    document.getElementById("exerciseSteps").innerText =
      "1. Place an adjustable bench in the Smith machine and adjust the back to a 90-degree angle.\n2. Adjust the bar to around eye level and load the desired weight on the bar.\n3. Position your hands around shoulder-width apart and unrack the bar using a pronated grip. This is the starting position for the movement.\n4. Press the bar overhead by extending the elbows and contracting the deltoids.\n5. Slowly lower the bar back to the starting position (the arms should be roughly 90 degrees or slightly lower depending on limb lengths).\n6. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. Don’t allow the head to jut forward excessively.\n2. Drive the bicep to the ear and exhale as you press.\n3. If you sense any pressure in your neck or traps during the movement, look to address a lack of thoracic spine extension or shoulder flexion.\n4. If you can’t lock out the elbows overhead then it may indicate a lack of shoulder mobility due to poor scapular upward rotation.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/OLqZDUUD2b0";
  }

  //7
  if (name === "Seated Arnold Press") {
    document.getElementById("exerciseDetails").innerText =
      "The seated Arnold press is a variation of the seated dumbbell press and an exercise utilized to build shoulder muscle size and strength.\nThe Arnold press, named after Arnold Schwarzenegger himself, is an exercise used to target every single head of the deltoid.\nThe exercise is best used by those seeking aesthetic benefits due to its long time under tension, but can also be used as an accessory movement by those attempting to build strength.";

    document.getElementById("exerciseSteps").innerText =
      "1. Set up an adjustable angle bench to 90 degrees and select the desired weight from the rack.\n2. Pick up the dumbbells from the floor using a neutral grip (palms facing in). Position the end of the dumbbells on your knees and sit down on the bench.\n3. Using a safe and controlled motion, kick your knees up one at a time in order to get each dumbbell into place.\n4. Once the dumbbells are in place, rotate your palms so they are facing you.\n5. Take a deep breath then press the dumbbells overhead by extending the elbows and contracting the deltoids.\n6. As you press, rotate the dumbbells until your palms are facing forward.\n7. Slowly lower the dumbbells back to the starting position (the arms should be roughly 90 degrees or slightly lower depending upon limb lengths).\n8. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. Keep your back flat against the pad throughout the duration of the exercise.\n2. Don’t allow the head to jut forward excessively.\n3. Drive the bicep to the ear and exhale as you press.\n4. If you sense any pressure in your neck or traps during the movement, look to address a lack of thoracic spine extension or shoulder flexion.\n5. Keeping the elbows slightly bent at the top and not locking out entirely will help to keep tension on the shoulders.\n6. If you can’t lock out the elbows overhead than it may indicate a lack of shoulder mobility due to poor scapular upward rotation.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/hmnZKRpYaV8";
  }

  //8
  if (name === "Cable Face Pull") {
    document.getElementById("exerciseDetails").innerText =
      "The cable face pull is a great shoulder exercise that can be used to target the rear deltoids. Not many exercises can effectively target the rear delts like the cable face pull can.\nThe rear delt is often a lagging muscle group for many lifters and weak rear delts can result in poor posture, thus performing the cable face pull (or other rear delt exercises) is highly recommended.\nAdd the cable face pull exercise in your body part split on either shoulder or back day, on your upper day during your upper/lower splits, or on your pull day for push/pull/leg splits.";

    document.getElementById("exerciseSteps").innerText =
      "1. Assume a split stance with the arms straight out in front of you utilizing a pronated grip.\n2. Inhale and pull the rope towards your face with the elbows high.\n3. Slowly lower the rope back to the starting position and repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. If you find yourself leaning back or arching your back as you pull, utilize a half kneeling stance.\n2. As you pull, ensure the elbows stay high and the rope remains at eye level.\n3. Focus on contracting the rear delts and ensure you don’t jut the head forward to meet the rope.\n4. Ensure you set the cable at face height rather than at the top of the machine as this may over recruit the lats and negate some of the scapular upward rotation benefits.\n5. Don’t rely upon momentum, keep the motion smooth and controlled from start to finish.\n6. If no rope attachment is available, you can still complete the exercise using 2 regular handles or a band.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/7ZvpXA_mFpQ";
  }

  //9
  if (name === "Seated Barbell Shoulder Press") {
    document.getElementById("exerciseDetails").innerText =
      "The seated barbell shoulder press is a variation of the overhead press and an exercise used to build shoulder strength and muscle.\nVertical press variations, such as the seated barbell shoulder press, are crucial movement patterns to train and should be incorporated into your workout routines. So, experiment with the variations until you find one that feels comfortable for you to perform and continue to work on it.\nThe seated barbell shoulder press can be included in your shoulder workouts, push workouts, upper body workouts, and full body workouts.";

    document.getElementById("exerciseSteps").innerText =
      "1. Adjust the barbell to just below shoulder height while standing then load the desired weight onto the bar.\n2. Place an adjustable bench beneath the bar in an upright position.\n3. Sit down on the bench and unrack the bar using a pronated grip.\n4. Inhale, brace, tuck the chin, then lower the bar to the top of your chest.\n5. Exhale and press the bar back to lockout.\n6. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. Reach tall at the top and don’t worry about keeping the shoulders packed down and back.\n2. Allow the elbows to rotate and point outward at the top of the movement but tuck them tight to the ribcage at the bottom.\n3. Fight to control the bar from rolling your wrists into extension and think about “rolling your knuckles toward the ceiling.”\n4. Brace your abs as you press, you shouldn’t be leaning back excessively.\n5. Imagine you’re trying to look out a window at the top, your ears should be in line with your biceps.\n6. If your shoulders are bothering you during the movement, consider experimenting with a wider grip or utilizing some of the vertical pressing progressions listed on the site.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/Gxhx7GpRb5g";
  }

  //10
  if (name === "Standing Dumbbell Front Raise") {
    document.getElementById("exerciseDetails").innerText =
      "The dumbbell front raise is a shoulder exercise used to target the front deltoids.\nThe front deltoid is involved in several pressing movements and working to increase the strength of this muscle group can have a positive carry-over into your heavy pushing lifts.\nFrom an aesthetics standpoint, bigger front deltoids can lead to the appearance of a complete set of shoulders and a wider framed upper body.";

    document.getElementById("exerciseSteps").innerText =
      "1. Choose a pair of dumbbells with a pronated grip and assume a shoulder-width stance\n2. Inhale, brace your abs and raise your arms vertically while keeping a slight bend in your elbow.\n3. Once your arms are parallel with the floor, slowly lower the dumbbells back to the starting position.\n4. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. Practice good form by using a lighter weight.\n2. Don’t lean back as you raise your arms, keep the motion under control, and don’t rely on momentum.\n3. Try not to bounce at the top of the movement, allow the shoulders to flex and then lower slowly.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/xagEKj2yDc8";
  }

  //11
  if (name === "Standing Cable Reverse Fly") {
    document.getElementById("exerciseDetails").innerText =
      "The standing cable reverse fly is a variation of the reverse fly and an exercise used to strengthen the rear deltoids.\nThe rear deltoids are not only a lagging body part for many lifters, but they also play a key role in maintaining proper posture throughout the day. Having strong and active rear delts can lead to better posture and more shoulder stability during pressing and overhead movements.\nYou can include standing cable reverse flys in your shoulder workouts, back workouts, and full body workouts.";

    document.getElementById("exerciseSteps").innerText =
      "1. Position two cables at chest height and attach a handle.\n2. Reach across your body and grab one handle with a neutral grip. Repeat for the opposite arm.\n3. Position the arms straight ahead holding onto each handle and keep a soft bend in the knees.\n4. Keep the elbows slightly bent and pull the handles laterally without squeezing the shoulder blades together excessively.\n5. Slowly lower the handles back to the starting position under control.\n6. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. Ideally we want to focus on the rear deltoids, not the scapular retractors so movement at the shoulder blade should be limited. Move the shoulder within the joint, not the shoulder blade on the ribcage.\n2. Keep the abs braced and don’t arch the back at the top of the movement.\n3. Don’t jut your head forward during the movement - this is about stimulation for a small muscle group. Focus during the movement and don’t rely on momentum.\n4. Allow the arms to move freely but don’t lock out the elbows.\n5. If handle attachments aren’t available, you may be able to just grab the end of the cables as most have a built in stopping mechanism in the form of a plastic ball which is easily grippable.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/XG78cUVtKYY";
  }

  //12
  if (name === "Machine Shoulder Press") {
    document.getElementById("exerciseDetails").innerText =
      "The machine shoulder press is a variation of the seated barbell shoulder press used to strengthen the muscles of the shoulders.\nOne would use the machine shoulder press as a way to perform the pressing movement pattern with a focus on isolating the shoulders. One can better isolate certain muscle groups with a machine due to its fixed movement pattern.\nThe machine shoulder press is best added towards the end of your shoulder workout if you are training for hypertrophy, after you’ve used other more compound variations to work your push muscles.";

    document.getElementById("exerciseSteps").innerText =
      "1. Assume a seated position in the machine with the handles set at roughly shoulder height.\n2. Grab the handles with a pronated or neutral grip.\n3. Inhale and press directly overhead.\n4. Slowly lower the handles back to the starting position.\n5. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. Don’t allow the head to jut forward excessively.\n2. Drive the bicep to the ear and exhale as you press.\n3. If you sense any pressure in your neck or traps during the movement, look to address a lack of thoracic spine extension or shoulder flexion.\n4. Keeping the elbows slightly bent at the top and not locking out entirely will help to keep tension on the shoulders.\n5. If you can’t lock out the elbows overhead than it may indicate a lack of shoulder mobility due to poor scapular upward rotation.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/fj_VAk1jfZ8";
  }

  //13
  if (name === "Cable Lateral Raise") {
    document.getElementById("exerciseDetails").innerText =
      "The cable lateral raise is an effective shoulder exercise that targets the lateral deltoids, helping to build strength and width in the shoulders.\nThe cable lateral raise is a shoulder exercise performed using a cable machine. It primarily targets the lateral deltoids, which are responsible for shoulder abduction and contribute to the overall width of the upper body. This exercise is beneficial for improving shoulder strength, stability, and muscle definition.";

    document.getElementById("exerciseSteps").innerText =
      "1. Set the pulleys of a dual cable machine to the low setting and select the weight you wish to use.\n2. Stand facing away from the machine and grasp opposite handles with opposite hands.\n3. Stand straight up with your arms in front of you (crossed over). The weight should be slightly off the stack. This is the starting position for the movement.\n4. Keeping your elbows high, extend your arms out in a semi-circle motion.\n5. Once your hands get to around shoulder height, pause and slowly lower the weight back to the starting position.\n6. Repeat for desired reps.";

    document.getElementById("exerciseTips").innerText =
      "1. Because this is an isolation movement, form is more important than weight.\n2. Keep your elbows high throughout the movement.\n3. Don't flare your hands up as you move the weight as this will bring the front delts into the exercise.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/2OMbdPF7mz4";
  }

  //14
  if (name === "Seated Behind the Neck Shoulder Press") {
    document.getElementById("exerciseDetails").innerText =
      "The seated behind the neck barbell shoulder press is a variation of the overhead press and an exercise used to build shoulder strength and muscle.\nVertical press variations are crucial movement patterns to train and should be incorporated into your workout routines. So, experiment with the variations until you find one that feels comfortable for you to perform and continue to work on it.\nThat said, behind the neck press variations are often seen as a dated practice since they can put the shoulder in a compromised position, increasing the risk of injury.\nIf you do not have a fair amount of shoulder mobility, it is not recommended to perform this variation. And even if you do, depending on your reasoning behind the use of this exercise, there may be better variations available for you to use.";

    document.getElementById("exerciseSteps").innerText =
      "1. Adjust the barbell to just below shoulder height while standing then load the desired weight onto the bar.\n2. Place an adjustable bench beneath the bar in an upright position.\n3. Sit down on the bench and unrack the bar using a pronated grip.\n4. Inhale, brace, tuck the chin, then lower the bar to the back of your neck.\n5. Exhale and press the bar back to lockout.\n6. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. Reach tall at the top and don’t worry about keeping the shoulders packed down and back.\n2. Allow the elbows to rotate and point outward at the top of the movement but tuck them tight to the ribcage at the bottom.\n3. Fight to control the bar from rolling your wrists into extension and think about “rolling your knuckles toward the ceiling.”\n4. Brace your abs as you press, you shouldn’t be leaning back excessively.\n5. Imagine you’re trying to look out a window at the top, your ears should be in line with your biceps.\n6. If your shoulders are bothering you during the movement, consider experimenting with a wider grip or utilizing some of the vertical pressing progressions listed on the site.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/dCjtWWSxp98";
  }
  //15
  if (name === "Cable Upright Row") {
    document.getElementById("exerciseDetails").innerText =
      "The cable upright row is a variation of the upright row and an exercise used to build the muscles of the shoulders and traps.\nUtilizing the cable pulley machine is useful in that it provides constant tension on the target muscle group as you move the weight through the range of motion.\nSome people prefer to avoid the upright row as it can cause some degree of shoulder impingement and shoulder discomfort. Experiment for yourself to see if this is a movement that you should personally avoid.";

    document.getElementById("exerciseSteps").innerText =
      "1. Position a cable at the lowest position possible and attach a straight bar.\n2. Reach down and grab the handle with a pronated grip and stand up with the arms straight.\n3. Take a deep breath then pull the handle high directly up the front of your body by driving your elbows high.\n4. Slowly lower the handle back to the starting position under control.\n5. Repeat for the desired number of repetitions.";

    document.getElementById("exerciseTips").innerText =
      "1. If the straight bar version of this exercise bothers your wrists or shoulders, consider using a rope attachment as this can help to decrease excessive stress.\n2. Keep the elbows high but don’t allow the upper arm to go past parallel as this may increase the risk of impingement.\n3. If you experience pain in the shoulders during the movement than it may require a slight squeeze of the traps to elevate the shoulders and open up some of the subacromial space.\n4. Don’t allow your back to arch as you pull the cable up, don’t allow excess weight to dictate your body mechanics.\n5. Extra momentum used during the movement can potentially shift the load to other compensatory muscles so try to limit excessive movement if possible.\n6. As you drive the elbows high, ensure the head doesn’t jut forward.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/kZpdmn_djFI";
  }

  //16
  if (name === "Standing Arnold Press") {
    document.getElementById("exerciseDetails").innerText =
      "The standing Arnold press is a slightly more advanced variation of the seated Arnold press as it requires more core stability, and is an exercise utilized to build shoulder muscle size and strength.\nThe Arnold press, named after Arnold Schwarzenegger himself, is an exercise used to target every single head of the deltoid.\nThe exercise is best used by those seeking aesthetic benefits due to its long time under tension, but can also be used as an accessory movement by those attempting to build strength.";

    document.getElementById("exerciseSteps").innerText =
      "1. Set up for the exercise by grabbing a pair of dumbbells and standing up with your feet around shoulder width apart.\n2. Raise the dumbbells to shoulder height on each side, and twist so that your palms are facing your body.\n3. The dumbbells should now be positioned in front of your shoulders. Your back should be straight and there should be a slight bend in your knees. This is the starting position for the exercise.\n4. Slowly raise the dumbbells above your head while rotating your wrists so that your palms face forward.\n5. Keep raising the weight until your arms are almost fully extended.\n6. Do not pause at the top of the movement. Instead, begin lowering the dumbbells back down to the starting position - rotating at the wrist until your palms are facing your body once again.\n7. Repeat this movement for the desired amount of reps.";

    document.getElementById("exerciseTips").innerText =
      "1. Always use a full range of motion and control the dumbbells throughout the set.\n2. If you have lower back problems, it is best to perform this exercise seated, with a backrest.";

    document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/pQDrcNoDNVM";

    document.getElementById("exerciseModal").style.display = "block";
  }
}

function addToWorkout(name) {
  let workout = JSON.parse(localStorage.getItem("workout")) || [];

  if (!workout.includes(name)) {
    workout.push(name);
    localStorage.setItem("workout", JSON.stringify(workout));
    alert("Added to workout");
  }
}

function closeExercise() {
  document.getElementById("exerciseModal").style.display = "none";
}
