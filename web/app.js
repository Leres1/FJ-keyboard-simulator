const select = document.querySelector('select');

select.addEventListener("change", changeURLLanguage);
const allLang = ['en', 'ua'];

function changeURLLanguage(){
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage(){
    let hash = window.location.hash.substr(1);
    console.log(hash);
    if(!allLang.includes(hash)){
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;
    
    for(let key in langArr){
        let elem = document.querySelector('.lng-' + key);
        if(elem){
            elem.innerHTML = langArr[key][hash];
        }
    }
}

changeLanguage();