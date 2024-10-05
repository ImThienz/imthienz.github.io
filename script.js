let currentSlide = 0;
const slides = document.querySelectorAll('.story-slide');

// Ẩn tất cả các slide trừ slide đầu tiên
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Điều hướng slide tiếp theo
document.getElementById('nextBtn').addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// Điều hướng slide trước đó
document.getElementById('prevBtn').addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Khởi tạo với slide đầu tiên
showSlide(currentSlide);
