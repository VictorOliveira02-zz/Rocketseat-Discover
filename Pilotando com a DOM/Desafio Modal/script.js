const btnMain = document.querySelector('.btn-main');
const btnModal = document.querySelector('.btn-modal');

function openToggleModal() {
    const modal = document.querySelector('.modal-container');
    modal.classList.toggle('hide');
}

function closeToggleModal(event) {
    if (event.key === "Escape") {
        const modal = document.querySelector('.modal-container');
        modal.classList.toggle('hide');
    }
}


btnMain.addEventListener('click', openToggleModal);
btnModal.addEventListener('keydown', closeToggleModal);
