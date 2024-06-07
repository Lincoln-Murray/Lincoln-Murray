addEventListener('scroll', (evt) => {
    if (document.documentElement.scrollTop > window.innerHeight*0.08) {
        document.getElementById('header').style.backgroundColor = '#214066'
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

function resize() {
    document.getElementById('window div').height = window.innerHeight
    document.getElementById('window div').width = window.innerWidth
    document.getElementById('title video').height = window.innerHeight
}