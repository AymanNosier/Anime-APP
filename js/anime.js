new WOW().init();

function search()
{
    document.getElementById("searchch").style="opacity:1";
}
function search2()
{
    document.getElementById("searchch").style="opacity:0";
}
const swiper = new Swiper('.swiper', {
loop: true,
pagination: {
el: '.swiper-pagination',
},
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
});
let uup=document.querySelector(".up");
window.onscroll=function(){
this.scrollY>=1000 ? uup.classList.add("show") : uup.classList.remove("show") ;
};
uup.onclick=function(){
window.scrollTo({
top:"0",
behavior:"smooth",
});
};