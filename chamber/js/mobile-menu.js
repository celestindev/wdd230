// Get references to the elements
const hamicon = document.querySelector('.ham-button');
const navigation = document.querySelector('nav');

// Add an event listener to the hamburger icon to open or close the navigation
hamicon.addEventListener('click', () => {
    // Toggle the "open" class on the hamburger icon
    hamicon.classList.toggle('open');

    // Toggle the "open" class on the navigation element
    navigation.classList.toggle('open');
});
