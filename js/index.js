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
    var images = [
        './image3/slide1.jpg',
        './image3/slide2.jpg'
    ];

    var currentIndex = 0;
    var slideshowImg = document.getElementById('slideshow');

    function updateImage(index) {
        slideshowImg.classList.add('hidden');
        setTimeout(function() {
            slideshowImg.src = images[index];
            slideshowImg.classList.remove('hidden');
        }, 500);
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage(currentIndex);
    }

    function showPreviousImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage(currentIndex);
    }

    var leftArrow = document.querySelector('.left-arrow');
    var rightArrow = document.querySelector('.right-arrow');

    leftArrow.addEventListener('click', showPreviousImage);
    rightArrow.addEventListener('click', showNextImage);

    // Start the slideshow function every 4 seconds
    setInterval(showNextImage, 4000);
});
