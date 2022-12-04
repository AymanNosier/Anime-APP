new WOW().init();
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