  document.addEventListener('DOMContentLoaded', function() {
            const navItems = document.querySelectorAll('.nav-item');
            const sections = document.querySelectorAll('.section');
            const themeToggle = document.querySelector('.theme-toggle');
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            
            showSection('overview');
            
            navItems.forEach(item => {
                item.addEventListener('click', function() {
                    const target = this.getAttribute('data-target');
                    navItems.forEach(i => i.classList.remove('active'));
                    this.classList.add('active');
                    showSection(target);
                    
                    if (window.innerWidth <= 768) {
                        window.scrollTo(0, 0);
                        navLinks.classList.remove('show');
                    }
                });
            });
            
            function showSection(sectionId) {
                sections.forEach(section => {
                    section.classList.remove('active');
                });
                
                const targetSection = document.getElementById(sectionId);
                if (targetSection) {
                    targetSection.classList.add('active');
                }
                
                document.querySelectorAll('.section.active').forEach(section => {
                    section.classList.add('fade-in');
                });
            }
            
            document.querySelector('.search-container input').addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                navItems.forEach(item => {
                    const text = item.textContent.toLowerCase();
                    item.style.display = text.includes(searchTerm) ? 'flex' : 'none';
                });
            });
            
            themeToggle.addEventListener('click', function() {
                const body = document.body;
                const isDark = body.classList.toggle('dark-theme');
                themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
            });
            
            mobileMenuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('show');
            });
            
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.navbar') && navLinks.classList.contains('show')) {
                    navLinks.classList.remove('show');
                }
            });
            
            if (localStorage.getItem('theme') === 'dark') {
                document.body.classList.add('dark-theme');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
        });