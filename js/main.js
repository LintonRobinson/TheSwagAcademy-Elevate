// **FAQ FUNCTIONALITY** 

// Question 1 

document.getElementById('faq-question-1-wrapper').addEventListener('click', questionOneActive)

function questionOneActive () {
    document.querySelector('#faq-question-1-wrapper').classList.toggle('faq-question-1-wrapper-active');
    document.querySelector('#faq-answer-1').classList.toggle('faq-answer-1-active');
    document.querySelector('#caret-question-1').classList.toggle('caret-question-1-active');
}

// Question 2 
document.getElementById('faq-question-2-wrapper').addEventListener('click', questionTwoActive)

function questionTwoActive () {
    document.querySelector('#faq-question-2-wrapper').classList.toggle('faq-question-2-wrapper-active');
    document.querySelector('#faq-answer-2').classList.toggle('faq-answer-2-active');
    document.querySelector('#caret-question-2').classList.toggle('caret-question-2-active');
}


// Question 3 
document.getElementById('faq-question-3-wrapper').addEventListener('click', questionThreeActive)

function questionThreeActive () {
    document.querySelector('#faq-question-3-wrapper').classList.toggle('faq-question-3-wrapper-active');
    document.querySelector('#faq-answer-3').classList.toggle('faq-answer-3-active');
    document.querySelector('#caret-question-3').classList.toggle('caret-question-3-active');
}


// Question 4
document.getElementById('faq-question-4-wrapper').addEventListener('click', questionFourActive)

function questionFourActive () {
    document.querySelector('#faq-question-4-wrapper').classList.toggle('faq-question-4-wrapper-active');
    document.querySelector('#faq-answer-4').classList.toggle('faq-answer-4-active');
    document.querySelector('#caret-question-4').classList.toggle('caret-question-4-active');
}

// Question 5
document.getElementById('faq-question-5-wrapper').addEventListener('click', questionFiveActive)

function questionFiveActive () {
    document.querySelector('#faq-question-5-wrapper').classList.toggle('faq-question-5-wrapper-active');
    document.querySelector('#faq-answer-5').classList.toggle('faq-answer-5-active');
    document.querySelector('#caret-question-5').classList.toggle('caret-question-5-active');
}


// Change nav background on scroll


const headerElement = document.getElementById('header')

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        headerElement.classList.add('header-scrolled')
    } else if (window.scrollY <= 50) {
        headerElement.classList.remove('header-scrolled')
    }
})

