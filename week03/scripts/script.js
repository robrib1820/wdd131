const lastModified = document.lastModified;

document.getElementById("lastModified").innerText = `© Robson Ribeiro - all rights reserved - Last time modified:${lastModified}`;



const temperature = 35; 
const windSpeed = 10; 
const conditions = "Partly Cloudy"; 

function calculateWindChill(temp, speed) {
    return (
        35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)
    ).toFixed(2) + " °F"; 
}


function updateWeather() {
    document.querySelector(".card2 p:nth-of-type(1)").innerHTML = `<strong>Temperature:</strong> ${temperature} °F`;
    document.querySelector(".card2 p:nth-of-type(3)").innerHTML = `<strong>Wind:</strong> ${windSpeed} mph`;


    const windChillText = (temperature <= 50 && windSpeed > 3) ? calculateWindChill(temperature, windSpeed) : "N/A";
    document.querySelector(".card2 p:nth-of-type(4)").innerHTML = `<strong>Wind Chill:</strong> ${windChillText}`;
}

window.onload = updateWeather;