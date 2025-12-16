function closeNavbar() {
    document.getElementById("navbar1").style.display = "none";
}

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => showSlide(slideIndex + 1));
document.querySelector('.prev').addEventListener('click', () => showSlide(slideIndex - 1));

function showSlide(index) {
    slideIndex = (index + totalSlides) % totalSlides;
    document.querySelector('.slides').style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Auto-slide every 5 seconds
setInterval(() => showSlide(slideIndex + 1), 5000);