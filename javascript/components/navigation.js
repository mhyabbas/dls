document.addEventListener('DOMContentLoaded', function () {

    // Toggle button
    var toggle = document.querySelector(".nav__toggle");
    var nav = document.querySelector(".nav__list");

    function toggleNav(e) {
        e.preventDefault();
        if (nav.classList.contains("active")) {
            nav.classList.remove("active");

            // adds the menu icon
            toggle.querySelector("a").innerHTML = "<svg><use xlink:href='#icon-toggle'/></svg>"; 
        } else {
            nav.classList.add("active");

            // adds the close icon
            toggle.querySelector("a").innerHTML = "<svg><use xlink:href='#icon-close'/></svg>";
        }
    }

    toggle.addEventListener("click", toggleNav, false);

    // Nav item click: close nav
    function closeNav() {
        nav.classList.remove("active");
        toggle.querySelector("a").innerHTML = "<svg><use xlink:href='#icon-toggle'/></svg>"; 
    }

    let link = Array.prototype.slice.call(document.querySelectorAll(".nav__link"));
    link.forEach(function(e) {
        e.addEventListener('click', closeNav);
    });

    // Logo click: close nav
    document.querySelector('.nav__logo a').addEventListener('click', closeNav);

    // Scroll down: update background colour
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            nav.classList.add("scroll");
        } else {
            nav.classList.remove("scroll");
        }
    }

}, false);