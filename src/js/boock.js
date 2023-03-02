const linkArrey = document.querySelectorAll('.js-modal-open');
const overlay = document.querySelector('.js-modal-overlay');
const crossArray = document.querySelectorAll('.js-modal-close');
const elem = document.querySelector('.js-modal');

linkArrey.forEach(function (item) {
  item.addEventListener('click', function (event) {
    event.preventDefault();

    let modalName = elem.getAttribute('data-modal');

    let modal = document.querySelector(
      '.js-modal[data-modal="' + modalName + '"]'
    );

    modal.classList.add('is-show');
    overlay.classList.add('is-show');
  });
});

crossArray.forEach(function (cross) {
  cross.addEventListener('click', function () {
    let parent = this.parentNode;
    parent.classList.remove('is-show');
    overlay.classList.remove('is-show');
  });
});
