// ============================================
// ADVANCED ANIMATIONS FOR ANIMATED PORTFOLIO
// ============================================

// Make sure GSAP is loaded: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
// Also add ScrollTrigger: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

gsap.registerPlugin(ScrollTrigger);

// ============================================
// 1. ANIMATED HERO TITLE WITH LETTER ANIMATION
// ============================================
function animateHeroTitle() {
    const titleText = document.querySelector(".animate-title");
    if (!titleText) return;

    // Split text into characters
    const chars = titleText.textContent.split("");
    titleText.innerHTML = chars
        .map((char) => `<span class="char">${char}</span>`)
        .join("");

    // Animate each character
    gsap.from(".char", {
        duration: 0.8,
        opacity: 0,
        y: 40,
        ease: "back.out",
        stagger: 0.05,
    });
}

// ============================================
// 2. FLOATING ANIMATION FOR SUBTITLE
// ============================================
function animateSubtitle() {
    const subtitle = document.querySelector(".animate-subtitle");
    if (!subtitle) return;

    gsap.to(subtitle, {
        duration: 3,
        y: -10,
        opacity: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
    });
}

// ============================================
// 3. BUTTON PULSE & GLOW EFFECT
// ============================================
function animateCtaButton() {
    const button = document.querySelector(".cta-button");
    if (!button) return;

    // Pulse animation
    gsap.to(button, {
        duration: 2,
        boxShadow: "0 0 20px rgba(52, 152, 219, 0.8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
    });

    // Hover animations
    button.addEventListener("mouseenter", () => {
        gsap.to(button, {
            duration: 0.3,
            scale: 1.1,
            boxShadow: "0 10px 30px rgba(52, 152, 219, 1)",
            ease: "power2.out",
        });
    });

    button.addEventListener("mouseleave", () => {
        gsap.to(button, {
            duration: 0.3,
            scale: 1,
            ease: "power2.out",
        });
    });
}

// ============================================
// 4. SCROLL-TRIGGERED SECTION ANIMATIONS
// ============================================
function setupScrollTriggerAnimations() {
    // About section fade-in with blur
    gsap.from(".about", {
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        duration: 1,
        opacity: 0,
        filter: "blur(10px)",
        ease: "power2.out",
    });

    // About heading scale animation
    gsap.from(".about h2", {
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        duration: 0.8,
        scale: 0.8,
        opacity: 0,
        ease: "back.out",
    });

    // Skills stagger animation
    gsap.from(".skill", {
        scrollTrigger: {
            trigger: ".skills",
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        duration: 0.7,
        opacity: 0,
        scale: 0.8,
        ease: "back.out",
        stagger: 0.1,
    });

    // Projects section animation
    gsap.from(".projects", {
        scrollTrigger: {
            trigger: ".projects",
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        duration: 1,
        opacity: 0,
        filter: "blur(10px)",
        ease: "power2.out",
    });

    // Projects heading animation
    gsap.from(".projects h2", {
        scrollTrigger: {
            trigger: ".projects",
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        duration: 0.8,
        x: -50,
        opacity: 0,
        ease: "power2.out",
    });
}

// ============================================
// 5. PROJECT CARDS WITH ADVANCED HOVER EFFECTS
// ============================================
function setupProjectCardAnimations() {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card, index) => {
        // Initial scroll-in animation
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
            duration: 0.8,
            opacity: 0,
            y: 50,
            ease: "back.out",
            delay: index * 0.1,
        });

        // Hover animations
        card.addEventListener("mouseenter", () => {
            // Lift card up
            gsap.to(card, {
                duration: 0.4,
                y: -15,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                ease: "power2.out",
            });

            // Image zoom
            gsap.to(card.querySelector("img"), {
                duration: 0.4,
                scale: 1.1,
                ease: "power2.out",
            });

            // Text fade in
            gsap.to(card.querySelector("p"), {
                duration: 0.4,
                opacity: 0.9,
                color: "#3498db",
                ease: "power2.out",
            });
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(card, {
                duration: 0.4,
                y: 0,
                ease: "power2.out",
            });

            gsap.to(card.querySelector("img"), {
                duration: 0.4,
                scale: 1,
                ease: "power2.out",
            });

            gsap.to(card.querySelector("p"), {
                duration: 0.4,
                opacity: 1,
                color: "#666",
                ease: "power2.out",
            });
        });
    });
}

// ============================================
// 6. CONTACT SECTION WITH STAGGERED BUTTONS
// ============================================
function setupContactAnimations() {
    gsap.from(".contact", {
        scrollTrigger: {
            trigger: ".contact",
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        duration: 1,
        opacity: 0,
        filter: "blur(10px)",
        ease: "power2.out",
    });

    gsap.from(".contact h2", {
        scrollTrigger: {
            trigger: ".contact",
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        duration: 0.8,
        scale: 0.8,
        opacity: 0,
        ease: "back.out",
    });

    gsap.from(".contact-btn", {
        scrollTrigger: {
            trigger: ".contact-links",
            start: "top 85%",
            toggleActions: "play none none reverse",
        },
        duration: 0.6,
        opacity: 0,
        scale: 0.5,
        ease: "back.out",
        stagger: 0.15,
    });

    // Button click animation
    const contactBtns = document.querySelectorAll(".contact-btn");
    contactBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            gsap.to(btn, {
                duration: 0.3,
                scale: 0.95,
                ease: "power2.out",
                onComplete: () => {
                    gsap.to(btn, {
                        duration: 0.3,
                        scale: 1,
                        ease: "power2.out",
                    });
                },
            });
        });
    });
}

