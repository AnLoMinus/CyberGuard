// Smooth scroll for buttons and nav items
document.querySelectorAll("[data-scroll], .nav-links a").forEach(el => {
    el.addEventListener("click", e => {
        const target = el.getAttribute("data-scroll") || el.getAttribute("href");
        if (target && target.startsWith("#")) {
            e.preventDefault();
            const section = document.querySelector(target);
            if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    });
});

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealEls.forEach(el => revealObserver.observe(el));

// Mini sparkle for shield hover
const shield = document.querySelector(".shield-orbit");
if (shield) {
    shield.addEventListener("mouseenter", () => {
        shield.style.filter = "drop-shadow(0 0 24px #00eaffaa)";
    });
    shield.addEventListener("mouseleave", () => {
        shield.style.filter = "none";
    });
}
