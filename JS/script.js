document.addEventListener('DOMContentLoaded', function() {
            const themeToggle = document.querySelector('.theme-toggle');
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            
            themeToggle.addEventListener('click', function() {
                const body = document.body;
                const isDark = body.classList.toggle('dark-theme');
                
                themeToggle.innerHTML = isDark ? 
                    '<i class="fas fa-sun"></i>' : 
                    '<i class="fas fa-moon"></i>';
                
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
            });
            
            mobileMenuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
            
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', function() {
                    navLinks.classList.remove('active');
                });
            });
            
            if (localStorage.getItem('theme') === 'dark') {
                document.body.classList.add('dark-theme');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
        });