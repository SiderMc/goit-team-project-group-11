const navigation = window.location.pathname;
const current = document.querySelectorAll('.header-navigation');

current.forEach(page => {
  if (navigation === page.pathname) {
    page.classList.add('current');
  }
});
console.log(navigation);
