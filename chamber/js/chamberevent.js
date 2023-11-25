const evenURL = 'https://chamberofcommerce.glitch.me/chambercommerce.json';
fetch(evenURL)
    .then(response => response.json())
    .then(jsonObject => {
        const eventsObj = jsonObject['chamber'];
        // Just fix that for Chamber of commerce events very important
        document.getElementById('event_one').textContent = eventsObj[0].events[0];
        document.getElementById('event_two').textContent = eventsObj[0].events[1];
        document.getElementById('event_three').textContent = eventsObj[0].events[2];
    })