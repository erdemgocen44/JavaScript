const yaslar = [5, 10, 28, 42];
const isimler = [
    "Merve",
    "Mine",
    "Dila",
    "Akif",
    20,
    40,
    true,
    23.7,
    yaslar,
    "Ayşe",
    "Emre",
];

console.log(isimler[3]);

console.log((isimler[3] = "Halide")); //! const degistirilemiyordu ama non-primitive' lerde(arraylerde) degistirilebiliyor. Dizi bir adres gosterir isimler gibi, o yüzden primitive' den farkli

console.log(isimler[8][1]);

//! Diziyi Değiştiren Metotlar

let meyveler = ["Elma", "Armut", "Muz", "Kivi"];

const baslik = document.querySelector(".baslik");

//pop(en son elemanı siler )log içinde yazdırırsanuız silediği elemanı gösterir

console.log(meyveler.pop()); //! (Elma,Armut,Muz)

//todo SHİFT dizinin 0 indexli ilk elemanını siler ve yazdırırsak silinen elemanı gösterir

console.log(meyveler.shift()); //! (Armut,Muz)

//todo silme metotları log da yazdırılırsa sildiği elemanı döndürür

//! push() dizinin sonuna eleman ekler// istersen length-1 ile de eklenir

meyveler.push("Çilek", "Karpuz");

meyveler.unshift("Ayva");

meyveler.sort();

//splice()

meyveler.splice(1, 0, "erik");

meyveler.splice(4, 1, "üzüm");

//! reverse ()diziniin tamamını ters çevirir

meyveler.reverse();

//! ********DİZİ ERİŞİM METOTLARI(diziyi değiştirmez)

const sayilar = [3, 4, 5, 2, "2", "uc", "bes", 5, 2, 7];

console.log(sayilar.includes("5")); //todo false// includes (kapsıyormu demek)
console.log(sayilar.includes(5));

console.log(sayilar.indexOf(2)); //! 2nin indexi nedir // 3

console.log(sayilar.lastIndexOf(5)); //todo 5in son indexi nedir // 7

console.log(sayilar.indexOf(2, 4)); //! 4.indexden sonraki 2 nin indexi nedir//8

console.log(sayilar.indexOf(5, 3)); //todo 73 den sonraki 5in indexi

//! join()dizinin elemanlarını birleştirip String hale getirir

console.log(sayilar.join()); //todo (3,4,5,2,2,uc,bes,5,2,7)

console.log(sayilar.join(" ")); //!boşlukla ayırır

console.log(sayilar.join("-")); //todo - ile ayırır

//! join default olarak virgülle ayırır. ama istersek " " ile yada - koyarak da kullanabiliriz..
//todo Bunun haricinde join()'e benzer olarak toString de var ama o sadece virgülle ayırır

console.log(sayilar.toString()); //! 3,4,5,2,2,uc,bes,5,2,7

//!************************************

const arabalar = ["bmw", "mercedes", "Volvo", "sahin", "anadol"];

//! slice

console.log(arabalar.slice(2)); //! 2.indexli elemandan itibaren al gel

console.log(arabalar.slice(1, 3)); //todo 1 dahil 3 dahil değil

//todo CONCAT methodu

const birlesik = sayilar.concat(arabalar, true, false, 3, 4, 5, meyveler); //! sayilar ile arabalar listelerini birleştirdi
console.log(birlesik);

baslik.textContent = sayilar;
console.log(sayilar);