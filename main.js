import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log("Hello world!");

const swiper = new Swiper(".swiper", {
    // slide 間距
    spaceBetween: 24,
    slidesPerView: 3,
    // Scrollbar
    scrollbar: {
        el: ".swiper-scrollbar"
    },
    // 使 swiper 可以使用滑鼠滾輪捲動
    mousewheel: true
});
