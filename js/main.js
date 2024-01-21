'use strict';

const allMainBtns = document.querySelectorAll('.main-btns .btn');
allMainBtns.forEach(item => {
    item.addEventListener('mouseover', function() {
        document.querySelector('#main-text').innerHTML = this.dataset.text;
    });
    item.addEventListener('mouseout', resetText);
})

function resetText() {
    document.querySelector('#main-text').innerHTML = document.querySelector('#main-text').dataset.text;
}

resetText();