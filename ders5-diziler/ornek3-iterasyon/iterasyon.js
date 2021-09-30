//!  DIZILERDE ITERATON yani ittirmek

//todo FOR DONGUSU

const koordinatlar = [120, 100, -100, 220, 330, -50];
let pozitif = 0;
let negatif = 0;
for (let i = 0; i < koordinatlar.length; i++) {
    koordinatlar[i] < 0 ?
        (negatif = negatif + koordinatlar[i]) :
        (pozitif = pozitif + koordinatlar[i]);
}

console.log(`negatifler toplamı : ${negatif} pozitifler toplamı : ${pozitif}`);

//! FOR DONGUSU****************
// const koordinatlar = [120, 100, -100, 220, 330, -50];

// let pozitif = 0;
// let negatif = 0;
// for (let i in koordinatlar) {
//     koordinatlar[i] < 0 ?
//         (negatif = negatif + koordinatlar[i]) :
//         (pozitif = pozitif + koordinatlar[i]);
// }

// console.log(`negatifler toplamı : ${negatif} pozitifler toplamı : ${pozitif}`);

// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
// bir dizide saklandığı varsayalım.Bu hayvanları türüne
// göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
//  ana programa döndürecek fonksiyonu yaziniz. Eğer o
// türden bir hayvan yok ise bulunamadığını yazdırsın.
const hayvanlar = [
    "aslan",
    "fil",
    "kartal",
    "kanarya",
    "aslan",
    "aslan",
    "timsah",
];

const ara = prompt("sayısını merak ettiğin hayvanın adını yaz");
const bulDondur = function(ara) {
    let hayvanSayisi = 0;
    for (let i in hayvanlar) {
        if (hayvanlar[i] == ara) hayvanSayisi++;
    }
    hayvanSayisi == 0 ?
        alert("Aradığınız hayvandan bulunamadı") :
        alert(
            `aradığınız ${ara} hayvanından ${hayvanSayisi} tane bulunmaktadır.`
        );
};
bulDondur(ara);

//!-----FOR OF DÖNGÜSÜ---------------------

let arabalar = ["BMW", "Volvo", "Mini"];

for (let i of arabalar) {
    console.log(i);
}

//! FOREACH ********************

//!  For each metodu orjinal diziyi bozmaz

let ogrenciler = ["Onur", "Hakan", "Furkan"];

ogrenciler.forEach((ogrenci) => console.log(ogrenci));

console.log(ogrenciler);
ogrenciler.forEach((deger, index) =>
    console.log(index + ".kişi " + deger + "dır")
);

//! map metodu orjinal diziyiçc değiştirmez

//todo Ornek: bütün elemanların 3 katını alınız

const rakamlar = [3, 5, 3, 2, 6, 7, 9];

console.log(rakamlar.map((x) => x * 3));

console.log(
    rakamlar.map((x, index) => `${index + 1}. elamanın 3 katı ${x * 3}`)
);

//! Ornek: isimler dizisindeki her ismi büyük harf olarak yeni bir diziye sakla

const isimler = [
    "Ahmet",
    "mehmet",
    "ismet",
    "SAFFET",
    "Can",
    "Canan",
    "Cavidan",
];
//todo map metodu bir dizi dondurur

const buyuk = isimler.map((isim) => isim.toUpperCase());

console.log(buyuk);

document.querySelector(".baslik").textContent = buyuk.join(" ");

//!--------FILTER METODU---------

//! fiyatlar dizisindeki 250 den buyuk fiyatları yazdır

const fiyatlar = [120, 260, 300, 322.5, 400, 768];

console.log(fiyatlar.filter((t) => t > 250));

//!-----------------ornek---------------

//!mması 4000$dan düşük olanlara %50 zam yapmka istiyoruz
//! ve bunu ayrı dizi olarak saklmak istiyoruz

const maaslar = [3000, 4000, 5000, 6000, 7300, 1250];

console.log(maaslar.filter((a) => a < 4000).map((a) => a * 1.5));

//! ilk harfi a olanları console de yazdır
const adlar = ["Akif", "Mine", "Dila", "Merve", "Ahmet", "Hüseyin", "Ayşen"];
adlar.filter((x) => x.startsWith("A")).forEach((x) => console.log(x));

//!  REDUCE METODU------------------------

//! reduce çıkış metodudur. reduce den sonra forEach çalışmaz

const maaslarim = [3000, 5000, 4500, 3800, 5600];

console.log(maaslarim.reduce((x, y) => x + y, 0));