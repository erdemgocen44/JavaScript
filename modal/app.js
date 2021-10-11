const modalBtn=document.querySelector(".modal-btn");
const PencereAc=document.querySelector(".pencere2");
const PencereKapat=document.querySelector(".kpt-btn");

modalBtn.addEventListener("click",function(){
    PencereAc.classList.add("open-modal");
});
PencereKapat.addEventListener("click",function(){
    PencereAc.classList.remove("open-modal");
});