// Now I just begin The chamber commerce footer very important for me
const currentdate = document.getElementById("chambercommercecurrentdate");
currentdate.textContent = new Date().getFullYear();

const options = { 
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

document.querySelector("#chambercommercecopyrightyear").textContent = new Date().getFullYear();
document.getElementById("chambercommercecurrentdate").textContent = new Date().toLocaleDateString("en-UK", options);