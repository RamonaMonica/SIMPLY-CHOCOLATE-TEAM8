/* (() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
 */

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    submitBtn: document.querySelector('.submit-btn'),
    form: document.querySelector('form'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.submitBtn.addEventListener('click', handleSubmitWithTransition);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function handleSubmitWithTransition(event) {
    event.preventDefault();

    if (refs.form.checkValidity()) {
      refs.modal.classList.add('is-hidden');

      setTimeout(() => {
        refs.form.submit();
      }, 300);
    } else {
      refs.form.reportValidity();
    }
  }
})();
