let moon = document.getElementById('moon');
let text = document.getElementById('text');
let train = document.getElementById('train');

let desert_moon = document.getElementById("desert-moon");
let man = document.getElementById('man');

window.addEventListener("scroll", function () {

    let value = window.scrollY;
    moon.style.top = value * 0.6 + "px";
    text.style.top = 80 + value * -0.2 + "%";
    train.style.left = value * 1.0 + "px";

    desert_moon.style.top = value * .3 + "px";
    man.style.left = value * .5 + "px";

});



// progress bar

let calculateScrollDistance = () => {
    let scrollprogress = document.getElementById("progress")
    let scrollDistance = document.documentElement.scrollTop;

    let calcheight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollvalue = Math.round((scrollDistance * 100 / calcheight));
    console.log(scrollvalue);

    if (scrollDistance > 100) {
        scrollprogress.style.display = "grid";
    }
    else {
        scrollprogress.style.display = "none";
    }

    scrollprogress.addEventListener("click", () => {

        document.documentElement.scrollTop = 0;
    });

    scrollprogress.style.background = `conic-gradient(#194eb9 ${scrollvalue}%, #67ccff ${scrollvalue}%)`;
};


window.onscroll = calculateScrollDistance;
window.onload = calculateScrollDistance;



// Get the elements
let overlay = document.getElementById('overlay');
let btnReadMore = document.querySelectorAll('.btn');
let btnClose = document.getElementById('btn-close');

// Function to open overlay
function openOverlay() {
    overlay.style.display = 'block';
}

// Function to close overlay
function closeOverlay(event) {
    event.preventDefault(); // Prevent default action of anchor tag
    overlay.style.display = 'none';
}

// Attach click event to Read More buttons
btnReadMore.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default action of anchor tag
        openOverlay();
    });
});

// Attach click event to Close button
btnClose.addEventListener('click', closeOverlay);




let listBg = document.querySelectorAll('.bg');
let banner = document.querySelector('.banner');

window.addEventListener("scroll", () => {
    let top = window.scrollY;
    let bannerTop = banner.offsetTop;
    let bannerHeight = banner.offsetHeight;

    // Check if .banner is in the viewport
    if (top > bannerTop && top < (bannerTop + bannerHeight)) {
        let offset = top - bannerTop;

        listBg.forEach((bg, index) => {
            if (index != 0 && index != 8) {
                bg.style.transform = `translateY(${(offset * index / 2)}px)`;
            } else if (index == 0) {
                bg.style.transform = `translateY(${(offset / 3)}px)`;
            }
        });
    }
});
