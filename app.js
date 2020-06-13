const header = document.getElementById("header");

function splitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
            duration: '200%',
            triggerElement: '.about-title',
            triggerHook: 0
        })
        .setPin('.about-title')
        .addTo(controller);
}

splitScroll();

header.onmousemove = function (e) {
    let moveX = e.offsetX / 15;
    this.style.backgroundColor = `rgba(${moveX}, 125, 200,0.8)`;
    let h1 = document.getElementById("head-title");
    let moveHeadX = e.offsetX / -20;
    let moveHeadY = e.offsetY / -35;
    h1.style.transform = `translate(${moveHeadX}px,${moveHeadY}px)`;
};

function parallax(element, transform, distance, speed) {
    const items = document.querySelectorAll(element)
    items.forEach(item => item.style.transform = `${transform}(${distance * speed}px)`)
}

function letterSpace(element, distance, speed) {
    const items = document.querySelectorAll(element)
    items.forEach(item => item.style.letterSpacing = `${distance / speed}px`)
}

window.onscroll = function () {
    parallax('header', 'translateY', window.scrollY, .5)
    parallax('h3', 'translateX', -window.scrollY, 1 / 10)
    letterSpace('h1', window.scrollY, 100)
}

let marker = document.querySelector('#marker')
let items = document.querySelectorAll('.list-item__link')

function indicator(e) {
    marker.style.left = e.offsetLeft + 'px'
    marker.style.width = e.offsetWidth + 'px'
}
items.forEach(item => {
    item.onclick = function (e) {
        items.forEach(link => link.classList.remove('act'));
        this.classList.add('act')
        indicator(e.target)
    }
})