document.addEventListener("DOMContentLoaded", () => {

    // ================= MOBILE MENU =================
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // ================= NAVBAR SCROLL EFFECT =================
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (!header) return;

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // ================= SCROLL REVEAL =================
    const sections = document.querySelectorAll(
        ".tour-card, .why-box, .destination-card, .stat-box"
    );

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                obs.unobserve(entry.target); // run once
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        if (section) observer.observe(section);
    });

    // ================= BACK TO TOP =================
    const topBtn = document.getElementById("topBtn");

    if (topBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }
        });

        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // ================= SAFARI FORM =================
    const safariForm = document.getElementById("safariForm");

    if (safariForm) {
        safariForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name")?.value || "";
            let email = document.getElementById("email")?.value || "";
            let destination = document.getElementById("destination")?.value || "";
            let date = document.getElementById("date")?.value || "";
            let travelers = document.getElementById("travelers")?.value || "";
            let budget = document.getElementById("budget")?.value || "";
            let message = document.getElementById("message")?.value || "";

            let whatsappMessage =
                `Hello Eagle Pam Expeditions,%0A%0A` +
                `My Name: ${name}%0A` +
                `Email: ${email}%0A` +
                `Destination: ${destination}%0A` +
                `Travel Date: ${date}%0A` +
                `Travelers: ${travelers}%0A` +
                `Budget: ${budget}%0A` +
                `Message: ${message}`;

            let whatsappURL = `https://wa.me/254111932279?text=${whatsappMessage}`;

            window.open(whatsappURL, "_blank");
        });
    }

    // ================= URL PARAM AUTO SELECT =================
    const params = new URLSearchParams(window.location.search);
    const tour = params.get("tour");

    const select = document.querySelector("select");
    if (tour && select) {
        select.value = tour;
    }

    // ================= SIDEBAR =================
    const sidebar = document.getElementById("sidebar");
    const openSidebar = document.getElementById("openSidebar");
    const closeSidebar = document.getElementById("closeSidebar");
    const overlay = document.getElementById("overlay");

    if (openSidebar && sidebar && overlay) {
        openSidebar.addEventListener("click", () => {
            sidebar.classList.add("active");
            overlay.classList.add("active");
        });
    }

    if (closeSidebar && sidebar && overlay) {
        closeSidebar.addEventListener("click", () => {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        });
    }

    if (overlay && sidebar) {
        overlay.addEventListener("click", () => {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        });
    }

});

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.getElementById("navbar");
    const footer = document.getElementById("footer");

    // FIXED PATHS (IMPORTANT)
    const BASE_PATH = "../partials/";

    if (navbar) {
        fetch(BASE_PATH + "navbar.html")
            .then(res => {
                if (!res.ok) throw new Error("Navbar not found");
                return res.text();
            })
            .then(data => {
                navbar.innerHTML = data;

                // re-bind mobile menu AFTER injection
                const menuToggle = document.querySelector(".menu-toggle");
                const navLinks = document.querySelector(".nav-links");

                menuToggle?.addEventListener("click", () => {
                    navLinks?.classList.toggle("active");
                });
            })
            .catch(err => console.error("Navbar load error:", err));
    }

    if (footer) {
        fetch(BASE_PATH + "footer.html")
            .then(res => {
                if (!res.ok) throw new Error("Footer not found");
                return res.text();
            })
            .then(data => {
                footer.innerHTML = data;
            })
            .catch(err => console.error("Footer load error:", err));
    }

});