activeLetter = document.querySelector('letter').textContent;
document.querySelector('.lng-' + activeLetter).style.color = 'rgb(255, 128, 0)';

document.onkeydown = function(event){
    activeLetter = document.querySelector('letter:not(.correct)');
    if(event.key == activeLetter.textContent){
        activeLetter.style.color = 'rgb(255, 128, 0)';
        activeLetter.classList.add('correct');
    }

    for(let key in langArr){
        if(event.key == langArr[key][window.location.hash.substr(1)]){
            document.querySelector('.lng-' + key).style.color = 'rgb(255, 128, 0)';
        }
    }
    // document.querySelector('.textLine').innerHTML += event.key;
}
