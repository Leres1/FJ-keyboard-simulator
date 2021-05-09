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
        changeScale(text);
    }
};

function checkLang(text){
    if(allLang.includes(String(text).toLowerCase())){
        changeURLLanguage(String(text).toLowerCase());
        changeLanguage();
        updateDataText();
        updateKeyboard();
    }
}

function changeScale(text){
    if([0.50, 0.75, 1.00, 1.25, 1.50].includes(Number(text))){
        let object =  document.querySelector('.keys');
        object.classList.remove('scaled_050');
        object.classList.remove('scaled_075');
        object.classList.remove('scaled_100');
        object.classList.remove('scaled_125');
        object.classList.remove('scaled_150');
        object.classList.add('scaled_'+text.substr(0,1)+text.substr(2));
    }
}

select2();