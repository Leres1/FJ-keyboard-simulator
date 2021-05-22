var mas = new Map()
let index = 0;
let text_content = '';
let language = '';
let lengthTextLine = 0;
let textLine = document.querySelector('.textLine');
let keyboardActive = true;

async function initializationText(){
    language = document.querySelector('.change-lang').querySelector('.current_arrow-selector').textContent;
    lengthTextLine = document.querySelector('.change-length').querySelector('.current_arrow-selector').textContent;
    let num_lvl = Number(document.querySelector('.change-level').querySelector('.current_arrow-selector').textContent);
    text_content = await eel.getTextForLevel(num_lvl,language)();
    initializationMas();
    initializationTextLine();
}

function initializationMas(){
    for(let key in text_content){
        if(text_content[key]==' '){
            mas.set(key,'<letter class="invisibleSpace">_</letter>');
            continue;
        }

        mas.set(key, '<letter>' + text_content[key] + '</letter>');
    }
}

function initializationTextLine(){
    for(;index < lengthTextLine;){
        plusLetter();
    }
    initializationActive();
}

function initializationActive(){
    let firstLetter = textLine.querySelector('letter');
    firstLetter.classList.add('active');
    document.querySelector('.lng-' + getKey(firstLetter.textContent)).classList.add('keyboard_active_letter');
}

function updateDataText(){
    index = 0;
    mas.clear();
    textLine.innerHTML = '';
    initializationText();
}

function setLengthTextLine(text){
    lengthTextLine = text;
    updateDataText();
}

initializationText();