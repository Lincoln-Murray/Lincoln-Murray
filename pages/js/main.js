menu_open = false

addEventListener('scroll', (evt) => {
    if (document.documentElement.scrollTop > window.innerHeight*0.05) {
        document.getElementById('header').style.backgroundColor = 'var(--highlight_color)'
    }
    else {
        document.getElementById('header').style.backgroundColor = 'transparent'
    }
    });

addEventListener('click', (evt) => {
    let El = evt.target
    console.log(El)
    if (El === menu_button || (El != menu_element && menu_open === true)) {
        menu()
    }
});

addEventListener('DOMContentLoaded', (evt) => {
    menu_element = document.getElementById('menu')
    menu_button = document.getElementById('menu_button')
    resize()
});

addEventListener('resize', (evt) => {
    resize()
});

function menu() {
    if (!menu_open) {
        document.getElementById('menu').style.left = '0'
        menu_open = true
    }
    else {
        document.getElementById('menu').style.left = 'calc(-1*var(--menu_width))'
        menu_open = false
    }
}

function resize() {
    document.getElementById('window div').height = window.innerHeight
    document.getElementById('window div').width = window.innerWidth
    document.getElementById('title video').height = window.innerHeight
    document.getElementById('main').height = 3*window.innerHeight
}