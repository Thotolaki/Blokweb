
console.log("hi");


let currentIndex = 1;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.carousel figure').length;

    if (index > totalSlides) {
        currentIndex = 1;
    } else if (index < 1) {
        currentIndex = totalSlides;
    } else {
        currentIndex = index;
    }

    const translateValue = -(currentIndex - 1) * 100 + '%';
    carousel.style.transform = 'translateX(' + translateValue + ')';
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function currentSlide(index) {
    showSlide(index);
}


const buttonsProductGalleryOne = document.querySelectorAll('.product-gallery-1 button');
const buttonsProductGalleryTwo = document.querySelectorAll('.product-gallery-2 button');
const buttonsProductGalleryThree = document.querySelectorAll('.product-gallery-3 button');
const buttonsProductGalleryFour = document.querySelectorAll('.product-gallery-4 button');

const imageOne = document.querySelector('.image-1');
const imageTwo = document.querySelector('.image-2');
const imageThree = document.querySelector('.image-3');
const imageFour = document.querySelector('.image-4');

buttonsProductGalleryOne.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index === 0) {
            imageOne.src = 'images/silver.png';
        } else if (index === 1) {
            imageOne.src = 'images/blue.png';
        } else if (index === 2) {
            imageOne.src = 'images/white.png';
        } else if (index === 3) {
            imageOne.src = 'images/red.png';
        } else if (index === 4) {
            imageOne.src = 'images/blue.png';
        }
    });
});

buttonsProductGalleryTwo.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index === 0) {
            imageTwo.src = 'images/silver.png';
        } else if (index === 1) {
            imageTwo.src = 'images/blue.png';
        } else if (index === 2) {
            imageTwo.src = 'images/white.png';
        } else if (index === 3) {
            imageTwo.src = 'images/red.png';
        } else if (index === 4) {
            imageTwo.src = 'images/blue.png';
        }
    });
});

buttonsProductGalleryThree.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index === 0) {
            imageTwo.src = 'images/silver.png';
        } else if (index === 1) {
            imageThree.src = 'images/blue.png';
        } else if (index === 2) {
            imageThree.src = 'images/white.png';
        } else if (index === 3) {
            imageThree.src = 'images/red.png';
        } else if (index === 4) {
            imageThree.src = 'images/blue.png';
        }
    });
});

buttonsProductGalleryFour.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index === 0) {
            imageFour.src = 'images/silver.png';
        } else if (index === 1) {
            imageFour.src = 'images/blue.png';
        } else if (index === 2) {
            imageFour.src = 'images/white.png';
        } else if (index === 3) {
            imageFour.src = 'images/red.png';
        } else if (index === 4) {
            imageFour.src = 'images/blue.png';
        }
    });
});

