//Supplant the accompanying factors with your real information
const apiKey = 'YOUR_API_KEY'; // Your API key
const city = 'kailua'; // Yes this is the city you want weather information for

//I just begin API endpoint for fetching weather data very important
const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;

// I just begin my Function to calculate wind chill very good
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3.0) {
        const windChill = 35.74 + (0.6215 * temperature) - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return Math.round(windChill);
    } else {
        return 'Temperatures are warm and pleasant. No wind chill right now.';
    }
}

// Now I begin the Fetch weather data from the API very important
fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
        const cityName = data.name;
        const temperatureCelsius = data.main.temp;
        const windSpeed = data.wind.speed;

        // For now I will Calculate wind chill really important
        const windChill = calculateWindChill(temperatureCelsius, windSpeed);

        // I just begin Display weather data on the page very important
        const tempSpan = document.getElementById('temperature');
        const windSpan = document.getElementById('windspeed');
        const chillSpan = document.getElementById('windchill');
        const degreeSpan = document.getElementById('degree');

        // Now just Beging my Display temperature in Celsius and Fahrenheit god job
        const temperatureFahrenheit = (temperatureCelsius * 9 / 5) + 32;
        tempSpan.innerText = `${temperatureCelsius}°C / ${temperatureFahrenheit}°F`;

        windSpan.innerText = `${windSpeed} m/s`; //  I add Wind speed in meters per second important
        chillSpan.innerText = windChill;

        // I just begin my Display degree symbol good for me
    })
    .catch(error => console.error(error));
