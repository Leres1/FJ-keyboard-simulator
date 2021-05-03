var mas = new Map()
let html_text_content = '';
let index = 0;
let text_content = '';
let lengthTextLine = 30;

async function initializationText(){
    text_content = await eel.getTextForLevel(1,window.location.hash.substr(1).toUpperCase())();
    initializationMas();
    initializationFirstText();
    console.log(index);
}

function initializationMas(){
    for(let key in text_content){
        if(text_content[key]==' '){
            mas.set(key,'<letter class="invisibleSpace">_</letter>');
            continue;
        }

        mas.set(key,'<letter>' + text_content[key] + '</letter>')
    }
}

function initializationFirstText(){
    document.querySelector('.textLine').innerHTML += mas.get(String(0)).substr(0,7) + ' class="active"' + mas.get(String(0)).substr(7);
    index++;
    for(;index < lengthTextLine;){
        plusLetter();
    }
}

initializationText();