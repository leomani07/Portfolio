document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const typingTextElement = document.querySelector('.typing-text');

    // --- Mobile Nav Toggle ---
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // --- Typing Effect ---
    const jobTitles = ["AWS Cloud Engineer", "DevOps Engineer", "Automation Expert", "Futurist"];
    let titleIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < jobTitles[titleIndex].length) {
            typingTextElement.textContent += jobTitles[titleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingTextElement.textContent = jobTitles[titleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            titleIndex = (titleIndex + 1) % jobTitles.length;
            setTimeout(type, 500);
        }
    }

    if (typingTextElement) {
        type();
    }
    
    // --- Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.15
    });

    document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

    // --- Mouse-follow Glow Effect for all Glass Cards ---
    document.querySelectorAll('.project-card, .about-content.glass-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
