const hamburgerSideMenu = document.querySelector('.hamburger-sidemenu');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {
    hamburgerSideMenu.classList.toggle('active');
});