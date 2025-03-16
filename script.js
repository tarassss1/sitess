document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // учитываем возможный отступ сверху
                    behavior: "smooth"
                });
            }
        });
    });

    // Плавный скролл к footer при клике на кнопку "Хочу придбати курс"
    const courseButton = document.querySelector(".home-btn-link");

    if (courseButton) {
        courseButton.addEventListener("click", function (event) {
            event.preventDefault();

            const footerElement = document.getElementById("footer");

            if (footerElement) {
                window.scrollTo({
                    top: footerElement.offsetTop - 50, // учитываем возможный отступ сверху
                    behavior: "smooth"
                });
            }
        });
    }
});