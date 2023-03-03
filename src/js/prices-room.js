(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('.js-modal-open-prices'),
    closeModalBtn: document.querySelector('[data-modal-prices-close]'),
    modal: document.querySelector('[data-modal-prices]'),
  };
  console.log(refs.openModalBtn);
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
