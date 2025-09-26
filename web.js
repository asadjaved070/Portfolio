 function toggleTheme() {
            document.body.classList.toggle('light-theme');

            const moonIcons = document.querySelectorAll('.moon-icon');
            const sunIcons = document.querySelectorAll('.sun-icon');

            if (document.body.classList.contains('light-theme')) {
                moonIcons.forEach(icon => icon.style.display = 'none');
                sunIcons.forEach(icon => icon.style.display = 'block');
            } else {
                moonIcons.forEach(icon => icon.style.display = 'block');
                sunIcons.forEach(icon => icon.style.display = 'none');
            }

            // Save theme preference
            localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
        }

        // Add event listeners to theme toggle
        document.getElementById('themeToggleCorner').addEventListener('click', toggleTheme);

        // Check for saved theme preference on load
        if (localStorage.getItem('theme') === 'light') {
            document.body.classList.add('light-theme');
            document.querySelectorAll('.moon-icon').forEach(icon => icon.style.display = 'none');
            document.querySelectorAll('.sun-icon').forEach(icon => icon.style.display = 'block');
        }

        // EmailJS initialization and form handling
        (function () {
            emailjs.init('zVImuZ4YCHMMezZfU');
        })();

        document.getElementById('contactForm').addEventListener('submit', function (event) {
            event.preventDefault();

            const formMessage = document.getElementById('formMessage');
            formMessage.textContent = 'Sending message...';
            formMessage.style.color = 'inherit';

            emailjs.send('service_uqd1xft', 'template_9d1ss5l', {
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                message: document.getElementById('message').value
            })
                .then(function () {
                    formMessage.textContent = 'Message sent successfully!';
                    formMessage.style.color = 'green';
                    document.getElementById('contactForm').reset();
                }, function (error) {
                    formMessage.textContent = 'Failed to send message. Please try again.';
                    formMessage.style.color = 'red';
                    console.error('EmailJS Error:', error);
                });
        });

        // Add intersection observer for scroll animations
        document.addEventListener('DOMContentLoaded', function () {
            const animateOnScroll = function () {
                const elements = document.querySelectorAll('.slide-up');

                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.2;

                    if (elementPosition < screenPosition) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }
                });
            };

            // Set initial state for animated elements
            const animatedElements = document.querySelectorAll('.slide-up');
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            });

            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll(); // Trigger once on load
        });