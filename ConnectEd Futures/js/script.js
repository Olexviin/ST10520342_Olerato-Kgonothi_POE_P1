document.addEventListener("DOMContentLoaded", () => {

    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) link.classList.add("active");
        else link.classList.remove("active");
    });

  
    const themeToggleBtn = document.getElementById("theme-toggle");
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i> <span>Light Mode</span>';
    }
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i> <span>Light Mode</span>';
            } else {
                localStorage.setItem("theme", "light");
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i> <span>Dark Mode</span>';
            }
        });
    }

  
    const hamburger = document.getElementById("hamburger-menu");
    const navMenu = document.getElementById("nav-menu");
    
    if (hamburger && navMenu) {
        
        // 1. Click to open/close via the Hamburger (X) button
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("nav-active");
            hamburger.classList.toggle("toggle-active");
        });

        // 2. Swipe to Close functionality
        let touchStartX = 0;
        let touchEndX = 0;

        navMenu.addEventListener("touchstart", (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        navMenu.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            // If swiped more than 50px to the left, close the menu
            if (touchStartX - touchEndX > 50) {
                navMenu.classList.remove("nav-active");
                hamburger.classList.remove("toggle-active");
            }
        }
    }

   
    const track = document.getElementById("testimonial-track");
    const dotsContainer = document.getElementById("slider-dots");

    if (track && dotsContainer) {
        // 1. Add all your testimonials here
        const testimonials = [
            {
                quote: "\"ConnectEd Futures gave me the tools I needed to excel in my studies. I'm now studying Engineering at the University of Cape Town.\"",
                author: "Thandi M, Former beneficiary"
            },
            {
                quote: "\"Having a laptop at home has transformed how I learn. I am now able to research, complete assignments, and prepare for exams more effectively.\"",
                author: "Sipho K, Grade 12 beneficiary"
            },
            {
                quote: "\"The mentorship programme changed my life. My mentor helped me apply for university and I got accepted!\"",
                author: "Lerato P, Mentee"
            }
        ];

        let currentSlide = 0;
        let slideInterval;

        testimonials.forEach((test, index) => {

            const slide = document.createElement("div");
            slide.classList.add("testimonial-slide");
            slide.innerHTML = `
                <p class="quote">${test.quote}</p>
                <p class="author">${test.author}</p>
            `;
            track.appendChild(slide);

            const dot = document.createElement("div");
            dot.classList.add("dot");
            if (index === 0) dot.classList.add("active"); 
            dot.addEventListener("click", () => {
                goToSlide(index);
                resetInterval(); 
            });
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll(".dot");

        function goToSlide(index) {
            currentSlide = index;
            
            track.style.transform = `translateX(-${currentSlide * 100}%)`;

            dots.forEach(dot => dot.classList.remove("active"));
            dots[currentSlide].classList.add("active");
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % testimonials.length;
            goToSlide(currentSlide);
        }

        function startInterval() {
            slideInterval = setInterval(nextSlide, 5000); 
        }

        function resetInterval() {
            clearInterval(slideInterval);
            startInterval();
        }

        startInterval();
    }

    const eligibilityForm = document.getElementById("eligibility-form");
    if (eligibilityForm) {
        eligibilityForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const grade = document.getElementById("grade").value;
            const hasLaptop = document.getElementById("has-laptop").value;
            const resultBox = document.getElementById("eligibility-result");
            resultBox.style.display = "block";
            if (grade >= 8 && grade <= 12 && hasLaptop === "no") {
                resultBox.innerText = "You qualify! Please visit the Enquiry page to apply.";
                resultBox.style.backgroundColor = "#d4edda"; resultBox.style.color = "#155724";
            } else if (hasLaptop === "yes") {
                resultBox.innerText = "You already have a laptop! Please leave devices for those who need them.";
                resultBox.style.backgroundColor = "#f8d7da"; resultBox.style.color = "#721c24";
            } else {
                resultBox.innerText = "You must be in Grade 8 - 12 to qualify.";
                resultBox.style.backgroundColor = "#f8d7da"; resultBox.style.color = "#721c24";
            }
        });
    }
});