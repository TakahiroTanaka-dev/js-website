document.addEventListener('DOMContentLoaded', function () {
    const hero = new HeroSlider('.swiper-container');
    hero.start();

    const cb = function (el, isIntersecting) {
        if(isIntersecting) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    } 　

    const inview = function (el, inview){
        if(inview){
            el.classList.add('inview');
        } else {
            el.classList.remove('inview')
        }
    }

    const header = document.querySelector('.header');
    const navAnimation = function (el, inview){
        
        if(inview){
            header.classList.remove('triggered');
        } else {
            header.classList.add('triggered');
        }
    }

    const sides = document.querySelectorAll('.side')
    const sideAnimation = function (el, inview){
        
        if(inview){
            this.sides.forEach( side => {
                side.classList.remove('inview');
            })
        } else {
            this.sides.forEach( side => {
                side.classList.add('inview');
            })
        }
    }

    const so = new ScrollObserver('.tween-animate-title', cb);

    const so2 = new ScrollObserver('.tween-animate-title', inview);

    const so3 = new ScrollObserver('.nav-trigger', navAnimation, {once: false});

    const so4 = new ScrollObserver('.appear', inview);

    const so5 = new ScrollObserver('#main-content', sideAnimation);

    new MobileMenu();
});

