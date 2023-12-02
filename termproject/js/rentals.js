// I begin my code JSON here very important
const directoryURL = '';
fetch(directoryURL)
document.addEventListener('DOMContentLoaded', function () {
    // Here I try to put the Fetch data from the JSON file to see if its work
    fetch('./data/rentals.json')
      .then(response => response.json())
      .then(data => displayRentals(data.rentals))
      .catch(error => console.error('Error fetching data:', error));
  
    // This is the part who Display rentals in the table very important to know
    function displayRentals(rentals) {
      const tableBody = document.querySelector('#rentalsTable tbody');
  
      rentals.forEach(rental => {
        const row = tableBody.insertRow();
        const nameCell = row.insertCell(0);
        const imageCell = row.insertCell(1);
        const descriptionCell = row.insertCell(2);
        const priceCell = row.insertCell(3);
  
        nameCell.textContent = rental.name;
        imageCell.innerHTML = `<img src="${rental.image}" alt="${rental.name}">`;
        descriptionCell.textContent = rental.description;
        priceCell.textContent = rental.price;
      });
    }
  });
  