/**
* Template Name: PhotoFolio - v1.0.0
* Template URL: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";


  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});

/*-----TYPEWRITER*/
var app = document.getElementById('heading2');

var typewriter = new Typewriter(app, {
    loop: true,
    cursor:"💎",
    delay: 25,
});

typewriter.typeString('Best Web Development & Digital Marketing Company')
    .pauseFor(2500)
    .deleteAll(25)
    .typeString('Take Your Business To Next Level')
    .pauseFor(2500)
    .deleteAll(25)
    .typeString('Highly Affordable Pricing')
    .pauseFor(2500)
    .start();


function magictext(delay=100) {
  `element must have "magictext" attribute to see fading effect`

  $('[magicktext]').each(function(index, el) {
    el= $(el)
    text=el.text()
    words=text.split(' ').filter(n=>n)
    el.empty()
    words.forEach((w,i)=>{
      let word=$(`<w class="hide">${w} </w>`)
      el.append(word)

      setTimeout( ()=>{word.addClass('show')},delay*i)
      
      console.log(i)
    })
    console.log(el,words)

  });
  // body...
}
magictext()

/*-----COMPONENT LOADER*/
$(document).ready(function() {
  $('[data-load]').each(function(index, el) {
    $.get($(el).attr('data-load'), function(data) {
      // console.log("LOADED SUCCESS",el)
      $(el).html(data)
    });
  });
});

/*-----CURSOR*/
var cursor = {
    delay: 4,
    _x: 0,
    _y: 0,
    endX: window.innerWidth / 2,
    endY: window.innerHeight / 2,
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector(".cursor-dot"),
    $outline: document.querySelector(".cursor-dot-outline"),

    init: function () {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;

        this.setupEventListeners();
        this.animateDotOutline();
    },

        updateCursor: function(e) {
            var self = this;

            console.log(e)

            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
        },

    setupEventListeners: function () {
        var self = this;

        // Anchor hovering
        document.querySelectorAll("a").forEach(function (el) {
            el.addEventListener("mouseover", function () {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener("mouseout", function () {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });

        // Click events
        document.addEventListener("mousedown", function () {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener("mouseup", function () {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });

        document.addEventListener("mousemove", function (e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + "px";
            self.$dot.style.left = self.endX + "px";
        });

        // Hide/show cursor
        document.addEventListener("mouseenter", function (e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        });

        document.addEventListener("mouseleave", function (e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        });
    },

    animateDotOutline: function () {
        var self = this;

        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + "px";
        self.$outline.style.left = self._x + "px";

        requestAnimationFrame(this.animateDotOutline.bind(self));
    },

    toggleCursorSize: function () {
        var self = this;

        if (self.cursorEnlarged) {
            self.$dot.style.transform = "translate(-50%, -50%) scale(0.75)";
            self.$outline.style.transform = "translate(-50%, -50%) scale(1.5)";
        } else {
            self.$dot.style.transform = "translate(-50%, -50%) scale(1)";
            self.$outline.style.transform = "translate(-50%, -50%) scale(1)";
        }
    },

    toggleCursorVisibility: function () {
        var self = this;

        if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        }
    }
};

cursor.init();

// ---- SWAMIX EXPERIENCE MOD
// semiscroll= $(window).bind('DOMMouseScroll mousewheel', function(event) {
//   event.preventDefault()
//     console.log(event)
//     if (event.originalEvent.wheelDelta >= 0) {
//         window.scrollTo(0, window.scrollY - window.innerHeight / 2);
//         console.log('Scroll up');
//     }
//     else {
//         console.log('Scroll down');
//         window.scrollTo(0, window.scrollY + window.innerHeight / 2);
//     }
// });

$('body').on({
    'mousewheel': function(e) {
        if (e.target.id == 'el') return;
        e.preventDefault();
        e.stopPropagation();
    }
})

$(window).on('wheel', function(e) {

  var delta = e.originalEvent.deltaY;

  if (delta > 0) $('body').text('down');
  else $('body').text('up');

  return false; // this line is only added so the whole page won't scroll in the demo
});


$(document).ready(function() {
  $('video').each(function() {
      // $(this).get(0).pause();
  });
});
