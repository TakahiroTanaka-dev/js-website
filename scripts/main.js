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

    const so = new ScrollObserver('.tween-animate-title', cb);

    const so2 = new ScrollObserver('.tween-animate-title', inview);
});

