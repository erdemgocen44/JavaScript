const maaslar = [4000, 5000, 3500, 7200, 3450, 2850, 7500];

const liste = document.querySelector(".liste-ul");

for (let i in maaslar) {
    liste.innerHTML = liste.innerHTML + `<li> ${maaslar[i]}</li>`;
}

//! ekle butonuna tıkladığımızda diziye ve listeye eleman ekleme

const giris = document.querySelector(".liste");

document.querySelector(".ekle").onclick = function() {
    liste.innerHTML = liste.innerHTML + `<li>${giris.value}</li>`;
    giris.value = "";
    maaslar.push(giris.value);
    console.log(maaslar);
    aciklamaGuncelle(maaslar);
};

//!   Sil butonu--------
document.querySelector(".sil").onclick = function() {
    if (maaslar.length == 0) {
        alert("Silinecek oge kalmadı");
    } else {
        maaslar.pop();
        liste.removeChild(liste.lastElementChild);
        aciklamaGuncelle(maaslar);
    }
};

const aciklamaGuncelle = function(maaslar) {
    document.querySelector("acıklama").innerHTML = `Maaşlar.${maaslar}`;
};