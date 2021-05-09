function changeURLLanguage(lang){
    location.href = window.location.pathname + '#' + lang;
}

function changeLanguage(){
    let hash = window.location.hash.substr(1);
    if(!allLang.includes(hash)){
        location.href = window.location.pathname + '#en';
        hash = window.location.hash.substr(1);
    }
    
    updateKeys(hash);
}

function updateKeys(lang){
    for(let key in langArr){
        let elem = document.querySelector('.lng-' + key);
        elem.innerHTML = langArr[key][lang];
    }
}

changeLanguage();