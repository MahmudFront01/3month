// PHONE CHECKER

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click', () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    }else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
})

// TAD SLIDER

const tabContents = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

const hideTabContents = () => {
    tabContents.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContents = (index = 0) => {
    tabContents[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}

hideTabContents()
showTabContents()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabs.forEach((tabItem, tabIndex) => {
            if (event.target === tabItem) {
                hideTabContents()
                showTabContents(tabIndex)
            }
        })
    }
}

//slider
// const textSlider = document.querySelectorAll('.tab_content_block')
// const innerSlider = document.querySelector('.inner_tab_slider')
//
// let sliderCount = 0;
//
// function nextSlide() {
//     sliderCount++;
//     if (sliderCount >= textSlider.length) {
//         sliderCount = 0;
//     }
// }
//
// setInterval(() => {
//     nextSlide()
// }, 4000)


const sliders = document.querySelector('.tab_slider')
let index = 0
const hideSlide = () => {
    slides.forEach((slide) => {
        slide.style.opascity = 0
        slide.classList.remove('active_slide')
    })
}

const showSlide = (i = 0) => {
    slides[i].style.opascity = 1
    slides[i].classList.add('active_slide')
}

hideSlide()
showSlide(index)
const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > sliders.length - 1){
            i = 0
        }
        hideSlide()
        showSlide(i)
    }, 3000)
}
autoSlider(index)