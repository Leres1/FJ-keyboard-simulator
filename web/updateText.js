var mas = new Map()
let index = 0;
let text_content = '';
let lengthTextLine = 30;

async function initializationText(){
    text_content = await eel.getTextForLevel(Number(document.querySelector('.change-level').querySelector('.current_arrow-selector').textContent),window.location.hash.substr(1).toUpperCase())();
    initializationMas();
    initializationFirstText();
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
    document.querySelector('.lng-' + getKey(mas.get(String(0)).substr(8,1))).classList.add('keyboard_active_letter');
    index++;
    for(;index < lengthTextLine;){
        plusLetter();
    }
}

function updateDataText(){
    index = 0;
    mas.clear();
    document.querySelector('.textLine').innerHTML = '';
    initializationText();
}

initializationText();