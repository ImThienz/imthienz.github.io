document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".story-slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentSlide = 0;

    // Hàm hiển thị slide theo chỉ số
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    // Xử lý khi nhấn nút Previous
    prevBtn.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    // Xử lý khi nhấn nút Next
    nextBtn.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    // Khởi tạo slide đầu tiên
    showSlide(currentSlide);
});
