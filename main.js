const modal = document.querySelector('#abrirModal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');


modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

modalBtn.addEventListener("click", () => {
  abrirModal.classList.togle(modal);
})

function openModal() {
  modal.style.display = 'block';
  modalBtn.style.display = 'none';
}


function closeModal() {
  modal.style.display = 'none';
  modalBtn.style.display = 'block';
}


function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
    modalBtn.style.display = 'block';
  }
}

