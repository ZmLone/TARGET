/* --- global.js --- */
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const authBtn = document.getElementById('auth-btn');

// Toggle Sidebar
function toggleSidebar() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Close Sidebar
function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}

// Check which page is active and highlight it in sidebar
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll('.sidebar a');
    
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active-page');
        }
    });
});