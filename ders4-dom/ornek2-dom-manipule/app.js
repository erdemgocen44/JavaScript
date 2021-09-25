//! ara butonuna tıklandığında çalan telefom çıksın ve zil çalsın
let resim = document.querySelector(".resim"); //!resime ulaştım
let ring = document.querySelector(".ses"); //!ara butonuna ulaştım
document.querySelector(".on").onclick = function() {
    resim.src = "./img/img.gif"; //!resim değiştirdim
    ring.play(); //!sesi çaldım
};

//todo bağlat butonuna basınca gif gelsin ses kesilsin
//!bağlat butounu çağırdık
document.querySelector(".off").onclick = function() {
    resim.src = "./img/telbagla.gif"; //resim değiştirdik
    ring.pause(); //!tel sesini susturduk
};

//todo konuş butonuna basınca yeni gif gelsin

document.querySelector(".speak").onclick = function() {
    resim.src = "./img/telfirlat.gif";
};

//! ekle butonuna basıldığında yeni bir li ekle

document.querySelector(".ekle").onclick = function() {
    const liste = document.querySelector(".liste");
    const giris = document.querySelector(".dil");

    liste.innerHTML = liste.innerHTML + `<li>${giris.value}</li>`;
    giris.value = "";
};

//!sil butonu tıklandığında li elemanı silinsin

document.querySelector(".sil").onclick = function() {
    const liste = document.querySelector(".liste");
    liste.removeChild(liste.lastChild);
};