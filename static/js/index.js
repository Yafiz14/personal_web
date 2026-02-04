    
        // Smooth scroll for navigation
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Login form animation on scroll
        const loginContainer = document.querySelector('.login-container');
        const aboutTitle = document.querySelector('.about-section h2');
        const aboutContent = document.querySelector('.about-content');
        const socialLinks = document.querySelector('.social-links');
        const projectCards = document.querySelectorAll('.project-card');

        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        observer.observe(loginContainer);
        observer.observe(aboutTitle);
        observer.observe(aboutContent);
        observer.observe(socialLinks);
        projectCards.forEach(card => observer.observe(card));

        // Handle login form submission
        function handleLogin(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
           
        }

        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
        setTimeout(() => {
    const errorMsg = document.querySelector('.error-msg');
    if (errorMsg) {
        errorMsg.style.opacity = '0';
        errorMsg.style.transition = 'opacity 0.5s ease';
        setTimeout(() => errorMsg.remove(), 500);
    }
}, 3000);

    