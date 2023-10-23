// uses getElementById to pull last modified date and time
document.querySelector("#lastupdated").textContent = `Last Updated: ${document.lastModified}`;

// places current year into id year
document.querySelector("#copyrightyear").textContent = new Date().getFullYear();