// ============================================
// 7. PARALLAX EFFECT ON SCROLL
// ============================================
function setupParallaxEffect() {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    gsap.to(hero, {
        scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 1, // Smooth scrubbing
            markers: false,
        },
        y: 100,
        ease: "none",
    });
}

// ============================================
// 8. NAVBAR ANIMATION ON SCROLL
// ============================================
function setupNavbarAnimation() {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    let lastScrollY = 0;

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        if (scrollY > 100) {
            gsap.to(navbar, {
                duration: 0.4,
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)",
                ease: "power2.out",
            });

            // Hide navbar on scroll down, show on scroll up
            if (scrollY > lastScrollY) {
                gsap.to(navbar, {
                    duration: 0.3,
                    y: -80,
                    ease: "power2.in",
                });
            } else {
                gsap.to(navbar, {
                    duration: 0.3,
                    y: 0,
                    ease: "power2.out",
                });
            }
        } else {
            gsap.to(navbar, {
                duration: 0.4,
                backgroundColor: "#fff",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                y: 0,
                ease: "power2.out",
            });
        }

        lastScrollY = scrollY;
    });
}

// ============================================
// 9. ANIMATED COUNTER (for stats)
// ============================================
function animateCounter(element, target, duration = 2) {
    gsap.to(element, {
        duration: duration,
        textContent: target,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
    });
}

// ============================================
// 10. MORPHING SHAPES/BACKGROUND ANIMATION
// ============================================
function createBackgroundAnimation() {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    // Create animated SVG background (optional)
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 1200 600");
    svg.setAttribute("class", "background-svg");
    svg.style.position = "absolute";
    svg.style.top = "0";
    svg.style.left = "0";
    svg.style.width = "100%";
    svg.style.height = "100%";
    svg.style.zIndex = "0";
    svg.style.opacity = "0.2";

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "600");
    circle.setAttribute("cy", "300");
    circle.setAttribute("r", "100");
    circle.setAttribute("fill", "rgba(255, 255, 255, 0.3)");
    svg.appendChild(circle);

    hero.style.position = "relative";
    hero.insertBefore(svg, hero.firstChild);

    // Animate circle
    gsap.to(circle, {
        duration: 4,
        attr: { r: 150 },
        opacity: 0,
        repeat: -1,
        ease: "none",
    });
}

// ============================================
// 11. SMOOTH SCROLL NAVIGATION
// ============================================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: target,
                        autoKill: false,
                    },
                    ease: "power3.inOut",
                });
            }
        });
    });
}

// ============================================
// 12. LOADING ANIMATION
// ============================================
function setupLoadingAnimation() {
    const body = document.body;

    // Create loader
    const loader = document.createElement("div");
    loader.className = "loader";
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    `;

    const loaderContent = document.createElement("div");
    loaderContent.style.cssText = `
        font-size: 2rem;
        color: white;
        font-weight: bold;
        text-align: center;
    `;
    loaderContent.textContent = "Loading Portfolio...";

    loader.appendChild(loaderContent);
    body.appendChild(loader);

    // Animate loader out
    gsap.to(loader, {
        delay: 0.5,
        duration: 0.8,
        opacity: 0,
        pointerEvents: "none",
        ease: "power2.out",
        onComplete: () => {
            loader.remove();
        },
    });

    // Pulse text
    gsap.from(loaderContent, {
        duration: 0.8,
        scale: 0.8,
        opacity: 0,
        ease: "back.out",
    });
}

// ============================================
// 13. MOUSE FOLLOW CURSOR EFFECT (Optional)
// ============================================
function setupMouseFollowEffect() {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    document.addEventListener("mousemove", (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        gsap.to(hero, {
            duration: 0.5,
            backgroundPosition: `${x * 100}% ${y * 100}%`,
            ease: "power2.out",
        });
    });
}

// ============================================
// 14. TEXT REVEAL ANIMATION
// ============================================
function setupTextReveal() {
    const aboutText = document.querySelector(".about p");
    if (!aboutText) return;

    gsap.from(aboutText, {
        scrollTrigger: {
            trigger: aboutText,
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        duration: 1.2,
        opacity: 0,
        filter: "blur(10px)",
        ease: "power2.out",
    });
}

// ============================================
// 15. INITIALIZE ALL ANIMATIONS
// ============================================
function initializeAllAnimations() {
    // Wait for DOM to be fully loaded
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => {
            setupLoadingAnimation();
            animateHeroTitle();
            animateSubtitle();
            animateCtaButton();
            setupScrollTriggerAnimations();
            setupProjectCardAnimations();
            setupContactAnimations();
            setupParallaxEffect();
            setupNavbarAnimation();
            setupSmoothScroll();
            setupTextReveal();
            createBackgroundAnimation();
            // Optional: setupMouseFollowEffect();
        });
    } else {
        setupLoadingAnimation();
        animateHeroTitle();
        animateSubtitle();
        animateCtaButton();
        setupScrollTriggerAnimations();
        setupProjectCardAnimations();
        setupContactAnimations();
        setupParallaxEffect();
        setupNavbarAnimation();
        setupSmoothScroll();
        setupTextReveal();
        createBackgroundAnimation();
    }
}

// Start animations
initializeAllAnimations();
