// GMAIL CHECKER
//
// const gmailInput  = document.querySelector("#gmail_input")
// const gmailButton  = document.querySelector("#gmail_button")
// const gmailResult  = document.querySelector("#gmail_result")
//
// const regExp = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w)$/
//
// gmailButton.addEventListener('click', () => {
//     if (regExp.test(gmailInput.value)) {
//         gmailResult.innerHTML = 'OK'
//         gmailResult.style.color = 'green'
//     }else {
//         gmailResult.innerHTML = 'NOT OK'
//         gmailResult.style.color = 'red'
//     }
// })

// MOVE BLOCK//

const childBlock = document.querySelector('.child_block')
const parentBlock = document.querySelector('.parent_block')

const mainWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const mainHeight = parentBlock.offsetHeight - childBlock.offsetHeight

let positionX = 0
let positionY = 0

const moveBlock = () => {
    if(positionX < mainWidth) {
        positionX+=2
        childBlock.style.left = `${positionX}px`
        // setTimeout(moveBlock, 10)
        requestAnimationFrame(moveBlock)
    }else if (positionX >= mainWidth && positionY < mainHeight) {
        positionY+=2
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
    }
}

moveBlock()

// let position = 0;
//
// function recursionAnimation() {
//     position = position + 5;
//     if (position > 450) return;
//     document.querySelector('.child_block').style.left = position + 'px'
//     animation();
// }
// function animation() {
//     setTimeout(recursionAnimation, 100)
// }
// animation();


const startButton = document.querySelector('#start')
const resetButton = document.querySelector('#reset')
const stopButton = document.querySelector('#stop')
const secondsBlock = document.querySelector('#seconds')

let interval
let seconds = 0

startButton.onclick = () => {
    // clearInterval(interval)
    if (!interval) {
        interval = setInterval(() => {
            seconds++
            secondsBlock.innerHTML = seconds
        }, 1000)
    }

}
stopButton.onclick = () => clearInterval(interval)

resetButton.onclick = () => {
    clearInterval(interval)
    seconds = 0
    secondsBlock.innerHTML = seconds
}