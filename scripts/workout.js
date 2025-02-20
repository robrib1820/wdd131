document.addEventListener("DOMContentLoaded", function () {
    const workouts = ["A - Biceps and back workout", "B - Lower Body Training", "C - Chest and shoulders",];
    const workoutSelect = document.getElementById("workout-type");
    
    workouts.forEach(workout => {
        const option = document.createElement("option");
        option.value = workout;
        option.textContent = workout;
        workoutSelect.appendChild(option);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
    document.getElementById("reviewCount").textContent = `Total feedback submitted: ${reviewCount}`;
});