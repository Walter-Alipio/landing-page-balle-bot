const menuButton = document.querySelector('[data-menu="button"]');

menuButton.addEventListener('click',()=>{
    const menu = document.querySelector('[data-menu="menu"]');
    menu.classList.toggle('active');
    menuButton.classList.toggle('button-active');
})