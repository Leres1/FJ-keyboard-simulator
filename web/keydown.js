let activeLetterOn = 6

document.onkeydown = function(event){
    validation(event.key);
    if (checkActive(activeLetterOn)){
        PM();
    }
}

function validation(key){
    let activeLetter = document.querySelector('letter:not(.correct)');
    if(key == activeLetter.textContent || (key == ' ' && activeLetter.textContent == '_')){
        
        activeLetter.classList.remove('active');
        activeLetter.classList.remove('incorrect');
        activeLetter.classList.add('correct');

        activeLetter = document.querySelector('letter:not(.correct)');
        activeLetter.classList.add('active');
        if(keyboardActive){
            document.querySelector('.lng-' + getKey(key)).classList.remove('keyboard_active_letter');
            setActiveLetter(activeLetter.textContent);
        }
        
    }else{activeLetter.classList.add('incorrect');}
}

function setActiveLetter(letter){
    if(letter != '_'){
        document.querySelector('.lng-' + getKey(letter)).classList.add('keyboard_active_letter');
    }else{
        document.querySelector('.lng-space').classList.add('keyboard_active_letter');
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
    if(index + activeLetterOn == text_content.length - 1 + lengthTextLine){
        console.log('finish');
    }
    if(index < text_content.length - 1){
        plusLetter();
    }else{
        plusSpace();
    }
    minusLetter();
}

function plusLetter(){
    index++;
    document.querySelector('.textLine').innerHTML += mas.get(String(index));
}

function minusLetter(){
    document.querySelector('letter.correct').remove();
}

function plusSpace(){
    index++;
    document.querySelector('.textLine').innerHTML += '<letter class="invisibleSpace">_</letter>';
}

function getKey(lang_key){
    for(let key in langArr){
        if(lang_key == langArr[key][window.location.hash.substr(1)]){
           return key;
        }
    }
}

function updateKeyboard(){
    for(let key in langArr){
        document.querySelector('.lng-' + key).classList.remove('keyboard_active_letter');
    }
}
