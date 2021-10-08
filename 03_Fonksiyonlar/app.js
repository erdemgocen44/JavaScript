// Fonksiyonlar

//! 1.Yöntem ; Function Declaration
// Bu yöntem ile fonksiyonun tanımlanması çağırılmasından
// önce veya sonra olabilir...

//? Fonksiyon Tanımlanması

function yazdirAd() {
  console.log("Mehmet"); // Mehmet
}

//? Fonksiyonun Çağırılması

yazdirAd();
yazdirAd();
// NOt ; Bu ifadeyi kaç defa yazarsak console da o kadar yazdırmış oluruz.... 2 kere Mehmet yazdıracak

// Örnek ;

function yazdirYas() {
  console.log(`Benim adım Mehmet ve Ben ${2021 - 1979} yaşındayım`);
}
yazdirYas(); // Benim adım Mehmet ve Ben 42 yaşındayım

// Örnek ; Farklı isimleri ve farklı yaşları yazdıracak şekilde daha modüler hale getiriniz...
// Fonksiyonda hesapladığımız yaş bilgisini ana programda kullanmak istersek ne yapmalıyız ?

function yaşYazdır(ad, doğumTarihi) {
  const yaş = 2021 - doğumTarihi;
  console.log(`Benim adım ${ad} ve Ben ${yaş} yaşındayım`);
  return yaş;
}
const yaşMurat = yaşYazdır("Murat", 1990); // Benim adım Murat ve Ben 31 yaşındayım
const yaşJohn = yaşYazdır("John", 1980); // Benim adım John ve Ben 41 yaşındayım
const yaşAyşe = yaşYazdır("Ayşe", 1994); // Benim adım Ayşe ve Ben 27 yaşındayım

console.log(`Yaşların ortalaması = ${(yaşMurat + yaşJohn + yaşAyşe) / 3}`); // Yaşların ortalaması = 33

// TODO
// Örnek ; Dört işlem hesap makinasını fonksiyonlar ile tekrardan yazalım.

const sayı1 = Number(prompt("1.sayıyı giriniz:"));
const işlem = prompt("İşlemi giriniz (+, -,*,/): ");
const sayı2 = Number(prompt("2.sayıyı giriniz:"));

//! Kullanıcıdan istedikten sonra fonksiyonları tanımlayalım...

function topla(sayı1, sayı2) {
  return sayı1 + sayı2;
}
function çıkar(sayı1, sayı2) {
  return sayı1 - sayı2;
}
function çarp(sayı1, sayı2) {
  return sayı1 * sayı2;
}
function böl(sayı1, sayı2) {
  return sayı1 / sayı2;
}

//! Şimdi ise işlem yani şart kısmına geçebiliriz...

if (işlem === "+") {
  sonuç = topla(sayı1, sayı2);
} else if (işlem === "-") {
  sonuç = çıkar(sayı1, sayı2);
} else if (işlem === "*") {
  sonuç = çarp(sayı1, sayı2);
} else if (işlem === "/") {
  sonuç = böl(sayı1, sayı2);
} else {
  alert("yanlış işlem");
}
console.log(`${sayı1} ${işlem} ${sayı2} = ${sonuç}`); // Kullanıcıdan ne gelirse o çıkacak...

// Örnek ; Klavyeden girilen sayının tek mi çift mi olduğunu gösteren bir fonksiyon yazınız ?

const sayiniz = prompt("Sayı Giriniz");

console.log(tekCift(sayiniz)); // Kullanıcıdan ne gelirse o çıkacak...

function tekCift(sayiniz) {
  return sayiniz % 2 == 0 ? `${sayiniz} çifttir` : `${sayiniz} tektir`;
}

//TODO ************************************************************************************************

//! 2.Yöntem ; Function Expression
// Bu yöntem daha yaygın olarak kullanılır...

//? Örnek ;
//? 15 yazdıralım tek mi çift mi bize döndüren bir fonksiyon yazdıralım ?

const tekcift1 = function (sayi1) {
  return sayi1 % 2 == 0 ? "Çift" : "Tek";
};

console.log(tekcift1(15)); // Tek

//? Örnek ;
//? Verilen sayılardan en büyük sayıyı bulduran fonksiyonu yazdırın ?

let buyukBul = function (a, b, c) {
  let enBuyuk;

  if (a > b && a > c) {
    enBuyuk = a;
  } else if (b > c && b > a) {
    enBuyuk = b;
  } else {
    enBuyuk = c;
  }
  return enBuyuk;
};
console.log(buyukBul(5, 8, 9)); // 9

//TODO ************************************************************************************************

//! 3.Yöntem ; Function Arrow (Ok)

const ciftMi = (sayi) => (sayi % 2 == 0 ? "cift" : "tek");

const ciftMi1 = (num) => (num % 2 == 0 ? `${num} = Cift` : `${num} = Tek`);
console.log(ciftMi1(7));

