(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  if (refs.openModalBtn && refs.closeModalBtn && refs.modal) {
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  } else {
    console.error("One or more modal elements were not found.");
  }

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();