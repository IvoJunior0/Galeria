// FAZ O POP-UP DAS IMAGENS
$(document).ready(function() {
    $('.fotos').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled:true
        }
    })
    $('.videos').magnificPopup({
        delegate: 'a',
        type: 'iframe',
        gallery:{
            enabled:true
        }
    })
});
// ADICIONA A CLASSE ANIMATE PARA ANIMAR NO SCROLL
const animationElements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    })
}, {
    threshold: 0.5
});
// OBSERVA CADA ELEMENTO COM A CLASSE .animate-on-scroll
for (let i = 0; i < animationElements.length; i++){
    const el = animationElements[i];
    observer.observe(el);
}