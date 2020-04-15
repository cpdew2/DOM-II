// Your code goes here
const navigation = document.querySelectorAll('.nav')
navigation.forEach(navigation => {
navigation.addEventListener('mouseover', e => {
e.target.style.border = '3px solid green';
})
})

const funBusImg = document.querySelector('.intro')
funBusImg.addEventListener('dblclick', e => {
e.target.style.border = '3px solid hotpink';
})

const button = document.querySelectorAll('.btn')
button.forEach(button =>{
    button.addEventListener('click', e => {
        e.target.style.border = '3px solid red';
    })
})

const letsGo = document.querySelector('.text-content h2')
letsGo.addEventListener('keydown', e => {
    e.target.style.border = '3px solid hotpink';
}) 

const logoHeading = document.querySelector('.logo-heading')
logoHeading.addEventListener('drag', e => {
    logoHeading.style.transform = 'rotate(180deg)';
});

const destinationImg = document.querySelector('.content-destination')
destinationImg.addEventListener('dblclick', e => {
destinationImg.style.transform = 'rotate(360deg)';
})

const allPs = document.querySelectorAll('.go')
allPs.forEach((p) => {
    p.addEventListener('mousedown', () => {
        
        console.log('working')
        p.target.style.backgroundColor = 'lightblue';
        p.target.style.color = 'hotpink';
    })
    p.addEventListener('mouseup', () => {
        p.target.style.backgroundColor = 'transparent';
        p.target.style.color = 'black';

    })
})


navLinks.forEach((link) => {
    link.addEventListener('click', e => {
        e.preventDefault();
    })
    })

const footer = document.querySelector('.footer p');
e.stopPropagation();
footer.addEventListener('wheel', e => {
    footer.style.color = '#FFFFFF';
})


