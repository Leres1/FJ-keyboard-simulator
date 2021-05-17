var mas = new Map()
let index = 0;
let text_content = '';
let lengthTextLine = 30;
let textLine = document.querySelector('.textLine');

async function initializationText(){
    let num_lvl = Number(document.querySelector('.change-level').querySelector('.current_arrow-selector').textContent);
    text_content = await eel.getTextForLevel(num_lvl,window.location.hash.substr(1).toUpperCase())();
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

initializationText();