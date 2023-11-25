// Working on to get dates and print the last altered data to the footer really good

let date = new Date();
let year = date.getFullYear();

let modDateLabel = document.getElementById('last-mod');
let lastMod = document.lastModified;
modDateLabel.innerHTML = lastMod;

// For now I jsut work to get the date right now in ms this is very important

const theDateToday = new Date();
const currDateInMs = Date.now();
let lastVisit = 0;
let msSinceVisit = 0;

// Once again calculate ms since last visit really important

if (localStorage.getItem('lastVisitDate') == null) {
    msSinceVisit = 0;
}
else {
    lastVisit = JSON.parse(localStorage.getItem('lastVisitDate')); msSinceVisit = currDateInMs - lastVisit;
}

//For the present, I simply show one of three potential messages in light of how frequently they have visited really important

let visitsDisplay = document.querySelector('#visits-display')

if (msSinceVisit < 600) {
    visitsDisplay.textContent = 'Welcome! Let us know if you have any questions.';
}
else if (msSinceVisit < (24 * 3600000)) {
    visitsDisplay.textContent = 'Back so soon! Awesome!';
}
else {
    // Yes now calculate days since last visit in uour website
    let daysSince = Math.round(msSinceVisit / 60 / 60 / 24);
    if (daysSince < 2) {
        visitsDisplay.textContent = `You last visited 1 day ago.`;
    }
    else {
        visitsDisplay.textContent = `You last visited ${daysSince} days ago.`;
    }
}

// Yeah Right now begin toset the local storage 'last visit' to current date very important

localStorage.setItem('lastVisitDate', JSON.stringify(currDateInMs));