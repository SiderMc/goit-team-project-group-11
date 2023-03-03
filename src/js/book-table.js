() => {
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
};
