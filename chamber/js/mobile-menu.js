// Now I Get somes references to the elements very important
const hamicon = document.querySelector('.ham-button');
const navigation = document.querySelector('nav');

// I Add an occasion audience to the hamburger symbol to open or close the route important
hamicon.addEventListener('click', () => {
    // This is the Toggle the "open" class on the hamburger icon very important
    hamicon.classList.toggle('open');

    // Yes another Toggle the "open" class on the navigation element very good
    navigation.classList.toggle('open');
});
