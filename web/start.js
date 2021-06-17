let allLang = [];
let langArr = '';
let config = [];
let range_options = [];

async function Start() {
    await initialization_Lang();
    await initialization_Config();
    await initialization_Range();
    initialization_MenuOptions();
}

async function initialization_Config() {
    config = await eel.getConfig()();
}

async function initialization_Range() {
    range_options = await eel.getRange()();
}

async function initialization_Lang() {
    allLang = await eel.getLangs()();
    langArr = await eel.initializationLangArr(allLang)();
}

function initialization_MenuOptions() {
    initialization_Menu_Language();
    initialization_Menu_Level();
    initialization_Menu_Keyboard();
    initialization_Menu_KeyboardSize();
    initialization_Menu_LineLength();
}

function initialization_Menu_Language() {
    initialization_Menu_Arrows('.change-lang', initialization_Arrow_Code(config['language'], allLang));
}

function initialization_Menu_Level() {
    initialization_Menu_Arrows('.change-level', initialization_Arrow_Code(config['level'], range_generation(range_options['level'])));
}

function initialization_Menu_Keyboard() {
    initialization_Menu_Arrows('.change-keyboard', initialization_Arrow_Code(initialization_Switch(config['keyboard']), ['ON', 'OFF']));
}

function initialization_Menu_KeyboardSize() {
    initialization_Menu_Arrows('.change-keyboard_size', initialization_Arrow_Code(config['keyboard_size'], range_generation(range_options['keyboard_size'])));
}

function initialization_Menu_LineLength() {
    initialization_Menu_Arrows('.change-line_length', initialization_Arrow_Code(config['line_length'], range_generation(range_options['line_length'])));
}

function initialization_Switch(num) {
    if(num){
        return 'ON'
    }else{
        return 'OFF'
    }
}

function range_generation(mas) {
    thisRange = []
    for(i = mas['minimum']; i.toFixed(1) <= mas['maximum']; i += mas['step']){
        if(parseInt(i) == i.toFixed(1)){
            thisRange.push(i)
        }else{
            thisRange.push(i.toFixed(1))
        }
    }
    return thisRange
}

function initialization_Arrow_Code(main, other) {
    htmlCode = '<div class="current_arrow-selector">' +  String(main).toUpperCase() + '</div>';
    for(i in other){
        htmlCode += '<div class="arrow__select__item">' +String(other[i]).toUpperCase() + '</div>';
    }
    return htmlCode
}

function initialization_Menu_Arrows(parameter, code) {
    document.querySelector(parameter).querySelector('.arrow-left').insertAdjacentHTML('afterend', code);
}

Start();
