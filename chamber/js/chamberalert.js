// I will put or Get all elements with class="closebtn" very important
var close = document.getElementsByClassName("closebtn");
var i;

// When you look at the Loop throgh all close buttons this is good to see
for (i = 0; i < close.length; i++) {
    // Here I just put something cause when someone clicks on a close button very important
    close[i].onclick = function(){

        // Here put a div to Get the parent of <span class="closebtn"> (<div class="alert">) that appear nice 
        var div = this.parentElement;

        //  I just add something to Set the opacity of div to 0 (transparent) cause transparent very important
        div.style.opacity = "0";

        // Here when I add that I Stow away the div after 600ms (similar measure of milliseconds it takes to become dim)
        setTimeout(function(){ div.style.display = "none";}, 600);
    }
}