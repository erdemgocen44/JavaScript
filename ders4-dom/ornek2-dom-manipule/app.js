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
    liste.removeChild(liste.lastElementChild);
};

//todo  programlama dillerine h1 create ediyoruz..

const paragraf = document.querySelector(".forH1");
paragraf.innerHTML = `<h1>${"Programlama Dilleri"}</h1>`;

//! Klavyeden bir tuşa basıldığında büyüsün-küçülsün

document.querySelector(".textbox").onkeyup = function() {
    const checkbox = document.querySelector(".checkbox");
    const textbox = document.querySelector(".textbox");

    if (checkbox.checked) {
        textbox.value = textbox.value.toUpperCase();
    } else {
        textbox.value = textbox.value.toLoverCase();
    }
};

//! mouse  resmin üzerine geldiğinde aslan kükresin

resim.onmouseover = function() {
    resim.src = "./img/aslan2.jpeg";
};

//todo mouse üzerinden çekildiğinde
resim.onmouseout = function() {
    resim.src = "./img/aslan1.jpeg";
};

//! Delete ve Enter tuşu ile ekleme ve çıkarma

document.querySelector(".dil").onkeydown = function(klavye) {
    if (klavye.keyCode == 13) {
        //!Enter ı çağırma
        document.querySelector(".ekle").onclick();
    }
    if (klavye.keyCode == 46) {
        //todo Delete yi çağırma
        document.querySelector(".sil").onclick();
    }
};