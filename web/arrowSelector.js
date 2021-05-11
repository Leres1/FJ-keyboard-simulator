let select3 = function(){
    let left_arrow_selectors = document.querySelectorAll('.arrow-left');
    let right_arrow_selectors = document.querySelectorAll('.arrow-right');

    right_arrow_selectors.forEach(item => {
        item.addEventListener('click', right_click)
    });

    left_arrow_selectors.forEach(item => {
        item.addEventListener('click', left_click)
    });

    function left_click(){
        let res = 0,
        select = this.closest('.arrow-selector'),
        currentText = select.querySelector('.current_arrow-selector'),
        selectItem = select.querySelectorAll('.arrow__select__item');
        for(let i = 0; i < selectItem.length; i++){
            if(selectItem[i].textContent == currentText.textContent){
                if(i == 0){
                    res = selectItem.length - 1;
                }else{
                    res = i - 1;
                }
            }
        }
        currentText.innerText = selectItem[res].textContent;
        Menufunctions();
    }

    function right_click(){
        let res = 0,
        select = this.closest('.arrow-selector'),
        currentText = select.querySelector('.current_arrow-selector'),
        selectItem = select.querySelectorAll('.arrow__select__item');
        for(let i = 0; i < selectItem.length; i++){
            if(selectItem[i].textContent == currentText.textContent){
                if(i == selectItem.length - 1){
                    res = 0;
                }else{
                    res = i + 1;
                }
            }
        }
        currentText.innerText = selectItem[res].textContent;
        Menufunctions();
    }
}

function Menufunctions(){
    checkLang(document.querySelector('.arrow-selector.change-lang').querySelector('.current_arrow-selector').textContent);
    changeScale(document.querySelector('.arrow-selector.change-scale').querySelector('.current_arrow-selector').textContent);
}

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

select3();