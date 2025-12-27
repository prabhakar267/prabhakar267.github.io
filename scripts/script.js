(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-57220954-1', 'auto');
ga('send', 'pageview');

// Dark mode toggle functionality
document.getElementById('darkModeToggle').addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    const icon = this.querySelector('i');
    if (newTheme === 'dark') {
        icon.className = 'fas fa-sun peel-icon';
    } else {
        icon.className = 'fas fa-moon peel-icon';
    }
});

// Load theme on page load - system default or saved preference
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    let currentTheme;
    
    if (savedTheme) {
        // User has a saved preference, use it
        currentTheme = savedTheme;
    } else {
        // No saved preference, use system default
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            currentTheme = 'dark';
        } else {
            currentTheme = 'light';
        }
    }
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update icon based on theme
    const icon = document.querySelector('#darkModeToggle i');
    if (currentTheme === 'dark') {
        icon.className = 'fas fa-sun peel-icon';
    } else {
        icon.className = 'fas fa-moon peel-icon';
    }
    
    // Listen for system theme changes (only if no saved preference)
    if (!savedTheme && window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            // Only update if user hasn't set a preference
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', newTheme);
                
                const icon = document.querySelector('#darkModeToggle i');
                if (newTheme === 'dark') {
                    icon.className = 'fas fa-sun peel-icon';
                } else {
                    icon.className = 'fas fa-moon peel-icon';
                }
            }
        });
    }
});

// View all publications functionality
document.getElementById('view-all-publications-btn').addEventListener('click', function() {
    const sectionCard = this.closest('.section-card');
    const hiddenItems = sectionCard.querySelectorAll('.hidden-item');
    const titleElement = document.getElementById('publications-title');
    const isExpanded = this.textContent.includes('Show all');
    
    // Add smooth transition
    hiddenItems.forEach(item => {
        if (isExpanded) {
            item.style.display = 'block';
            item.style.opacity = '0';
            item.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 10);
        } else {
            item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            item.style.opacity = '0';
            item.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
    
    // Change title and button text
    if (isExpanded) {
        titleElement.textContent = 'Publications';
        this.textContent = '(Show less)';
    } else {
        titleElement.textContent = 'Recent Publications';
        this.textContent = '(Show all)';
    }
});

// View all patents functionality
document.getElementById('view-all-patents-btn').addEventListener('click', function() {
    const sectionCard = this.closest('.section-card');
    const hiddenItems = sectionCard.querySelectorAll('.hidden-item');
    const titleElement = document.getElementById('patents-title');
    const isExpanded = this.textContent.includes('Show all');
    
    // Add smooth transition
    hiddenItems.forEach(item => {
        if (isExpanded) {
            item.style.display = 'block';
            item.style.opacity = '0';
            item.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 10);
        } else {
            item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            item.style.opacity = '0';
            item.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
    
    // Change title and button text
    if (isExpanded) {
        titleElement.textContent = 'Patents';
        this.textContent = '(Show less)';
    } else {
        titleElement.textContent = 'Recent Patents';
        this.textContent = '(Show all)';
    }
});
