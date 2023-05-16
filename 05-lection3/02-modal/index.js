(function() {
    const close = document.getElementById('modal-close');
    const modalWrapper = document.getElementById('modal-wrapper');
    const modalPopup = document.getElementById('modal-popup');
    const modalButton = document.getElementById('modal-button');

    if (!close || !modalButton || !modalWrapper) {
        return;
    }

    modalButton.addEventListener('click', () => {
        modalWrapper.style.display = 'grid';
        modalPopup.style.display = 'block';
        document.body.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        modalWrapper.style.display = 'none';
        modalPopup.style.display = 'none';
        document.body.overflow = 'initial';
    });
})();