function sliderFunctions(value, op) {
    if (op == '.textsize') {
        changeTextSize(value);
    }
}

function changeTextSize(value) {
    document.querySelector('.textLine').style.fontSize = value + 'px';
}