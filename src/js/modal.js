(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      refs.modal.classList.remove('is-hidden');
    });
  });

  refs.closeModalBtn.addEventListener('click', () => {
    refs.modal.classList.add('is-hidden');
  });
})();

//-----------------------------------------------------------
