
        // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        createParticles();

        // Password strength checker
        const passwordInput = document.getElementById('password');
        const strengthBar = document.getElementById('strengthBar');

        passwordInput.addEventListener('input', function() {
            const password = this.value;
            let strength = 0;

            if (password.length >= 8) strength++;
            if (password.match(/[a-z]+/)) strength++;
            if (password.match(/[A-Z]+/)) strength++;
            if (password.match(/[0-9]+/)) strength++;
            if (password.match(/[$@#&!]+/)) strength++;

            strengthBar.className = 'password-strength-bar';
            
            if (strength <= 2) {
                strengthBar.classList.add('strength-weak');
            } else if (strength <= 4) {
                strengthBar.classList.add('strength-medium');
            } else {
                strengthBar.classList.add('strength-strong');
            }

            if (password.length === 0) {
                strengthBar.style.width = '0%';
            }
        });

        // Form validation and submission
        function handleRegister(e) {
            e.preventDefault();
            
            // Get form values
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const mobile = document.getElementById('mobile').value.trim();

            // Clear previous errors
            document.querySelectorAll('.error-message').forEach(msg => {
                msg.classList.remove('show');
            });

            let isValid = true;

            // Username validation
            if (username.length < 3) {
                showError('usernameError', 'Username must be at least 3 characters');
                isValid = false;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showError('emailError', 'Please enter a valid email address');
                isValid = false;
            }

            // Password validation
            if (password.length < 8) {
                showError('passwordError', 'Password must be at least 8 characters');
                isValid = false;
            }

            // Confirm password validation
            if (password !== confirmPassword) {
                showError('confirmPasswordError', 'Passwords do not match');
                isValid = false;
            }

            // Mobile validation
            const mobileRegex = /^[\d\s\-\+\(\)]+$/;
            if (!mobileRegex.test(mobile) || mobile.replace(/\D/g, '').length < 10) {
                showError('mobileError', 'Please enter a valid mobile number');
                isValid = false;
            }

            // If all validations pass
            if (isValid) {
                showSuccessMessage();
                // Here you would typically send data to your server
                console.log('Registration data:', {
                    username,
                    email,
                    password,
                    mobile
                });

                // Reset form after 2 seconds
                setTimeout(() => {
                    document.getElementById('registerForm').reset();
                    strengthBar.style.width = '0%';
                }, 2000);
            }
        }

        function showError(elementId, message) {
            const errorElement = document.getElementById(elementId);
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }

        function showSuccessMessage() {
            const successMsg = document.getElementById('successMessage');
            successMsg.classList.add('show');
            
            setTimeout(() => {
                successMsg.classList.remove('show');
            }, 3000);
        }

        // Add input animation on focus
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'translateX(5px)';
            });

            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'translateX(0)';
            });
        });

        // Real-time validation feedback
        document.getElementById('confirmPassword').addEventListener('input', function() {
            const password = document.getElementById('password').value;
            const confirmPassword = this.value;
            const errorElement = document.getElementById('confirmPasswordError');

            if (confirmPassword && password !== confirmPassword) {
                showError('confirmPasswordError', 'Passwords do not match');
            } else {
                errorElement.classList.remove('show');
            }
        });