
const navBar = document.querySelector('.navbar');

const handleScroll = (event) => {
    if (window.scrollY > 530 && ![...navBar.classList].includes('scrolledStyle')) {
        navBar.classList.add('scrolledStyle')
    } else if (window.scrollY < 530 && [...navBar.classList].includes('scrolledStyle')) {
        navBar.classList.remove('scrolledStyle');
    }
}

window.addEventListener('scroll', handleScroll)