function openExerciseChest(name){



  document.getElementById("exerciseModal").style.display = "flex";

  document.getElementById("exerciseTitle").innerText = name;




  const modal = document.getElementById("exerciseModal");
  if (!modal) {
    console.error("Modal not found!");
    return;
  }

modal.style.display = "flex";
  document.getElementById("exerciseTitle").innerText = name;
//Chest----------------------------------------
//1
  if(name === "Barbell Bench Press"){
      document.getElementById("exerciseDetails").innerText =
      "The barbell bench press is a classic exercise popular among all weight lifting circles. From bodybuilders to powerlifters, the bench press is a staple chest exercise in nearly every workout program.\nFor powerlifters, it is known as one of the “big three” lifts which includes the squat, deadlift, and bench press. For athletes, 1 rep max on bench press is a good indicator for on field/court performance. And for bodybuilders, the bench press is a compound exercise that targets many of the muscles in your upper body.\nBy performing the bench press, you primarily work your pectoralis major (your chest). Other muscles which assist in moving the barbell during a bench press are other muscles of the chest, triceps, and shoulders.\nNot everyone is built to perform the traditional barbell bench press, so several variations have been created to ensure people can train this crucial movement pattern in a safe and comfortable way.\nSome of these variations include:•	Incline bench press\n•	Decline bench press\n•	Dumbbell bench press\n•	Dumbbell incline bench press\n•	Dumbbell decline bench press\n•	Smith machine bench press\nThose with shoulder injuries can also utilize many of the alternative barbells out there that place less pressure on the shoulder to bench press. Some of these variations include hex bar bench press, football bar bench press, and Swiss bar bench press.";

      document.getElementById("exerciseSteps").innerText =
      "1.	Lie flat on a bench and set your hands just outside of shoulder width.\n2.	Set your shoulder blades by pinching them together and driving them into the bench.\n3.	Take a deep breath and allow your spotter to help you with the lift off in order to maintain tightness through your upper back.\n4.	Let the weight settle and ensure your upper back remains tight after lift off.\n5.	Inhale and allow the bar to descend slowly by unlocking the elbows.\n6.	Lower the bar in a straight line to the base of the sternum (breastbone) and touch the chest.\n7.	Push the bar back up in a straight line by pressing yourself into the bench, driving your feet into the floor for leg drive, and extending the elbows.";

      document.getElementById("exerciseTips").innerText =
      "1.	Technique first, weight second - no one cares how much you bench if you get injured.\n2.	Keep the bar in line with your wrist and elbows and ensure it travels in a straight line. In order to keep the wrist straight, try to position the bar as low in the palm as possible while still being able to wrap the thumb.\n3.	If you want to keep more tension through the triceps and chest, stop each repetition just short of lockout at the top.\n4.	Don’t worry about tucking the elbows excessively, much of this advice is from geared lifters using suits. A slight tuck on the way down may be advisable for some lifters but other lifters can use an excellent cue from Greg Nuckols that will accomplish the same thing: “Flare and push”.\n5.	Arching may be advisable depending upon your goals but ensure that most of the arch comes from the mid to upper back and not your lower back. If your lower back is cramping as you set up for the lift, you’re out of position and putting yourself at risk for potential injury.\n6.	The bar should touch your chest with every single repetition. If you want to overload specific ranges of motion, look into board presses or accommodating resistance with chains or bands.\n7.	As the bar descends, aim for your sternum (breastbone) or slightly below depending upon the length of your upper arm in order to promote a linear bar path.\n8.	Intermediate and advanced lifters may use a thumbless or “suicide” grip but for the majority of lifters, it would be wiser to learn how to bench with the thumb wrapped around the bar at first.\n9.	Fight to the urge to allow the wrists to roll back into extension, think about rolling your knuckles toward the ceiling.\n10.	Experiment with grip width - if your have longer arms you may need to use a slightly wider grip. However, if you’re feeling pressure in the front of the shoulder during the exercise, you may need to widen your grip, improve scapular retraction, or slightly lessen the range of motion via exercises such as floor or board presses.\n11.	Squeeze the bar as tightly as possible to help enhance shoulder stability.\n12.	Some lifters prefer to tuck their toes while other prefer to keep the feet flat in order to optimize leg drive - experiment with both and see which one feels and allows for greater power production.\n13.	Ensure the shoulder blades remain retracted and don’t allow them to change position as you press.\n14.	The bar should descend under control and touch the lifter’s chest - no bouncing or excess momentum.\n15.	Think about trying to push yourself away from the bar instead of pushing the bar off of you.\n16.	Tightness through the upper back should be one of your main priorities throughout the course of the lift.\n17.	Ideally, use a spotter to help assist with the lift off in order to maintain tension through the upper back.\n18.	Keep the feet quiet throughout the lift and utilize leg drive by pushing your feet into the floor and squeezing your glutes to stabilize the pelvis.\n19.	Focus on pulling the bar apart or trying to “bend the bar” in order to activate some of the intrinsic stabilizers in the shoulder.\n20.	The glutes and shoulder blades should maintain contact with the bench throughout the entirety of the movement.";

      document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/CayG6UYqL8g";
  }
//2
  if(name === "Incline Bench Press"){
      document.getElementById("exerciseDetails").innerText =
      "The incline bench press is a variation of the bench press and an exercise used to build the muscles of the chest. The shoulders and triceps will be indirectly involved as well.\nUtilizing an incline will allow you to better target the upper portion of the chest, a lagging part for a lot of lifters.\nYou can include incline bench press in your chest workouts, upper body workouts, push workouts, and full body workouts.";

      document.getElementById("exerciseSteps").innerText =
      "1.	Lie flat on an incline bench and set your hands just outside of shoulder width.\n2.	Set your shoulder blades by pinching them together and driving them into the bench.\n3.	Take a deep breath and allow your spotter to help you with the lift off in order to maintain tightness through your upper back.\n4.	Let the weight settle and ensure your upper back remains tight after lift off.\n5.	Inhale and allow the bar to descend slowly by unlocking the elbows.\n6.	Lower the bar in a straight line to the base of the sternum (breastbone) and touch the chest.\n7.	Push the bar back up in a straight line by pressing yourself into the bench, driving your feet into the floor for leg drive, and extending the elbows.";

      document.getElementById("exerciseTips").innerText =
      "1.	Technique first, weight second - no one cares how much you bench if you get injured.\n2.	Keep the bar in line with your wrist and elbows and ensure it travels in a straight line. In order to keep the wrist straight, try to position the bar as low in the palm as possible while still being able to wrap the thumb.\n3.	If you want to keep more tension through the triceps and chest, stop each repetition just short of lockout at the top.\n4.	Don’t worry about tucking the elbows excessively, much of this advice is from geared lifters using suits. A slight tuck on the way down may be advisable for some lifters but other lifters can use an excellent cue from Greg Nuckols that will accomplish the same thing: “Flare and push”.\n5.	Arching may be advisable depending upon your goals but ensure that most of the arch comes from the mid to upper back and not your lower back. If your lower back is cramping as you set up for the lift, you’re out of position and putting yourself at risk for potential injury.\n6.	The bar should touch your chest with every single repetition. If you want to overload specific ranges of motion, look into board presses or accommodating resistance with chains or bands.\n7.	As the bar descends, aim for your sternum (breastbone) or slightly below depending upon the length of your upper arm in order to promote a linear bar path.\n8.	Intermediate and advanced lifters may use a thumbless or “suicide” grip but for the majority of lifters, it would be wiser to learn how to bench with the thumb wrapped around the bar at first.\n9.	Fight the urge to allow the wrists to roll back into extension, think about rolling your knuckles toward the ceiling.\n10.	Experiment with grip width - if your have longer arms you may need to use a slightly wider grip. However, if you’re feeling pressure in the front of the shoulder during the exercise, you may need to widen your grip, improve scapular retraction, or slightly lessen the range of motion via exercises such as floor or board presses.\n11.	Squeeze the bar as tightly as possible to help enhance shoulder stability.\n12.	Ensure the shoulder blades remain retracted and don’t allow them to change position as you press.\n13.	The bar should descend under control and touch the lifter’s chest - no bouncing or excess momentum.\n14.	Think about trying to push yourself away from the bar instead of pushing the bar off of you.\n15.	Tightness through the upper back should be one of your main priorities throughout the course of the lift.\n16.	Ideally, use a spotter to help assist with the lift off in order to maintain tension through the upper back.\n17.	Keep the feet quiet throughout the lift and utilize leg drive by pushing your feet into the floor and squeezing your glutes to stabilize the pelvis.\n18.	Focus on pulling the bar apart or trying to “bend the bar” in order to activate some of the intrinsic stabilizers in the shoulder.\n19.	The glutes and shoulder blades should maintain contact with the bench throughout the entirety of the movement.";

      document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/uIzbJX5EVIY";
  }
//3
  if(name === "Decline Bench Press"){
      document.getElementById("exerciseDetails").innerText =
      "The decline bench press is a variation of the bench press and an exercise used to target the muscles of the chest. It will also indirectly target the muscles of the shoulders and triceps.\nThe decline bench press is commonly used to target the lower portion of the pecs. However, some argue that it is the most effective bench press variation for targeting the entire chest.\nBench press variations can be included in your chest workouts, push workouts, upper body workouts, and full body workouts.";

      document.getElementById("exerciseSteps").innerText =
      "1.	Lie flat on an decline bench, set your hands just outside of shoulder width, and hook your feet underneath the pad.\n2.	Set your shoulder blades by pinching them together and driving them into the bench.\n3.	Take a deep breath and allow your spotter to help you with the lift off in order to maintain tightness through your upper back.\n4.	Let the weight settle and ensure your upper back remains tight after lift off.\n5.	Inhale and allow the bar to descend slowly by unlocking the elbows.\n6.	Lower the bar in a straight line to just below your sternum (breastbone) and touch the chest.\n7.	Push the bar back up in a straight line by pressing yourself into the bench and extending the elbows.";

      document.getElementById("exerciseTips").innerText =
      "1.	Technique first, weight second - no one cares how much you bench if you get injured.\n2.	Keep the bar in line with your wrist and elbows and ensure it travels in a straight line. In order to keep the wrist straight, try to position the bar as low in the palm as possible while still being able to wrap the thumb.\n3.	If you want to keep more tension through the triceps and chest, stop each repetition just short of lockout at the top.\n4.	Don’t worry about tucking the elbows excessively, much of this advice is from geared lifters using suits. A slight tuck on the way down may be advisable for some lifters but other lifters can use an excellent cue from Greg Nuckols that will accomplish the same thing: “Flare and push”.\n5.	Arching may be advisable depending upon your goals but ensure that most of the arch comes from the mid to upper back and not your lower back. If your lower back is cramping as you set up for the lift, you’re out of position and putting yourself at risk for potential injury.\n6.	The bar should touch your chest with every single repetition. If you want to overload specific ranges of motion, look into board presses or accommodating resistance with chains or bands.\n7.	As the bar descends, aim for your sternum (breastbone) or slightly below depending upon the length of your upper arm in order to promote a linear bar path.\n8.	Intermediate and advanced lifters may use a thumbless or “suicide” grip but for the majority of lifters, it would be wiser to learn how to bench with the thumb wrapped around the bar at first.\n9.	Fight the urge to allow the wrists to roll back into extension, think about rolling your knuckles toward the ceiling.\n10.	Experiment with grip width - if your have longer arms you may need to use a slightly wider grip. However, if you’re feeling pressure in the front of the shoulder during the exercise, you may need to widen your grip, improve scapular retraction, or slightly lessen the range of motion via exercises such as floor or board presses.\n11.	Squeeze the bar as tightly as possible to help enhance shoulder stability.\n12.	Ensure the shoulder blades remain retracted and don’t allow them to change position as you press.\n13.	The bar should descend under control and touch the lifter’s chest - no bouncing or excess momentum.\n14.	Think about trying to push yourself away from the bar instead of pushing the bar off of you.\n15.	Tightness through the upper back should be one of your main priorities throughout the course of the lift.\n16.	Ideally, use a spotter to help assist with the lift off in order to maintain tension through the upper back.\n17.	Focus on pulling the bar apart or trying to “bend the bar” in order to activate some of the intrinsic stabilizers in the shoulder.\n18.	The glutes and shoulder blades should maintain contact with the bench throughout the entirety of the movement.";
      
      document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/oIgci8aNsG0";
  }
//4
    if(name === "Reverse Grip Bench Press"){
      document.getElementById("exerciseDetails").innerText =
      "The barbell reverse grip bench press is performed with a supinated grip (palms facing you) instead of the standard pronated grip (palms facing away). This grip change alters the angle of muscle recruitment, emphasizing the upper pectoralis major, triceps, and anterior deltoids more effectively than the traditional bench press.";

      document.getElementById("exerciseSteps").innerText =
      "1.	Set up for the reverse grip bench press by setting the height of the bench rack (if it's adjustable) and adding the weight plates you want to use.\n2.	Lay down on your back with your feet firmly planted on the floor. Grasp the bar with an underhand grip (palms facing your head) with your hands wider than shoulder width.\n3.	Take the bar off the rack. Slowly lower the bar straight down to the middle of your chest, but don't let the bar touch your chest.\n4.	Pause, then slowly raise the bar back up. Do not lock your elbows out or rest at the top and go straight back into your next rep.";

      document.getElementById("exerciseTips").innerText =
      "1.	The reverse grip bench press is a variation of the barbell bench press. Rep timing should be slow enough that you control the weight on the way down. Letting the weight drop really quickly is not productive because the muscles do not have to work as hard on the negative phase of the movement. This makes the exercise less effective.\n2.	Keep your feet firmly planted on the floor. Your feet provide the stabilization for the lift, if you hold them up or move them around you're more likely to lose balance.\n3.	Make sure you lower the bar straight down to your middle chest and push it straight up. Don't deviate from this range of motion.\n4.	Your glutes and shoulder blades should be touching the bench at all times throughout the set. It's OK to arch the back as long as the glutes and shoulder blades are fixed.\n5.	Never bounce the weight off of your chest."; 

      document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/R2iSNkuQ9wc";
  }
//5
    if(name === "Dumbbell Bench Press"){
      document.getElementById("exerciseDetails").innerText =
      "The dumbbell bench press is a variation of the barbell bench press and an exercise used to build the muscles of the chest.\nOften times, the dumbbell bench press is recommended after reaching a certain point of strength on the barbell bench press to avoid pec and shoulder injuries.\nAdditionally, the dumbbell bench press provides an ego check in the amount of weight used due to the need to maintain shoulder stability throughout the exercise.\nThe exercise itself can be featured as a main lift in your workouts or an accessory lift to the bench press depending on your goals.";

      document.getElementById("exerciseSteps").innerText =
      "1.	Pick up the dumbbells off the floor using a neutral grip (palms facing in). Position the ends of the dumbbells in your hip crease, and sit down on the bench.\n2.	To get into position, lay back and keep the weights close to your chest. Once you are in position, take a deep breath, and press the dumbbells to lockout at the top.\n3.	Slowly lower the dumbbells under control as far as comfortably possible (the handles should be about level with your chest).\n4.	Contract the chest and push the dumbbells back up to the starting position.";

      document.getElementById("exerciseTips").innerText =
      "1.	Maintain more tension through the pecs by not locking out the elbows entirely.\n2.	Keep the weights slightly tilted at a 45 degree angle in order to keep the elbows in a neutral position.\n3.	Don’t allow the dumbbells to collide at the top of each rep - bouncing them together may cause you to lose stability within the shoulder and injure yourself.\n4.	Squeeze the dumbbells as tight as possible to improve a phenomenon known as “irradiation” which promotes greater shoulder stability.\n5.	Keep your shoulder blades pinched together to ensure the shoulders remain in a safe position.\n6.	Imagine you’re trying to push yourself away from the weights rather than pushing the weights away from yourself.\n7.	If you’re feeling pain within the shoulder joint itself (specifically at the front), ensure your shoulder blades are slightly retracted and try to keep the shoulder girdle “packed”.\n8.	Ensure you maintain some tension in your abs and don’t allow your lower back to arch excessively.\n9.	Keep your feet flat on the floor and don’t allow the lower body to move during the set.";
      
      document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/dGqI0Z5ul4k";
  }
//6
    if(name === "Decline Dumbbell Bench Press"){
      document.getElementById("exerciseDetails").innerText =
      "The decline dumbbell bench press is a variation of the decline bench press. By using dumbbells during a decline bench press, you allow yourself for a greater range of motion during the exercise. Using dumbbells also requires a great deal of shoulder stability, thus it recruits more muscle fibers to stabilize the body than its barbell counterpart.\nThe decline dumbbell bench press is a chest exercise that also indirectly targets the shoulders, triceps, and core. The decline angle used during a decline dumbbell bench press is useful for those attempting to build the lower part of their chest.";

      document.getElementById("exerciseSteps").innerText =
      "1.	Pick up the dumbbells off the floor using a neutral grip (palms facing in). Position the ends of the dumbbells in your hip crease, and sit down on the edge of an decline bench.\n2.	To get into position, lay back and keep the weights close to your chest. Once you are in position, take a deep breath, and press the dumbbells to lockout at the top.\n3.	Slowly lower the dumbbells under control as far as comfortably possible (the handles should be about level with your chest).\n4.	Contract the chest and push the dumbbells back up to the starting position.";

      document.getElementById("exerciseTips").innerText =
      "1.	Maintain more tension through the pecs by not locking out the elbows entirely.\n2.	Keep the weights slightly tilted at a 45 degree angle in order to keep the elbows in a neutral position.\n3.	Don’t allow the dumbbells to collide at the top of each rep - bouncing them together may cause you to lose stability within the shoulder and injure yourself.\n4.	Squeeze the dumbbells as tight as possible to improve a phenomenon known as “irradiation” which promotes greater shoulder stability.\n5.	Keep your shoulder blades pinched together to ensure the shoulders remain in a safe position.\n6.	Imagine you’re trying to push yourself away from the weights rather than pushing the weights away from yourself.\n7.	If you’re feeling pain within the shoulder joint itself (specifically at the front), ensure your shoulder blades are slightly retracted and try to keep the shoulder girdle “packed”.\n8.	Ensure you maintain some tension in your abs and don’t allow your lower back to excessive arch.\n9.	Keep your feet flat on the floor and don’t allow the lower body to move during the set.";
      
      document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/5pDbtYmX5fM";
    }
//7
    if(name === "Incline Dumbbell Bench Press"){
      document.getElementById("exerciseDetails").innerText =
      "The incline dumbbell bench press is a variation of the incline bench press and an exercise used to build the muscles of the chest. The shoulders and triceps will be indirectly involved as well.\nUtilizing an incline will allow you to better target the upper portion of the chest, a lagging part for a lot of lifters.\nThe use of dumbbells will also promote balanced and equal strength among both sides of the chest. They can also help prevent shoulder and pec injuries when performing presses.\nYou can include incline dumbbell bench press in your chest workouts, upper body workouts, push workouts, and full body workouts.";

      document.getElementById("exerciseSteps").innerText =
      "1.	Pick up the dumbbells off the floor using a neutral grip (palms facing in). Position the ends of the dumbbells in your hip crease, and sit down on the edge of an incline bench.\n2.	To get into position, lay back and keep the weights close to your chest. Once you are in position, take a deep breath, and press the dumbbells to lockout at the top.\n3.	Slowly lower the dumbbells under control as far as comfortably possible (the handles should be about level with your chest).\n4.	Contract the chest and push the dumbbells back up to the starting position.";

      document.getElementById("exerciseTips").innerText =
      "1.	Maintain more tension through the pecs by not locking out the elbows entirely.\n2.	Keep the weights slightly tilted at a 45 degree angle in order to keep the elbows in a neutral position.\n3.	Don’t allow the dumbbells to collide at the top of each rep - bouncing them together may cause you to lose stability within the shoulder and injure yourself.\n4.	Squeeze the dumbbells as tight as possible to improve a phenomenon known as “irradiation” which promotes greater shoulder stability.\n5.	Keep your shoulder blades pinched together to ensure the shoulders remain in a safe position.\n6.	Imagine you’re trying to push yourself away from the weights rather than pushing the weights away from yourself.\n7.	If you’re feeling pain within the shoulder joint itself (specifically at the front), ensure your shoulder blades are slightly retracted and try to keep the shoulder girdle “packed”.\n8.	Ensure you maintain some tension in your abs and don’t allow your lower back to excessive arch.\n9.	Keep your feet flat on the floor and don’t allow the lower body to move during the set.";
      
      document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/8nNi8jbbUPE";
    }
  //8  
    if(name === "Close Grip Dumbbell Press"){
      document.getElementById("exerciseDetails").innerText =
      "The dumbbell crush press is a variation of the dumbbell bench press and an exercise used to build the muscles of the chest and triceps.\nThe crush press is particularly effective in activating the chest as you’ll squeeze the pecs while pressing the dumbbells together.\nAdditionally, the crush press incorporates the triceps more so than other bench press variations.\nThis exercise is useful for bodybuilders trying to establish mind-muscle connection with their chest, as well as other lifters looking to build stronger triceps to assist them in other press variations.";

      document.getElementById("exerciseSteps").innerText =
      "1.	Pick up the dumbbells off the floor using a neutral grip (palms facing in). Position the ends of the dumbbells in your hip crease, and sit down on the bench.\n2.	To get into position, lay back and keep the weights close to your chest. Once you are in position, take a deep breath, crush the dumbbells together, then press them to lockout at the top.\n3.	Continue to push the dumbbells together while lowering them under control as far as comfortably possible.\n4.	Once the dumbbells touch your chest, push them back to the starting position.";

      document.getElementById("exerciseTips").innerText =
      "1.	Maintain more tension through the pecs by not locking out the elbows entirely.\n2.	Squeeze the dumbbells as tight as possible to improve a phenomenon known as “irradiation” which promotes greater shoulder stability.\n3.	Keep your shoulder blades pinched together to ensure the shoulders remain in a safe position.\n4.	Think of the movement as a fly combined with a press. Press together while pressing horizontally.\n5.	If you’re feeling pain within the shoulder joint itself (specifically at the front), ensure your shoulder blades are slightly retracted and try to keep the shoulder girdle “packed”.\n6.	Ensure you maintain some tension in your abs and don’t allow your lower back to excessive arch.\n7.	Keep your feet flat on the floor and don’t allow the lower body to move during the set.";
     
      document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/XZ3XSwmk1Os";
    }
//9
    if(name === "Alternating Dumbbell Bench Press"){
      document.getElementById("exerciseDetails").innerText =
      "The alternate dumbbell bench press exercise is a chest exercise that also challenges the stabilization muscles of the core and shoulders.\nBy keeping one weight elevated during the alternate dumbbell bench press, you keep constant tension on the shoulder and pec. By alternating each rep, you also force your core to stabilize your body on the bench to complete each rep.\nBe sure to start with the weaker side of your chest when performing alternate dumbbell bench press. This exercise is a great way to challenge yourself if you are used to perform dumbbell bench press only.";

      document.getElementById("exerciseSteps").innerText =
      "1.	Pick up the dumbbells off the floor using a neutral grip (palms facing in). Position the ends of the dumbbells in your hip crease, and sit down on the bench.\n2.	To get into position, lay back and keep the weights close to your chest. Once you are in position, take a deep breath, and press the dumbbells to lockout at the top.\n3.	Slowly lower one dumbbell under control as far as comfortably possible (the handle should be about level with your chest) while keeping the other locked out at the top.\n4.	Contract the chest and push the dumbbell back up to the starting position.\n5.	Slowly lower the other dumbbell under control as far as comfortably possible (the handle should be about level with your chest) while keeping the other locked out at the top.";

      document.getElementById("exerciseTips").innerText =
      "1.	Maintain more tension through the pecs by not locking out the elbows entirely.\n2.	Keep the weights slightly tilted at a 45 degree angle in order to keep the elbows in a neutral position.\n3.	Don’t allow the dumbbells to collide at the top of each rep - bouncing them together may cause you to lose stability within the shoulder and injure yourself.\n4.	Squeeze the dumbbells as tight as possible to improve a phenomenon known as “irradiation” which promotes greater shoulder stability.\n5.	Keep your shoulder blades pinched together to ensure the shoulders remain in a safe position.\n6.	Imagine you’re trying to push yourself away from the weights rather than pushing the weights away from yourself.\n7.	If you’re feeling pain within the shoulder joint itself (specifically at the front), ensure your shoulder blades are slightly retracted and try to keep the shoulder girdle “packed”.\n8.	Ensure you maintain some tension in your abs and don’t allow your lower back to excessively arch.\n9.	Keep your feet flat on the floor and don’t allow the lower body to move during the set.";
      
      document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/LL561B2xQu0";
    }
//10
    if(name === "Alternating Dumbbell Fly"){
      document.getElementById("exerciseDetails").innerText =
      "The Alternating Dumbbell Fly is an effective exercise for targeting the chest muscles, particularly the pectorals. It is an isolation exercise that uses push force, making it suitable for strength training. The exercise also engages stabilizing muscles in the shoulders and core, contributing to overall chest development.\nThis exercise is beneficial for developing muscle symmetry and strength while reducing strain on the shoulders compared to traditional fly variations. It is particularly useful for hypertrophy-focused chest/shoulder days or as a finisher to burn out the upper pecs without needing a machine setup.";

      document.getElementById("exerciseSteps").innerText =
      "1.	Grab a set of dumbbells and sit on the end of a flat bench with the dumbbells resting on your thighs.\n2.	Lay back on the bench and extend your arms out, holding the dumbbells with a neutral grip (palms facing each other). The dumbbells should not be touching. Keep your feet planted on the floor for balance.\n3.	Bend your arms slightly. This is the starting position for the exercise.\n4.	Slowly lower the dumbbell in the left hand out to your side in a semicircle. Rotate at the shoulders only, keeping your arm slightly bent.\n5.	Once the dumbbell gets about level with your chest, squeeze the chest muscles and raise the dumbbell back up using the same path of motion (semicircle) as you did on the way down. Don't let the dumbbells touch.\n6.	Repeat the movement with your right arm. ";

      document.getElementById("exerciseTips").innerText =
      "1.	Start with your weakest side first. For most people this is their left side.\n2.	Always use slow and controlled movements. The key to this exercise is stretch and contraction - not moving heavy weights. Save that for the big compound movements!";
      
      document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/eA82vrlhbgA";
    }
//11
    if(name === "Dumbbell Flys"){
      document.getElementById("exerciseDetails").innerText =
      "The dumbbell fly utilizes a chest fly movement pattern to isolate the muscles fo the chest to better help the muscles grow and become stronger.\nThe dumbbell fly is often thought of as a classic bodybuilding movement as the goal of the exercise is to isolate the chest for aesthetic purposes. The movement itself can be used to help build a stronger bench press but isn’t typically thought of from an increased performance stand-point.\nThus, this movement is best reserved for traditional chest workouts in bodybuilding style splits."; 

      document.getElementById("exerciseSteps").innerText =
      "1.	Pick up the dumbbells off the floor using a neutral grip (palms facing in). Position the ends of the dumbbells in your hip crease, and sit down on the bench.\n2.	To get into position, lay back and keep the weights close to your chest. Once you are in position, take a deep breath, then press the dumbbells to lockout at the top.\n3.	Slightly retract your shoulder blades, unlock your elbows, and slowly lower the dumbbells laterally while maintaining the angle at your elbow.\n4.	Once the dumbbells reach chest level, reverse the movement by squeezing your pecs together and bringing the dumbbells back to their starting position.\n5.	Without allowing the dumbbells to touch, start the next repetition, and continue until the set is completed.";

      document.getElementById("exerciseTips").innerText =
      "1.	Imagine you’re trying to hug a tree while completing the exercise.\n2.	Don’t squeeze the dumbbell handles excessively tight as this can over recruit the forearms and biceps thereby reducing activation of the pecs.\n3.	Avoid touching or banging the dumbbells together at the top of each repetition in order to keep constant tension on the intended muscle groups.\n4.	Always keep a slight bend in the elbows and never lower the weight to the point where you get any sort of pain and pressure at the front of the shoulder joint.\n5.	If you’re feeling pain within the shoulder joint itself (specifically at the front), ensure your shoulder blades are slightly retracted and try to keep the shoulder girdle “packed”.\n6.	Keep your feet flat on the floor, focus solely on keeping your elbows bent and activating your pecs.\n7.	Ensure you maintain some tension in your abs and don’t allow your lower back to excessive arch.";
      
      document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/-lcbvOddoi8";
    }
//12
    if(name === "Incline Dumbbell Fly"){
      document.getElementById("exerciseDetails").innerText =
      "The incline dumbbell fly is a variation of the dumbbell fly and an exercise used to isolate the muscles of the chest.\nIsolation exercises, such as the incline dumbbell fly, are primarily used by lifters with aesthetic based goals. They can be used by lifters with strength based goals, however, the exercise itself will have limited carry over into increasing maximum strength.\nThe incline angle used during the incline dumbbell fly provides a unique challenge to the exercise and also emphasizes the upper chest.\nThis exercise is best used on upper hypertrophy days and/or chest workouts in more traditional bodybuilding splits.";

      document.getElementById("exerciseSteps").innerText =
      "1.	Pick up the dumbbells off the floor using a neutral grip (palms facing in). Position the ends of the dumbbells in your hip crease, and sit down on an incline bench.\n2.	To get into position, lay back and keep the weights close to your chest. Once you are in position, take a deep breath, then press the dumbbells to lockout at the top.\n3.	Slightly retract your shoulder blades, unlock your elbows, and slowly lower the dumbbells laterally while maintaining the angle at your elbow.\n4.	Once the dumbbells reach chest level, reverse the movement by squeezing your pecs together and bringing the dumbbells back to their starting position.\n5.	Without allowing the dumbbells to touch, start the next repetition, and continue until the set is completed.";

      document.getElementById("exerciseTips").innerText =
      "1.	Use a slight incline such as 30 degrees. Extremes are never the best option.\n2.	Imagine you’re trying to hug a tree while you complete the exercise.\n3.	Don’t squeeze the dumbbell handles excessively tight as this can over recruit the forearms and biceps thereby reducing activation of the pecs.\n4.	Avoid touching or banging the dumbbells together at the top of each repetition in order to keep constant tension on the intended muscle groups.\n5.	Always keep a slight bend in the elbows and never lower the weight to the point where you get any sort of pain and pressure at the front of the shoulder joint.\n6.	If you’re feeling pain within the shoulder joint itself (specifically at the front), ensure your shoulder blades are slightly retracted and try to keep the shoulder girdle “packed”.\n7.	Keep your feet flat on the floor, focus solely on keeping your elbows bent and activating your pecs.\n8.	Ensure you maintain some tension in your abs and don’t allow your lower back to excessive arch.";
      
      document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/beazxb8q-SA";
    }
//13
    if(name === "Decline Dumbbell Fly"){
      document.getElementById("exerciseDetails").innerText =
      "The decline dumbbell chest fly is a variation of the dumbbell fly used to target the muscles of the chest.\nIn particular, the decline dumbbell chest fly targets the lower chest due to the decline angle used.";

      document.getElementById("exerciseSteps").innerText =
      "1.	Pick up the dumbbells off the floor using a neutral grip (palms facing in). Position the ends of the dumbbells in your hip crease, and sit down on an decline bench.\n2.	To get into position, lay back and keep the weights close to your chest. Once you are in position, take a deep breath, then press the dumbbells to lockout at the top.\n3.	Slightly retract your shoulder blades, unlock your elbows, and slowly lower the dumbbells laterally while maintaining the angle at your elbow.\n4.	Once the dumbbells reach chest level, reverse the movement by squeezing your pecs together and bringing the dumbbells back to their starting position.\n5.	Without allowing the dumbbells to touch, start the next repetition, and continue until the set is completed.";

      document.getElementById("exerciseTips").innerText =
      "1.	Use a slight decline such as 30 degrees. Extremes are never the best option.\n2.	Imagine you’re trying to hug a tree while you complete the exercise.\n3.	Don’t squeeze the dumbbell handles excessively tight as this can over recruit the forearms and biceps thereby reducing activation of the pecs.\n4.	Avoid touching or banging the dumbbells together at the top of each repetition to keep constant tension on the intended muscle groups.\n5.	Always keep a slight bend in the elbows and never lower the weight to the point where you get any sort of pain and pressure at the front of the shoulder joint.\n6.	If you’re feeling pain within the shoulder joint itself (specifically at the front), ensure your shoulder blades are slightly retracted and try to keep the shoulder girdle “packed”.\n7.	Keep your feet flat on the floor, focus solely on keeping your elbows bent and activating your pecs.\n8.	Ensure you maintain some tension in your abs and don’t allow your lower back to excessive arch.";
      
      document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/4ahnfPhKoFo";
    }
//14
    if(name === "Cable Chest Press"){
      document.getElementById("exerciseDetails").innerText =
      "The cable chest press is a variation of the bench press and an exercise used to strengthen the pushing muscles of the body including the chest, triceps, and shoulders.\nThe cable chest press can be tough to overload as it requires a great deal of core stability, so it is probably best used as an accessory movement for those looking to increase their chest muscle mass.\nThis movement can be included into your chest workouts, push workouts, upper body workouts, or full body workouts.";

      document.getElementById("exerciseSteps").innerText =
      "1.	Set both pulleys slightly above shoulder height and select the desired weight.\n2.	Grasp both handles with a slightly pronated grip and take a step forward to split the stance.\n3.	Press the handles slightly down to lockout while flexing the pecs and extending the elbows.\n4.	Slowly lower back to the starting position and repeat for the desired number of repetitions.";

      document.getElementById("exerciseTips").innerText =
      "1.	Maintain more tension through the pecs by not locking out the elbows entirely.\n2.	Don’t allow the handles to collide at the top of each rep.\n3.	If you’re feeling pain within the shoulder joint itself (specifically at the front), ensure your shoulder blades are slightly retracted and try to keep the shoulder girdle “packed”.\n4.	Ensure you maintain some tension in your abs and don’t allow your lower back to arch excessively.";      
      
      document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/n4CEULDvATA";
    }
//15
    if(name === "Standing Cable Fly"){
      document.getElementById("exerciseDetails").innerText =
      "The standing cable fly is a variation of the chest fly and an exercise used to strengthen the pushing muscles of the body including the chest, triceps, and shoulders.\nThe standing cable fly can be tough to overload as it requires a great deal of core stability, so it is probably best used as an accessory movement for those looking to increase their chest muscle mass.\nThis movement can be included into your chest workouts, push workouts, upper body workouts, or full body workouts.";

      document.getElementById("exerciseSteps").innerText =
      "1.	Set both pulleys directly at (or slightly above) shoulder height and select the desired weight.\n2.	Grasp both handles with a neutral grip and take a step forward to split the stance.\n3.	Press the handles to lockout while flexing the pecs and extending the elbows.\n4.	Keep a slight bend in the elbows, move entirely at the shoulder joint, and slowly allow the arms to open while the pecs stretch.\n5.	Return to the starting position by flexing your pecs and bringing the handles together at chest height.\n6.	Slowly lower back to the starting position and repeat for the desired number of repetitions.";

      document.getElementById("exerciseTips").innerText =
      "1.	Imagine you’re trying to hug a tree while completing the exercise.\n2.	Don’t squeeze the handles excessively tight as this can over recruit the forearms and biceps thereby reducing activation of the pecs.\n3.	Avoid touching or banging the handles together at peak contraction to keep constant tension on the intended muscle groups.\n4.	Always keep a slight bend in the elbows and never lower the weight to the point where you get any sort of pain and pressure at the front of the shoulder joint.\n5.	Ensure you maintain some tension in your abs and don’t allow your lower back to arch excessively.";
      
      document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/OPYrUGZL8nU";
    }
//16
    if(name === "Standing High to Low Cable Fly"){
      document.getElementById("exerciseDetails").innerText =
      "The standing high to low cable fly is a variation of the chest fly and an exercise used to strengthen the pushing muscles of the body including the chest, triceps, and shoulders.\nThe standing high to low cable fly can be tough to overload as it requires a great deal of core stability, so it is probably best used as an accessory movement for those looking to increase their chest muscle mass.\nThis movement can be included into your chest workouts, push workouts, upper body workouts, or full body workouts.";

      document.getElementById("exerciseSteps").innerText =
      "1.	Set both pulleys as high as possible and select the desired weight.\n2.	Grasp both handles with a neutral grip and take a step forward to split the stance.\n3.	Press the handles to lockout while flexing the pecs and extending the elbows.\n4.	Keep a slight bend in the elbows, move entirely at the shoulder joint, and slowly allow the arms to open while the pecs stretch.\n5.	Return to the starting position by flexing your pecs and bringing the handles together at bellybutton height.\n6.	Slowly lower back to the starting position and repeat for the desired number of repetitions.";

      document.getElementById("exerciseTips").innerText =
      "1.	Imagine you’re trying to hug a tree while completing the exercise.\n2.	Don’t squeeze the handles excessively tight as this can over recruit the forearms and biceps thereby reducing activation of the pecs.\n3.	Avoid touching or banging the handles together at peak contraction to keep constant tension on the intended muscle groups.\n4.	Always keep a slight bend in the elbows and never lower the weight to the point where you get any sort of pain and pressure at the front of the shoulder joint.\n5.	Ensure you maintain some tension in your abs and don’t allow your lower back to arch excessively.";
      
      document.getElementById("exerciseVideo").src =
      "https://www.youtube.com/embed/JHqmhZ12rr0";
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


function closeExercise(){
  document.getElementById("exerciseModal").style.display = "none";
}