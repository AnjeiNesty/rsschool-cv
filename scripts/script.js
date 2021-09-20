document.addEventListener('DOMContentLoaded', function () {
    const windowWidth = window.innerWidth;
    const burger = document.querySelector('.hamburger');
    const body = document.querySelector('body');
    const date = document.querySelector('#date');
    const menu = document.querySelector('nav');

    date.innerHTML = new Date().getFullYear();

    if(windowWidth < 1024) {
        body.classList.remove('hover');
    }

    burger.addEventListener('click', function () {
        if (!this.closest('header').classList.contains('open-mobile')) {
            this.closest('header').classList.add('open-mobile');
            this.classList.add('is-active');
            body.classList.add('open-mobile-menu');
        } else {
            this.closest('header').classList.remove('open-mobile');
            this.classList.remove('is-active');
            body.classList.remove('open-mobile-menu');
        }
    })

    menu.addEventListener('click', function (e) {
        let link = e.target;
        if (link.classList.contains('link')) {
            this.closest('header').classList.remove('open-mobile');
            body.classList.remove('open-mobile-menu');
            e.preventDefault();
            scrollToTarget(link.hash);
        }
    });



});




function scrollToTarget(id) {
    let target = document.querySelector(id);
    if (target !== null) {
        let pos = target.offsetTop - 40;
        window.scrollTo({
            top: pos,
            behavior: 'smooth'
        });
    }
}


