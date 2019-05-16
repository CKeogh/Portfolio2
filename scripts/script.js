
const navBar = document.querySelector('.navbar');

const handleScroll = (event) => {
    if (window.scrollY > 630 && ![...navBar.classList].includes('scrolledStyle')) {
        navBar.classList.remove('fadeInDown')
        navBar.classList.add('scrolledStyle')
        navBar.classList.add('slideInDown')
    } else if (window.scrollY < 630 && [...navBar.classList].includes('scrolledStyle')) {
        navBar.classList.remove('scrolledStyle');
        navBar.classList.remove('slideInDown');
    }
}

window.addEventListener('scroll', handleScroll)