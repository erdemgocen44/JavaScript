// console.log("Hello Javascript");
// alert("Dikkat");
// console.warn("Bu bir uyarıdır");
// console.error("Bu bir hatadır!!");
// prompt("Adınızı giriniz : ")

//== değisken tanımlama=====

//===var===
var isim = "mine";
console.log(typeof isim);
isim = 3.14;

// ? Ancak, modern JS var keyword’unun kullanımı azaldı.
//? Çünkü, var global değişken gibi düşünülebilir.
// ? Günümüzde programcılar global değişken gerekmedikçe VAR tercih etMEMEKtedir.

//===CONST===
// TODO: const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword’leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitive’ler hariç).mümkünse const, yoksa let, o da mümkün değilse var kullanılmalı. çünkü js de çok rahat değişiklik yapılıyor, var, let sıkıntı çıkarabilir.
const isim1 = "osman";

console.log(typeof isim1);

//==LET==

let fiyat;
fiyat = 10;
console.log(typeof fiyat);
fiyat = "Erdem";
console.log(fiyat);

// ? Eğerki değişkenimizin değerinin değişmesi gerekiyor ise const kullanamayız.
// ? Bunun yerine LET kullanabiliriz.
// ! LET Block-scope bir değişkendir. VAR ise global-scope bir tanımlamadır.
// * Block-scope: Sadece tanımlı olduğu alanda geçerlidir.

//string tanımlamak için 3 farklı karakter kullanılabilir.
let name1 = "Akif";
let name2 = "Mine";

//==ARİTMETİK OPERATORLER====

const kola = 5;
const cips = 6;
const ekmek = 2;
console.log(kola + cips + ekmek);
console.log("toplam fiyat : ", kola + cips + ekmek);

const ad = "can";
const soyad = "canan";

console.log(ad + soyad);

const s1 = 7;
let s2 = "7";
console.log(s1 + s2);

console.log("benim adım : ", ad, ", benim yaşım : ", s1);

//! Template Literal yazım şekli====>>>>>>

console.log(`benim adım ${ad} yaşım ise ${s1}`);

const taban = 2;

const us = 3;

console.log(taban ** us);

//MOD ALMA  % ====

const sayi = 123;

const birler = 123 % 10;
console.log(birler);

const s3 = 5;
const s4 = "5";
console.log(s3 == s4);
console.log(s3 === s4);

//todo TİP DEĞİŞİMLERİ=======

const para = "100";
console.log(para + 15);
console.log(Number(para) + 15);

const sayi5 = 56;
console.log(String(sayi5) + sayi5);