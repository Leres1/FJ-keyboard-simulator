document.onkeydown = function(event){
    for(let key in langArr){
        if(event.key == langArr[key][window.location.hash.substr(1)]){
            document.querySelector('.lng-' + key).style.backgroundColor = 'rgb(100, 100, 100)';
        }
    }
    document.querySelector('.textLine').innerHTML += event.key;
}
