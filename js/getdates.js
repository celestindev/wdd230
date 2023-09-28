// Get the current year
const currentYear = new Date().getFullYear();

// Update the copyright year in the footer
document.getElementById("copyright-year").textContent = currentYear;

// Get the last modified date
const lastModifiedDate = document.lastModified;

// Update the last modified date in the second paragraph
document.getElementById("lastModified").textContent = `Last Modified: ${lastModifiedDate}`;
