// Get the current date very important 
const currentDate = new Date();

// Extract individual components (year, month, day, etc.) if needed to see them
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-indexed, so we add 1 to get the correct month (January is 0, February is 1, and so on)
const day = currentDate.getDate();

// Display the date in a specific format (e.g., YYYY-MM-DD) yes all we need
const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;


document.querySelector("#year").textContent = year;

document.querySelector(".month").textContent = month;
document.querySelector(".day").textContent = day;
document.querySelector("#currentyear").textContent = year;

