(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('.js-modal-open'),
    closeModalBtn: document.querySelector('[data-modal-table-close]'),
    modal: document.querySelector('[data-modal-table]'),
  };

  refs.openModalBtn.forEach(function (item) {
    item.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  //current data for input
  document.getElementById('input-date').valueAsDate = new Date();
})();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open-box]'),
// linkArrey: document.querySelector('.js-modal-open'),
// const overlay = document.querySelector('.js-modal-overlay');
//   crossArray: document.querySelector('.js-modal-close'),
//   elem: document.querySelector('.js-modal'),
// };
// refs.openModalBtn.addEventListener('click', console.log('zsdgsd'));
// linkArrey.forEach(function (item) {
//   item.addEventListener('click', console.log('zsdgsd'), false);
// });
// crossArray.forEach(function (item) {
//   item.addEventListener('click', toggleModal());
//   // console.log(item);
// });

// function toggleModal(item_btn) {
//   // console.log(item_btn);
//   elem.forEach(function (item) {
//     item.classList.toggle('is-show');
//   });
// }

//   document.getElementById('input-date').valueAsDate = new Date();
// })();
// function (event) {
//     event.preventDefault();

//     let modalName = elem.getAttribute('data-modal-ov');

//     let modal = document.querySelector(
//       '.js-modal[data-modal-ov="' + modalName + '"]'
//     );

//     let overlay = document.querySelector(
//       '.js-modal[data-modal="' + modalName + '"]'
//     );
//   }

// overlay.classList.add('is-show');
// modal.classList.add('is-show');

// overlay.classList.add('is-show');

// crossArray.forEach(function (cross) {
//   cross.addEventListener('click', function () {
//     let parent = this.parentNode;
//     // let overlay = ;
//     parent.classList.remove('is-show');
//     overlay.classList.remove('is-show');
//
//
