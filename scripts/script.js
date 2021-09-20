
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('pre code').forEach((el) => {
        console.log(el)
        hljs.highlightElement(el);
    });

    const burger = document.querySelector('.hamburger');
    const body = document.querySelector('body');
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

});