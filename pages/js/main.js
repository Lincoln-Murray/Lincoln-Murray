menu_open = false

addEventListener('scroll', (evt) => {
    distance_top = document.documentElement.scrollTop
    if (distance_top > window.innerHeight*0.05) {
        document.getElementById('header').style.backgroundColor = 'var(--highlight_color)'
    }
    else {
        document.getElementById('header').style.backgroundColor = 'transparent'
    }
    if (distance_top > 2*934){
        scroll_top_element.style.visibility = 'visible'
        scroll_top_element.style.backgroundColor = 'var(--highlight_color)'
        scroll_top_element.style.width = '10%'
        scroll_top_element.style.height = '5%'
        scroll_top_element.style.minWidth = '150px'
        scroll_top_link_element.style.Color = 'var(--background_color)'
    }
    else {
        scroll_top_element.style.visibility = 'hidden'
        scroll_top_element.style.backgroundColor = 'transparent'
        scroll_top_element.style.width = '0%'
        scroll_top_element.style.height = '0%'
        scroll_top_element.style.minWidth = '0'
        scroll_top_link_element.style.Color = 'var(--highlight_color)'
    }
    });

addEventListener('click', (evt) => {
    let El = evt.target
    console.log(El)
    if (El === menu_button || ((El != menu_element || El in menu_element.children) && menu_open === true)) {
        menu()
    }
});

addEventListener('DOMContentLoaded', (evt) => {
    menu_element = document.getElementById('menu')
    menu_button = document.getElementById('menu_button')
    scroll_top_element =  document.getElementById('scroll top')
    scroll_top_link_element = document.getElementById('scroll top link')
    window_div = document.getElementById('window div')
    resize()
});

addEventListener('resize', (evt) => {
    resize()
});

function menu() {
    if (!menu_open) {
        menu_element.style.left = '0'
        menu_open = true
    }
    else {
        menu_element.style.left = 'calc(-1*var(--menu_width))'
        menu_open = false
    }
}

function resize() {
    window_div.height = window.innerHeight
    window_div.width = window.innerWidth
    document.getElementById('title video').height = window.innerHeight
    if (window.innerWidth <= 300) {
        return
    } 
}