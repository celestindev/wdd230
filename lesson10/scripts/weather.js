// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

 const url = `https://api.openweathermap.org/data/2.5/weather?lat=60.67&lon=17.14&units=imperial&appid=beab6b04d285d807b6891255753de2e6`;

 const requestURL = 'https://raw.githubusercontent.com/celestindev/wdd230/main/lesson10/scripts/weather.js';
 
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        // displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();


  function displayResults(data) {
    currentTemp.innerHTML = `${data._____}&deg;F`;
    const iconsrc = `https://api.openweathermap.org/data/2.5/weather?lat=60.67&lon=17.14&units=imperial&appid=beab6b04d285d807b6891255753de2e6`;
    let desc = data.weather[0].______;
    weatherIcon.setAttribute('___', _____);
    weatherIcon.setAttribute('___', _____);
    captionDesc.textContent = `${desc}`;
  }
