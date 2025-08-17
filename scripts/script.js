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

// View all publications functionality
document.getElementById('view-all-publications-btn').addEventListener('click', function() {
    const hiddenItems = document.querySelectorAll('.hidden-item');
    const titleElement = document.getElementById('publications-title');
    const isExpanded = this.textContent.includes('View all');
    
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
        titleElement.textContent = 'Publication Highlights';
        this.textContent = '(View all)';
    }
});
