document.onkeydown = function(event){
    console.log(event)
    if(event.key == '['){document.querySelector('.lng-code_1').style.backgroundColor = 'rgb(100, 100, 100)';}
    if(event.key == ']'){document.querySelector('.lng-code_2').style.backgroundColor = 'rgb(100, 100, 100)';}
    if(event.key == ';'){document.querySelector('.lng-code_3').style.backgroundColor = 'rgb(100, 100, 100)';}
    if(event.key == '\''){document.querySelector('.lng-code_4').style.backgroundColor = 'rgb(100, 100, 100)';}
    if(event.key == ','){document.querySelector('.lng-code_5').style.backgroundColor = 'rgb(100, 100, 100)';}
    if(event.key == '.'){document.querySelector('.lng-code_6').style.backgroundColor = 'rgb(100, 100, 100)';}
    if(event.key == '/'){document.querySelector('.lng-code_7').style.backgroundColor = 'rgb(100, 100, 100)';}
    if(event.key == ' '){document.querySelector('.space').style.backgroundColor = 'rgb(100, 100, 100)';}

    if(event.key in langArr){
        let elem = document.querySelector('.lng-' + event.key);
        elem.style.backgroundColor = 'rgb(100, 100, 100)';
    }
    let elem = document.querySelector('.textLine');
    console.log(elem);
    document.querySelector('.textLine').innerHTML += event.key;
    //console.log(elem.style.backgroundColor);
}