//? Örnek ;

const taban = prompt("taban gir");
const us = prompt("us giriniz");

const ustAl = (taban, us) => taban ** us;
console.log(ustAl(taban, us)); // Kullanıcıdan ne gelirse o çıkacak...

// Örnek ;
const toplam = (a, b) => {
  const sonuç1 = a + b;
  return sonuç1;
};
alert(toplam(3, 2)); // 5 // !(Cevap console da değil alert kısmında yazmış olacak)

// TODO Üstteki soru ile ilgili önemli Not;
//! Fonksiyon satır sayısı birden fazla ise süslü parantez kullanmalıyız.
//! Eğer süslü parantez kullanıldı ise return de kullanmalıyız.

// Örnek ; SORU: Bir dairenin alanını hesaplayan fonksiyonu arrow fonksiyon olarak yazınız.
// Yarıçap prompt ile girilmeli ve sonuç ana programda yazdırılmalıdır.

const r = +prompt("Yarıçapı Giriniz");
const alan = (r) => Math.PI * r * r;
console.log(`Alan(${r}): ${alan(r)}`); // Kullanıcıdan ne gelirse o çıkacak...

//! ÖNEMLİ: prompt fonksiyonun önündeki + klavyeden girilen sayının string kabul
//! edilmesini engellemektedir.

// Örnek ; Doğum tarihini parametre olarak alan ve ana programa yaşı
// hesaplayıp döndüren fonksiyonu yazınız.

//? 1. yol

const yaşiYazdır = (doğumTarihi) =>
  `Yaşım ${new Date().getFullYear() - doğumTarihi}`;
alert(yaşiYazdır(2000)); //! (Cevap console da değil alert kısmında yazmış olacak)

//? 2. yol

const yaşimYazdır = (doğumTarihi) => {
  const yaşim = new Date().getFullYear() - doğumTarihi;
  return `Yaşım ${yaşim}`;
};
alert(yaşimYazdır(2000)); //! (Cevap console da değil alert kısmında yazmış olacak)

// Örnek ;
const yaşHesapla = (doğumTarihi) => 2021 - doğumTarihi;
alert(yaşHesapla(1979)); // 42 //! (Cevap console da değil alert kısmında yazmış olacak)

// Örnek ;
let selamVer = () => alert("Merhaba Arkadaşlar");
selamVer(); // Merhaba Arkadaşlar //! (Cevap console da değil alert kısmında yazmış olacak)

// Örnek ;
const üsAl = (taban, üs) => taban ** üs;
console.log(üsAl(2, 3)); // 8

// Örnek ;
const tekMi = (x) => (x % 2 ? "TEK" : "ÇİFT");
console.log(tekMi(8)); // ÇİFT

//TODO ************************************************************************************************

//! Fonksiyon Yöntem Karşılaştırması

// 1. yöntem ; Function declaration
function toplam2(c, d) {
  return c + d;
}
alert(toplam2(1, 2)); // 3 //! (Cevap console da değil alert kısmında yazmış olacak)

// 2. yöntem ;  Function expression
const toplam3 = function (e, f) {
  return e + f;
};
alert(toplam3(1, 2)); // 3 //! (Cevap console da değil alert kısmında yazmış olacak)

// 3. yöntem ; Arrow fonksiyonu
const toplam4 = (g, h) => g + h;
alert(toplam4(1, 2)); // 3 //! (Cevap console da değil alert kısmında yazmış olacak)

//TODO ************************************************************************************************

//! Fonksiyonlarda Scope Kavramı

/*
1. Function-Scope ; Bir değişken fonksiyon içerisinde tanımlanmış ise sadece o
fonksiyon içerisinde geçerlidir...
*/

/*
2. Global-Scope ; Değişken ana programda tanımlanmış ise tüm kod içerisinde geçerlidir...
NOT: Global scope da değişkene fonksiyon içerisinden veya dışında erişilebilir.
Güvenlik açısından sorun oluşturabilir.
*/

//! Destekleyici Örnek ;

let sayı3 = 5;
const fonk2 = function () {
  sayı3 = 10;
  console.log(`Fonk. İçi: ${sayı3}`); // Fonk. İçi:10
};
fonk2();
console.log(`Fonk. Dışı: ${++sayı3}`); // Fonk. Dışı: 11 (10+1=11)

/*
3. Block-Scope ; Sadece tanımlandığı alt alanda (blokta) geçerli olan değişkenlere
 block-scope değişkenler denilir.
• ES6 ile gelen bir özelliktir.
*/

// Örnek ; Global ve function scope değişkenler aynı anda kullanılır ise:
let sayı4 = 3;
const fonk3 = function () {
  let sayı4 = 7;
  console.log(`Fonk. İçi: ${sayı4}`); // Fonk. İçi:7
};
fonk3();
console.log(`Fonk. Dışı: ${++sayı4}`); // Fonk. Dışı: 4 (3+1=4)
