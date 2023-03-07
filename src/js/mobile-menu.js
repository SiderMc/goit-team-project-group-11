//document.addEventListener('DOMContentLoaded', function () {
//  const menu = document.querySelector('.mobile__menu');
//  const openButton = document.querySelector('.js-open-menu');
//  const closeButton = document.querySelector('.js-open-menu');

//  // Обработчик события для открытия меню
//  openButton.addEventListener('click', function () {
//    menu.classList.add('menu__open');
//  });

//  // Обработчик события для закрытия меню
//  closeButton.addEventListener('click', function () {
//    menu.classList.remove('menu__open');
//  });
//});

(() => {
  const openMenuBtn = document.querySelector('.js-open-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    document.body.classList.toggle('menu-open');
  };
  openMenuBtn.addEventListener('click', toggleMenu);
})();
