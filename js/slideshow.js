var slideIndex = 1;
var widthBar = 1;
var intervals = []; /* Will be used to store the intervals in a global table and to be able to delete them */
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(x) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (x > slides.length) {
        slideIndex = 1
    }
    if (x < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

    // PROGRESS BAR
    progressBar();

}

function progressBar() {
    var elem = document.getElementById("divTime");
    widthBar = 1;
    
    intervals.forEach(clearInterval); // Clear all the intervalls which can exist, 
    // it was necessary because each time i started a new showSlides it created a new intvl and added a new setInterval and increased
    //  the number of time the frame function was called
    var intvl = setInterval(frame, 20);
    intervals.push(intvl);
    
    function frame() {
        var larg = (document.body.clientWidth);
        if (larg > 768) { /* Cause the function never stop otherwise, even if the size of the device is small */
            if (widthBar >= 100) {
                clearInterval(intvl);
                plusSlides(1)
                widthBar = 1;
            } else {
                widthBar = widthBar + 0.2;
                elem.style.width = widthBar + '%';
            }
        }
    }
}