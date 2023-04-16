var bar = document.getElementById("bar");
var close = document.getElementById("close");
var navbar = document.getElementById("navbar");

if(bar){
    bar.addEventListener('click', () => {
        navbar.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
}


