// selecteer de id van de button 
// addEventlistener toevoegen
// function maken 
// if en else 


// de afbeeldingen 

// camera
document.addEventListener("DOMContentLoaded", function () {
    const cameraButton = document.getElementById("camera");
    const photo1 = document.querySelector('.foto-waterfall');
    let isClicked = true;

    let show = function () {
        if (isClicked) {
            photo1.style.display = 'block';
        } else {
            photo1.style.display = 'none';
        }
        isClicked = !isClicked; 
    };

    cameraButton.addEventListener("click", show);
});

// code
document.addEventListener("DOMContentLoaded", function () {
    const codeButton = document.getElementById("code");
    const photo2 = document.querySelector('.foto-js');
    let isClicked = true;

    let show = function () {
        if (isClicked) {
            photo2.style.display = 'block';
        } else {
            photo2.style.display = 'none';
        }
        isClicked = !isClicked; 
    };

    codeButton.addEventListener("click", show);
});

// boek
document.addEventListener("DOMContentLoaded", function () {
    const bookButton = document.getElementById("reading");
    const photo3 = document.querySelector('.foto-books');
    let isClicked = true;

    let show = function () {
        if (isClicked) {
            photo3.style.display = 'block';
        } else {
            photo3.style.display = 'none';
        }
        isClicked = !isClicked; 
    };

    bookButton.addEventListener("click", show);
});

// muziek
document.addEventListener("DOMContentLoaded", function () {
    const muziekButton = document.getElementById("listening");
    const photo4 = document.querySelector('.foto-youtube');
    let isClicked = true;

    let show = function () {
        if (isClicked) {
            photo4.style.display = 'block';
        } else {
            photo4.style.display = 'none';
        }
        isClicked = !isClicked; 
    };

    muziekButton.addEventListener("click", show);
});

// movie
document.addEventListener("DOMContentLoaded", function () {
    const movieButton = document.getElementById("film");
    const photo5 = document.querySelector('.foto-alita');
    let isClicked = true;

    let show = function () {
        if (isClicked) {
            photo5.style.display = 'block';
        } else {
            photo5.style.display = 'none';
        }
        isClicked = !isClicked; 
    };

    movieButton.addEventListener("click", show);
});