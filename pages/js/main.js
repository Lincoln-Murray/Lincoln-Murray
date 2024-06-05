addEventListener('scroll', (evt) => {
    if (document.documentElement.scrollTop > 70) {
        document.getElementById('header').style.backgroundColor = '#214066'
    }
    else {
        document.getElementById('header').style.backgroundColor = 'transparent'
    }
    });