const header = document.querySelector('.header');

window.addEventListener('resize', () => {
    const clientHeight = document.documentElement.clientHeight;
    if (clientHeight < 701) {
        header.style.height = 700 + 'px';
    }
})


// console.log(clientHeight)