activeLetter = document.querySelector('letter:not(correct)');
document.querySelector('.lng-' +  activeLetter.textContent).style.color = 'rgb(255, 128, 0)';

document.onkeydown = function(event){
    activeLetter = document.querySelector('letter:not(.correct)');
    if(event.key == activeLetter.textContent || (event.key == ' ' && activeLetter.textContent == '_')){
        activeLetter.classList = 'correct';
        if(activeLetter.textContent == '_'){
            activeLetter.classList.add('invisibleSpace');
        }
        activeLetter = document.querySelector('letter:not(.correct)');
        if(event.key != ' '){
            document.querySelector('.lng-' + event.key).style.color = 'rgb(0, 0, 0)';
        }else{
            document.querySelector('.lng-space').style.color = 'rgb(0, 0, 0)';
        }
    }else{
        activeLetter.classList = 'incorrect';
    }
    activeLetter.classList.add('active');

    // document.querySelector('.lng-' + activeLetter.textContent).style.color = 'rgb(255, 128, 0)';

    for(let key in langArr){
        if(activeLetter.textContent == langArr[key][window.location.hash.substr(1)]){
            // if(activeLetter.textContent == '_'){
            //     document.querySelector('.lng-space').style.color = 'rgb(255, 128, 0)';
            // }
            document.querySelector('.lng-' + key).style.color = 'rgb(255, 128, 0)';
        }
    }
    // document.querySelector('.textLine').innerHTML += event.key;
}
