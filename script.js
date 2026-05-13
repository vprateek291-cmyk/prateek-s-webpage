document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const rootHTML = document.documentElement;

    // Initialize the toggle button text correctly on page load
    if (rootHTML.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Light Mode';
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
    }

    // Toggle mechanism on click
    themeToggle.addEventListener('click', () => {
        rootHTML.classList.toggle('dark-mode');
        
        const isDark = rootHTML.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    });
});
