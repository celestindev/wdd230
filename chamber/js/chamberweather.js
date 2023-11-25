const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=3719028&units=metric&appid=7ac96d32143254c1d79b1decba10b887`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.querySelector("#currentweather").textContent = jsObject.weather[0].description;
        const temperature = jsObject.main.temp.toFixed(0);
        document.querySelector("#temperature").textContent = temperature;
        document.querySelector("#humid").textContent = jsObject.main.humidity.toFixed(0);
    });

    //Weather API very important
    const cityID = '3719028'
    const key = '7ac96d32143254c1d79b1decba10b887'
    const units = 'metric'
    const cnt = 3
    const currentWeather = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${key}&units=${units}`
    const threeDay = `https://api.openweathermap.org/data2.5/forecast?id=${cityID}&appid=${key}&units=${units}`
    const imagesrc =`https://openweathermap.org/img/w/`

    // I just Make a request to current weather api really important
    fetch(currentWeather).then(response => response.json())
        .then(data => summary(data));
    // Now I just begin 5 day forecast function for very nice.
    function forecast(data) {
        const forecast_list = data.list
        const forecast_div = document.getElementById("forecast")
        forecast_list.forEach(day => {
            if (day.dt_txt.substring(11, ) == "18:00:00") {
                // For now fix date format important
                let dateWrong = day.dt_txt
                // Replace '-' with '/'
                let dateRight = dateWrong.replace(/-/g, "/")
                //Create article
                article = document.createElement("article")
                //  I Create header for fix my header
                header = document.createElement("header")
                // I jsut now Create heading very important
                heading = document.createElement("h3")
                heading.textContent = new Date(dateRight).toLocaleDateString('en-us', {
                    weekday: "short"
                })
                //For now I just Create div .forecast-content very important
                div = document.createElement("div")
                div.classList.add("forecast-content")
                // Now Create img for all images
                img = document.createElement("img")
                img.src = `${imagesrc}${day.weather[0].icon}.png`
                img.alt = "Forecast weather icon"
                // I just Create p for element 
                p = document.createElement("p")
                p.innerHTML = `${Math.round(day.main.temp_max)} &#8457;`
                // Now the Append img and p to div appear very important
                div.append(img, p)
                //Now for many reason the Append heading to header to fix heading
                header.append(heading)
                // Very important when you add the Append div and header to article very good
                article.append(header, div)
                //  I just live the Append article to #forecast waiting ofr forcast when I will use them
                forecast_div.append(article)
            }
        })
    }

    

