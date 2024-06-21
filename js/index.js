document.addEventListener('DOMContentLoaded', (event) => {
    // Get the modal window
    var modal = document.getElementById("feedback-modal");

    // Get the button that opens the modal window
    var btn = document.querySelector(".feedback");

    // Get the <span> element that closes the modal window
    var span = document.getElementsByClassName("close-btn")[0];

    // Open a modal window with a fade effect when the button is clicked
    btn.onclick = function() {
        modal.style.display = "flex";
        modal.querySelector('.modal-content').classList.add('fade-in');
    }

    // Close the modal window when <span> is clicked
    span.onclick = function() {
        modal.style.display = "none";
        modal.querySelector('.modal-content').classList.remove('fade-in');
    }
    
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const requiredFields = form.querySelectorAll('[required]');

    requiredFields.forEach(field => {
        field.addEventListener('blur', function() {
            if (field.value.trim() === '') {
                field.classList.add('required-field-empty');
            } else {
                field.classList.remove('required-field-empty');
            }
        });

        // Add an event handler for text input
        field.addEventListener('input', function() {
            if (field.value.trim() !== '') {
                field.classList.remove('required-field-empty');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const requiredFields = form.querySelectorAll('[required]');

    form.addEventListener('submit', function(event) {
        let formIsValid = true;

        requiredFields.forEach(field => {
            if (!field.validity.valid) {
                field.classList.add('required-field-empty');
                formIsValid = false;
            } else {
                field.classList.remove('required-field-empty');
            }
        });

        if (!formIsValid) {
            event.preventDefault(); // Stop submitting the form if it's not valid
        }
    });

    requiredFields.forEach(field => {
        field.addEventListener('blur', function() {
            if (!field.validity.valid) {
                field.classList.add('required-field-empty');
            } else {
                field.classList.remove('required-field-empty');
            }
        });

        // Add an event handler for text input
        field.addEventListener('input', function() {
            if (field.validity.valid) {
                field.classList.remove('required-field-empty');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.slideshow img');
    var totalImages = images.length;
    var currentIndex = 1; // Start from the real first slide
    var slideshow = document.querySelector('.slideshow');
    var isAnimating = false;

    // Initial positioning
    slideshow.style.transform = `translateX(-1280px)`;

    function updateImage(index) {
        if (isAnimating) return;
        isAnimating = true;
        slideshow.style.transition = 'transform 0.5s ease';
        slideshow.style.transform = `translateX(${-1280 * index}px)`;

        setTimeout(function() {
            if (index === totalImages - 1) {
                slideshow.style.transition = 'none';
                slideshow.style.transform = `translateX(-1280px)`;
                currentIndex = 1;
            } else if (index === 0) {
                slideshow.style.transition = 'none';
                slideshow.style.transform = `translateX(${-1280 * (totalImages - 2)}px)`;
                currentIndex = totalImages - 2;
            } else {
                currentIndex = index;
            }
            isAnimating = false;
        }, 500);
    }

    function showNextImage() {
        updateImage(currentIndex + 1);
    }

    function showPreviousImage() {
        updateImage(currentIndex - 1);
    }

    var leftArrow = document.querySelector('.left-arrow');
    var rightArrow = document.querySelector('.right-arrow');

    leftArrow.addEventListener('click', showPreviousImage);
    rightArrow.addEventListener('click', showNextImage);

    setInterval(showNextImage, 4000);
});
