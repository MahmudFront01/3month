// GMAIL CHECKER

const gmailInput  = document.querySelector("#gmail_input")
const gmailButton  = document.querySelector("#gmail_button")
const gmailResult  = document.querySelector("#gmail_result")

const regExp = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w)$/

gmailButton.addEventListener('click', () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
})

// MOVE BLOCK//

let position = 0;
function recursionAnimation(){
    position = position + 5;
    if (position > 450) return;
    document.querySelector('.child_block').style.left = position + 'px';
    animation();
}

function animation(){
    setTimeout(recursionAnimation, 100);
}

animation();