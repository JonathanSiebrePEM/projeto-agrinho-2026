const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(
    ".card,.stat-card,.about-grid,.sustain-grid,.testimonial,.gallery-grid img"
).forEach(el => {

    el.classList.add("animate");
    observer.observe(el);

});

document.querySelector("form").addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
        "Mensagem enviada com sucesso! Em breve entraremos em contato."
    );

});