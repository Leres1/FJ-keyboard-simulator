document.querySelector('.c-hamburger').addEventListener('click', function(e){
    e.preventDefault();
    if(this.classList.contains('is-active')){
        this.classList.remove('is-active');
        closeAllSelectors();
        document.querySelector('#menu').classList.remove('nav-active');
    }else{
        this.classList.add('is-active');
        document.querySelector('#menu').classList.add('nav-active');
    }
})