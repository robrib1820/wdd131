const workouts = [
    {
      Workout: "Workout A",
      image:
        "https://www.puregym.com/media/wt0cjh0u/gym-workout-plan-for-gaining-muscle_header.jpg?quality=80",
      title: "Biceps and back workout",
      description: "Seated Row, pull up on bar, Incline dumbbell curl and EZ bar curls",
    },
    {
      Workout: "Workout B",
      image: 
        "https://cdn.pixabay.com/photo/2015/07/02/10/26/training-828760_1280.jpg",
      title: "Lower Body Training",
      description: "Back Squat, Leg Press, Leg curl.",
    },
    {
      Workout: "Workout C",
      image: 
        "https://www.puregym.com/media/wt0cjh0u/gym-workout-plan-for-gaining-muscle_header.jpg?quality=80",
      title: "Chest and shoulders",
      description: "Incline dumbbell press, Dumbbell flye, Flat dumbbell fly",
    },
  ];
  
function loadPage(index) {
  if (index == 0) {
    document.body.innerHTML = `
    <header>
    <h1>The Giant's Factory</h1>
    <a id="menu" href="#"></a>
    <nav class="navigation">
      <ul>
        <li><a href="index.html" id="home">Home</a></li>
        <li><a href="form.html" id="form">Forms</a></li>
      </ul>
    </nav>
    </header>  
    <h1>
        Biceps and back workout
    </h1>
    <h2>Seated Row</h2>
    <p>Lean your body forward a little and then lean back, flexing your back. Do 8 to 12 repetitions, respecting your body's rest</p>
    <img src="" alt="" loading="lazy">

    <h2>Pull up on bar</h2>
    <p>Pull the weight first by stretching the scapula and then pulling the weight focusing on the middle of the back.</p>
    <img src="" alt="" loading="lazy">

    <h2>EZ bar curls</h2>
    <p>Do this exercise on the W curl, bending all the way down without moving your back. Do 8 to 12 repetitions</p>
    <img src="" alt="" loading="lazy">  
  `;
  } else if (index == 1) {
    document.body.innerHTML = `
    <header>
    <h1>The Giant's Factory</h1>
    <a id="menu" href="#"></a>
    <nav class="navigation">
      <ul>
        <li><a href="index.html" id="home">Home</a></li>
        <li><a href="form.html" id="form">Forms</a></li>
      </ul>
    </nav>
    </header>
    <h1>
        Lower Body Workout
    </h1>
    <h2>Back Squat</h2>
    <p>You can do this exercise "free" or on the machine. You must be careful when squatting and returning. Never use excessive weight and check the safety lock on the machine.</p>
    <img src="" alt="" loading="lazy">

    <h2>Leg Press</h2>
    <p>Excellent exercise for the front and back of the leg. Do not use your hand to lift the weight with your foot and do 8 to 12 repetitions.</p>
    <img src="" alt="" loading="lazy">

    <h2>Leg Curl</h2>
    <p>Excellent and important exercise for developing the back of the legs. Lean your chest up and do 8 to 12 repetitions.</p>
    <img src="" alt="" loading="lazy">
    `
  } else {
    document.body.innerHTML = `
      <header>
    <h1>The Giant's Factory</h1>
    <a id="menu" href="#"></a>
    <nav class="navigation">
      <ul>
        <li><a href="index.html" id="home">Home</a></li>
        <li><a href="form.html" id="form">Forms</a></li>
      </ul>
    </nav>
    </header>
    <h1>
        Chest and shoulders workout
    </h1>
    <h2>Incline dumbbell press</h2>
    <p>Excellent exercise to start your chest workout. You need to keep the bench at the correct height of 30 to 45 degrees. You can take advantage and add weight in this first exercise.</p>
    <img src="" alt="" loading="lazy">

    <h2>Dumbbell flye</h2>
    <p>This exercise is great for the chest, but you shouldn't do it all the way to the top of the movement, as it will take away the tension and work no the best for the muscle</p>
    <img src="" alt="" loading="lazy">

    <h2>Dumbbell front raise</h2>
    <p>You can do this with dumbbells and when performing the upward movement, be careful not to move your back. Do 8 to 12 repetitions for each shoulder.</p>
    <img src="" alt="" loading="lazy">
    `
  }

};

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cardsContainer");

  container.innerHTML = workouts
    .map(
      (workout) => `
        <div class="card">
          <div class="badge">${workout.Workout}</div>
          <div class="tumb">
            <img width="100%" src="${workout.image}" alt="${workout.title}" loading="lazy"/>
          </div>
          <div class="details">
            <h4>${workout.title}</h4>
            <p>${workout.description}</p>
          </div>
        </div>
      `
    )
    .join("");
});
  