// MODAL

const modal = document.querySelector('.modal')
const modalTriggerButton = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
     modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTriggerButton.onclick = () => openModal()

modalCloseButton.onclick = () => closeModal()

modal.onclick= () => {
    if (event.target === modal) {
    closeModal()
    }
}
// SCROLL TIME
const setTimerModal = setTimeout(openModal, 10000)

//SCROLL
window.addEventListener('scroll', () => {
   if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
       openModal();
   }
});