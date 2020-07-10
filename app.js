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

function replaceText(el) {
    return el.innerHTML = el.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}


header.addEventListener('mousemove', function (e) {
    let h1 = document.querySelector("#head-title");
    let moveX = e.offsetX / 15;
    this.style.backgroundColor = `rgba(${moveX}, 125, 200,0.8)`;
    let moveHeadX = e.offsetX / -20;
    let moveHeadY = e.offsetY / -35;
    h1.style.transform = `translate(${moveHeadX}px,${moveHeadY}px)`;
})

let footer = document.querySelector('footer')
let footerHead = document.getElementById('footer-header')
console.log(footerHead)
footer.addEventListener('mousemove', function (e) {
    let colorX = e.offsetX / 20;
    let moveHeadX = e.offsetX / -20;
    let moveHeadY = e.offsetY / -35;
    this.style.backgroundColor = `rgba(${colorX}, 190, 195,0.8)`;
    footerHead.style.transform = `translate(${moveHeadX}px,${moveHeadY}px)`;
})

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

//* Menu animation

let links = document.querySelectorAll('.list-item__link')

links.forEach(link => {
    replaceText(link)
    let animation = anime({
        targets: link.children,
        scale: [1, 0.5],
        // translateX: 20,
        rotate: 90,
        opacity: 0,
        direction: 'alternate',
        easing: 'easeInOutSine',
        duration: 600,
        delay:(el, i) => i * 80,
        loop: 1,
        autoplay: false,
    })
    link.onclick = animation.play
})

//* marker
let marker = document.querySelector('#marker')
let items = document.querySelectorAll('.list-item__link')

function indicator(e) {
    marker.style.left = e.offsetLeft + 'px'
    marker.style.width = e.offsetWidth + 'px'
}
items.forEach(item => {
    item.addEventListener('click', function (e) {
        setTimeout(() => {
            items.forEach(link => link.classList.remove('act'));
            this.classList.add('act')
            indicator(item)
        }, 1200)
    })
})

AOS.init({
    offset: 400, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800 // values from 0 to 3000, with step 50ms
});