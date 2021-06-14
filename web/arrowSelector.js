let select3 = function() {
    let left_arrow_selectors = document.querySelectorAll('.arrow-left');
    let right_arrow_selectors = document.querySelectorAll('.arrow-right');

    right_arrow_selectors.forEach(item => {
        item.addEventListener('click', right_click)
    });

    left_arrow_selectors.forEach(item => {
        item.addEventListener('click', left_click)
    });

    function left_click() {
        let select = this.closest('.arrow-selector'),
            currentText = select.querySelector('.current_arrow-selector'),
            selectItem = select.querySelectorAll('.arrow__select__item');
        for (let i = 0; i < selectItem.length; i++) {
            if (selectItem[i].textContent == currentText.textContent) {
                if (i) {
                    currentText.innerText = selectItem[i - 1].textContent;
                } else {
                    currentText.innerText = selectItem[selectItem.length - 1].textContent;
                }
                break;
            }
        }
        Menufunctions(select);
    }

    function right_click() {
        let select = this.closest('.arrow-selector'),
            currentText = select.querySelector('.current_arrow-selector'),
            selectItem = select.querySelectorAll('.arrow__select__item');
        for (let i = 0; i < selectItem.length; i++) {
            if (selectItem[i].textContent == currentText.innerText) {
                if (i == selectItem.length - 1) {
                    currentText.innerText = selectItem[0].textContent;
                } else {
                    currentText.innerText = selectItem[i + 1].textContent;
                }
                break;
            }
        }
        Menufunctions(select);
    }
}

function Menufunctions(selector) {
    let current_text = selector.querySelector('.current_arrow-selector').textContent;
    if (selector.classList.contains('change-lang')) {changeLang(current_text)}
    if (selector.classList.contains('change-scale')) {changeScale(current_text)}
    if (selector.classList.contains('change-level')) {updateDataText();updateKeyboard();}
    if (selector.classList.contains('change-length')) {setLengthTextLine(current_text),updateKeyboard();}
    if (selector.classList.contains('change-keyboard')) {changeKeyboard(current_text);}
}

function changeLang(text) {
    changeURLLanguage(String(text).toLowerCase());
    changeLanguage();
    updateDataText();
    updateKeyboard();
}

function changeScale(text) {
    let object =  document.querySelector('.keys');
    object.classList.remove('scaled_100');
    object.classList.remove('scaled_125');
    object.classList.remove('scaled_150');
    object.classList.add('scaled_'+text.substr(0,1)+text.substr(2));
}

function changeKeyboard(text) {
    let keyboard = document.querySelectorAll('.key');
    keyboard.forEach(item => {
        if (text == 'OFF') {
            item.classList.add('invisible-keyboard');
            keyboardActive = false;
        } else if (text == 'ON') {
            item.classList.remove('invisible-keyboard');
            keyboardActive = true;
        }
    });
}

select3();