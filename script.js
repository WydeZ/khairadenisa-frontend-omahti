
// PORTFOLIO
const showMoreBtn = document.getElementById("showMoreBtn");
const portfolioGrid = document.querySelector(".portfolio-grid");

showMoreBtn.addEventListener("click", function () {
    portfolioGrid.classList.toggle("expanded");
    showMoreBtn.classList.toggle("expanded");

    const isExpanded = portfolioGrid.classList.contains("expanded");

    showMoreBtn.querySelector("span").textContent =
        isExpanded ? "Show Less" : "Show More";
});


console.log("Hello world!")


// TESTIMONIAL

const testimonialGrid = document.querySelector(".testimonial-grid");
const prevBtn = document.querySelector(".testimonial-arrow.prev");
const nextBtn = document.querySelector(".testimonial-arrow.next");

function scrollTestimonials(direction) {
    if (!testimonialGrid) return;

    const card = testimonialGrid.querySelector(".testimonial-card");

    if (!card) return;

    const gap = parseFloat(getComputedStyle(testimonialGrid).gap) || 0;
    const scrollAmount = card.getBoundingClientRect().width + gap;

    testimonialGrid.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}

if (prevBtn && nextBtn && testimonialGrid) {
    prevBtn.addEventListener("click", function () {
        scrollTestimonials(-1);
    });

    nextBtn.addEventListener("click", function () {
        scrollTestimonials(1);
    });
}



// FAQ

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function () {
        const isActive = item.classList.contains("active");

        faqItems.forEach(function (faq) {
            faq.classList.remove("active");
            faq.querySelector(".faq-question")
                .setAttribute("aria-expanded", "false");
        });

        if (!isActive) {
            item.classList.add("active");
            question.setAttribute("aria-expanded", "true");
        }
    });
});
