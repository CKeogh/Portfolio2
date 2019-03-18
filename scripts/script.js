
const navBar = document.querySelector('.navbar');

const handleScroll = (event) => {
    window.setTimeout(() => {
        if (![...navBar.classList].includes('scrolledStyle')) {
            navBar.classList.add('scrolledStyle')
            navBar.classList.add('fade')
        }
    }, 2000)
}

window.addEventListener('scroll', handleScroll)