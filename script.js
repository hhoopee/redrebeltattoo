const header = document.querySelector('.header');

window.addEventListener('resize', () => {
    const clientHeight = document.documentElement.clientHeight;
    if (clientHeight < 701) {
        header.style.height = 700 + 'px';
    }
})


// console.log(clientHeight)

const slides = document.querySelectorAll('.slide');
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');

slides.forEach((slide, index) => {
    if (index === 0) {
        slide.style.left = '0px';
    } else {
        slide.style.left = `${index * 590 + 20}px`;
    }
})

arrowRight.addEventListener('click', () => {
    slides.forEach((slide, index) => {
        if (index === 0) {
            slide.style.left = `${parseInt(slide.style.left) - 590}px`;
        } else {
            slide.style.left = `${parseInt(slide.style.left) - 610}px`;
        }
        
    })
})

arrowLeft.addEventListener('click', () => {
    slides.forEach((slide, index) => {
        if (index === 0) {
            slide.style.left = `${parseInt(slide.style.left) + 590}px`;
        } else {
            slide.style.left = `${parseInt(slide.style.left) + 610}px`;
        }
    })
})