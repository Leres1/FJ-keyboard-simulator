async function updateText(){
    let res = await eel.getTextForLevel(1,window.location.hash.substr(1).toUpperCase())();
    let txtLine = document.querySelector('.textLine');
    let htmlCode = '';
    for(let key in res){
        if(res[key]==' '){htmlCode += '<letter class="invisibleSpace">_</letter>';continue;}

        if(htmlCode == ''){
            htmlCode += '<letter class="active">' + res[key] + '</letter>';
            document.querySelector('.lng-' + getKey(res[key])).style.color = 'rgb(255, 128, 0)';
            continue;
        }
        htmlCode += '<letter>' + res[key] + '</letter>';
    }
    txtLine.innerHTML = htmlCode;
}

updateText()