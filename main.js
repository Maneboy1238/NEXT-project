const mobileSidebarCcontainer = document.getElementById('mobile-menu');
const menuContainer = document.querySelector('.navbar-menu');
mobileSidebarCcontainer.addEventListener('click', ()=> {
    mobileSidebarCcontainer.classList.toggle('is-active');
    menuContainer.classList.toggle('active');
})