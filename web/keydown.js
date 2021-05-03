document.onkeydown = function(event){
    checkKey(event.key);
    if (checkActive(6)){
        PM();
    }
}

function checkKey(key){
    activeLetter = document.querySelector('letter:not(.correct)');
    if(key == activeLetter.textContent || (key == ' ' && activeLetter.textContent == '_')){
        activeLetter.classList = 'correct';

        if(activeLetter.textContent == '_'){activeLetter.classList.add('invisibleSpace');}

        activeLetter = document.querySelector('letter:not(.correct)');

        if(key != ' '){document.querySelector('.lng-' + getKey(key)).style.color = 'rgb(101,101,101)';
        }else{document.querySelector('.lng-space').style.backgroundColor = 'rgb(51, 51, 51)';}

    }else{activeLetter.classList = 'incorrect';}

    activeLetter.classList.add('active');

    if(activeLetter.textContent != '_'){
        document.querySelector('.lng-' + getKey(activeLetter.textContent)).style.color = 'rgb(255, 128, 0)';;
    }else{
        document.querySelector('.lng-space').style.backgroundColor = 'rgb(255, 128, 0)';
    }
}

function checkActive(num){
    if(document.querySelectorAll('letter.correct').length == num){
        return true
    }else{
        return false
    }
}

function PM(){
    plusLetter();
    minusLetter();
}

function plusLetter(){
    index++;
    document.querySelector('.textLine').innerHTML += mas.get(String(index));
}

function minusLetter(){
    document.querySelector('letter.correct').remove();
}

function getKey(lang_key){
    for(let key in langArr){
        if(lang_key == langArr[key][window.location.hash.substr(1)]){
           return key;
        }
    }
}
