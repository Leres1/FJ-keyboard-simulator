activeLetter = document.querySelector('letter:not(correct)');
document.querySelector('.lng-' +  activeLetter.textContent).style.color = 'rgb(255, 128, 0)';
// document.querySelector('.lng-space').style.backgroundColor = 'rgb(255, 128, 0)';

document.onkeydown = function(event){
    activeLetter = document.querySelector('letter:not(.correct)');
    if(event.key == activeLetter.textContent || (event.key == ' ' && activeLetter.textContent == '_')){
        activeLetter.classList = 'correct';
        if(activeLetter.textContent == '_'){
            activeLetter.classList.add('invisibleSpace');
        }
        activeLetter = document.querySelector('letter:not(.correct)');
        if(event.key != ' '){
            document.querySelector('.lng-' + event.key).style.color = 'rgb(101,101,101)';
        }else{
            document.querySelector('.lng-space').style.backgroundColor = 'rgb(51, 51, 51)';
        }
    }else{
        activeLetter.classList = 'incorrect';
    }
    activeLetter.classList.add('active');

    // document.querySelector('.lng-' + activeLetter.textContent).style.color = 'rgb(255, 128, 0)';

    for(let key in langArr){
        if(activeLetter.textContent == langArr[key][window.location.hash.substr(1)]){
            document.querySelector('.lng-' + key).style.color = 'rgb(255, 128, 0)';
        }
    }
    if(activeLetter.textContent == '_'){
        document.querySelector('.lng-space').style.backgroundColor = 'rgb(255, 128, 0)';
    }
    // document.querySelector('.textLine').innerHTML += event.key;
}
