// Replace the following variables with your actual data
const apiKey = 'YOUR_API_KEY'; // Your API key
const city = 'kailua'; // The city you want weather information for

// API endpoint for fetching weather data
const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;

// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3.0) {
        const windChill = 35.74 + (0.6215 * temperature) - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return Math.round(windChill);
    } else {
        return 'Temperatures are warm and pleasant. No wind chill right now.';
    }
}

// Fetch weather data from the API
fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
        const cityName = data.name;
        const temperatureCelsius = data.main.temp;
        const windSpeed = data.wind.speed;

        // Calculate wind chill
        const windChill = calculateWindChill(temperatureCelsius, windSpeed);

        // Display weather data on the page
        const tempSpan = document.getElementById('temperature');
        const windSpan = document.getElementById('windspeed');
        const chillSpan = document.getElementById('windchill');
        const degreeSpan = document.getElementById('degree');

        // Display temperature in Celsius and Fahrenheit
        const temperatureFahrenheit = (temperatureCelsius * 9 / 5) + 32;
        tempSpan.innerText = `${temperatureCelsius}°C / ${temperatureFahrenheit}°F`;

        windSpan.innerText = `${windSpeed} m/s`; // Wind speed in meters per second
        chillSpan.innerText = windChill;

        // Display degree symbol
        degreeSpan.innerText = 'º';
    })
    .catch(error => console.error(error));
