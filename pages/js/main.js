addEventListener('scroll', (evt) => {
    if (document.documentElement.scrollTop > document.getElementById('header').style.height) {
        document.getElementById('header').style.backgroundColor = '#214066'
    }
    else {
        document.getElementById('header').style.backgroundColor = 'transparent'
    }
    });

addEventListener('DOMContentLoaded', (evt) => {
    console.log(window)
    document.getElementById('title video').height = window.innerHeight
    document.getElementById('title video').width = window.innerWidth
});