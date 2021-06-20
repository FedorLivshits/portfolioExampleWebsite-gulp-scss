window.addEventListener('load', () => {
    const menuList = document.querySelector('.header__menu-list');
    const burgerMenu = document.querySelector('.header__burger');
    const body = document.querySelector('body')

    burgerMenu.addEventListener('click', () => {
        menuList.classList.toggle('header__menu-list--active');
        burgerMenu.classList.toggle('header__burger--active');
        body.classList.toggle('lock')
    })
})