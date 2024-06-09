addEventListener('scroll', (evt) => {
    if (document.documentElement.scrollTop > window.innerHeight*0.05) {
        document.getElementById('header').style.backgroundColor = 'var(--highlight_color)'
    }
    else {
        document.getElementById('header').style.backgroundColor = 'transparent'
    }
    });

addEventListener('DOMContentLoaded', (evt) => {
    resize()
});

addEventListener('resize', (evt) => {
    resize()
});

function menu() {
    console.log('menu')
}

function resize() {
    document.getElementById('window div').height = window.innerHeight
    document.getElementById('window div').width = window.innerWidth
    document.getElementById('title video').height = window.innerHeight
    document.getElementById('main').height = 3*window.innerHeight
}