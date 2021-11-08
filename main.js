// alert ('hdgg');

const show = document.querySelector('i');

show.addEventListener('click', function(){
    document.querySelector('.hamburger-menu').classList.add('active')
});

const hide = document.querySelector('.close');

hide.addEventListener('click', function(){
    document.querySelector('.hamburger-menu').classList.remove('active')
});