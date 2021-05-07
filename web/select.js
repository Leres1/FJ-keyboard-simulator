let select2 = function () {
    let selectHeader = document.querySelectorAll('.select__current');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');
        checkLang(text);
    }
};

function checkLang(text){
    if(String(text).toLowerCase() == 'ua' || String(text).toLowerCase() == 'en'){
        changeURLLanguage(String(text).toLowerCase());
        changeLanguage();
        updateDataText();
        updateKeyboard();
    }
}

select2();