menu_open = false

addEventListener('scroll', (evt) => {
    distance_top = document.documentElement.scrollTop
    if (distance_top > window.innerHeight*0.05) {
        document.getElementById('header').style.backgroundColor = 'var(--highlight_color)'
    }
    if (distance_top > 1400){
        document.getElementById('scroll top').style.visibility = 'visible'
        document.getElementById('scroll top').style.backgroundColor = 'var(--highlight_color)'
        document.getElementById('scroll top').style.width = '10%'
        document.getElementById('scroll top').style.height = '5%'
        document.getElementById('scroll top link').style.Color = 'var(--background_color)'
    }
    else {
        document.getElementById('scroll top').style.visibility = 'hidden'
        document.getElementById('scroll top').style.backgroundColor = 'transparent'
        document.getElementById('scroll top').style.width = '0%'
        document.getElementById('scroll top').style.height = '0%'
        document.getElementById('scroll top link').style.Color = 'transparent'
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