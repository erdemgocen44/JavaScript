//! Konsol

console.log("Hello Javascript");
alert("Dikkat");
console.warn("Bu bir uyarıdır");
console.error("Bu bir hatadır bilerek yazdım...");
prompt("Adınızı Giriniz");

// Değişken Tanımlama Türleri --> (Var-Const-Let)

//! ********************************************************************************* */

//! var

// ? Ancak, modern JS var keyword'unun kullanımı azaldı.
// ? Çünkü, var global değişken gibi düşünülebilir.
// ? Günümüzde programcılar global değişken gerekmedikçe VAR tercih etmemektedir.

//! ÖNEMLİ: var deyimi ile aynı isimle tekrar değişken tanımlamak mümkündür.

var fiyat;
fiyat = 23;
console.log(fiyat); // 23 yazdırır...

fiyat = 19.99;
console.log("FİYAT:" + fiyat); // FİYAT: 19.99 yazdırır

var fiyat = "ücretsiz";
console.log("FİYAT:" + fiyat); // FİYAT: ücretsiz yazdırır

var isim = "Tahir";
console.log(typeof isim); // string
isim = 3.14;
console.log(typeof isim); // number

//! ********************************************************************************* */

//! Const

// TODO: const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler hariç).
// ! Mümkünse const, yoksa let, o da mümkün değilse var kullanılmalı.
// ! Çünkü js de çok rahat değişiklik yapılıyor, var, let sıkıntı çıkarabilir.
// ! Güvenli olması açısından const daha iyidir...

const isim1 = "Techpro";
console.log(isim1); // Techpro yazdırır
console.log(typeof isim1); // string yazdırır

const pi = 3.14;
console.log(pi); // 3.14 yazdırır
console.log(typeof pi); // number yazdırır

const dogruMu = true;
console.log(dogruMu); // true yazdırır
console.log(typeof dogruMu); // boolean yazdırır

const piSayisi = 3.14;
// piSayisi = 3; // değiştirmeye kalkarsan itiraz eder...

const isim2 = "Tahir"; // Const son değerdir değiştirilemez...Final gibi...
console.log(typeof isim2); // number

//! ********************************************************************************* */

//! Hatalı Yazımlara Örnekler ;
// const ad;

// const sayı = 5;
// const sayı = 2;
//? --> Not ; 70. satırda const a değer atadığımız için 71 tekrar atarsak hata alırız..

// const number;
// number=4; // ! 74 ve 75. satırlar hatalı yazıma girer...

//! ********************************************************************************* */

//! Let

// ? Eğer değişkenimizin değerinin değişmesi gerekiyor ise const kullanamayız.
// ? Bunun yerine LET kullanabiliriz.
// ! LET Block-scope bir değişkendir. VAR ise global-scope bir tanımlamadır.
// * Block-scope: Sadece tanımlı olduğu alanda geçerlidir.

let dil = "Java";
dil = "Javascript";
console.log(dil); // Javascript yazdırır
console.log(typeof dil); // string yazdırır

dil = 1;
console.log(dil); // 1 yazdırır
console.log(typeof dil); // number yazdırır

dil = true;
console.log(dil); // true yazdırır
console.log(typeof dil); // boolean yazdırır

dil = null;
console.log(dil); // null yazdırır
console.log(typeof dil); // object yazdırır (*********)

fiyat = 10;
console.log(typeof fiyat); // number
fiyat = "Basri";
console.log("Fiyat"); // Fiyat

// String tanımlamak için 3 farklı karakterle yazabiliriz...

let name1 = "Hakan";
let name2 = "Sedef"; // tek tırnakla da yazabiliriz. Otomatik çift tırnağa dönüyor...
let name3 = `Merve`;

console.log(name1); // Hakan
console.log(name2); // Sedef
console.log(name3); // Merve

//! ********************************************************************************* */
//! Dikkat Edilmesi Gereken Noktalar....

let sayac;
console.log(sayac); // undefined yazdırır...Tanımsız demektir...
console.log(typeof sayac); // undefined yazdırır...Tanımsız demektir...

sayac = true;
console.log(typeof sayac); // boolean yazdırır...

kalanBorç = 15.5; //? ÖNEMLİ: let kullanılmasa bile JS yorumlayıcısı yeni değişkeni algılayıp tanımlar.
console.log(kalanBorç); // 15.5 yazdırır...
console.log(typeof kalanBorç); // number yazdırır

// let sayac = 2; //! Hata: let ve const deyimiyle aynı scope'da tekrardan aynı isimle değişken tanımlanamaz.

//! ********************************************************************************* */

//! *** Operatörler

//? Javascript operatörlerini 5 kategoride inceleyebiliriz.

// TODO--> Aritmetik Operatörler
// TODO--> Karşılaştırma Operatörleri
// TODO--> Mantıksal Operatörleri
// TODO--> Atama Operatörleri
// TODO--> Koşul (Ternary) Operatörü

//! ********************************************************************************* */

// TODO *******************************************************************************/

//! Aritmetik Operatörler

// +  Toplama işlemi ve String’lerde birleştirme işlemi gerçekleştirir...
// -  Çıkarma işlemi gerçekleştirir...
// *  Çarpma işlemi gerçekleştirir...
// %  Mod alma işlemi gerçekleştirir...
// ++ Bir arttırma işlemi gerçekleştirir...
// -- Bir azaltma işlemi gerçekleştirir...
// ** Üs alma işlemi gerçekleştirir...

// TODO *******************************************************************************/

//! Aritmetik Operatörler (+)

const ekmek = 2;
const yumurta = 30;
const peynir = 40;
const toplamHarcama = ekmek + peynir + yumurta;
console.log("HARCAMA:" + toplamHarcama + " TL"); // HARCAMA: 72 TL

//! ÖNEMLİ : + operatörü ile string birleştirme gerçekleştirilebilir...
const ad = "Mustafa";
const soyAd = "Çalışkan";
console.log(ad + soyAd); // MustafaÇalışkan
console.log(ad + " " + soyAd); // Mustafa Çalışkan

const x = 5;
const y = "5";
const birleştir = x + y;
console.log(birleştir); // 55 yazdırır...

const ayran = 5;
const cikolata = 6;
const borek = 2;
console.log(ayran + cikolata + borek); // 13
console.log("Toplam Fiyat : " + ayran + cikolata + borek); // Toplam Fiyat : 562 yanyana yazdırdı...

const adi = "Can";
const soyad = "Canan";
console.log(adi + " " + soyad); // Can Canan

const s1 = 7;
const s2 = "7";
console.log(s1 + s2); // 77 --> Concat yaptı...

console.log("Benim adım" + " " + adi + " " + "Benim yaşım" + " " + s1); // Benim adım Can Benim yaşım 7
// Alternatif kolay yazdırma şekli... Template literal deniyor...
console.log(`Benim adım ${adi} Benim yaşım ${s1}`); // Benim adım Can Benim yaşım 7

// TODO *******************************************************************************/

//! Aritmetik Operatörler (-)

const yil = 2021;
const dogumTarihi = 1980;
const yas = yil - dogumTarihi;
console.log("YAŞ :" + yas); // YAŞ : 41
console.log("YAŞ :" + (yil - dogumTarihi)); // YAŞ : 41
//! ÖNEMLİ : Ekstra parantez kullanılmaz ise string birleştirme yapmaya çalışır.
//! - den dolayı birleştiremez ve NaN döndürür. NaN = Not a Number (Sayı değil)

// TODO *******************************************************************************/

//! Aritmetik Operatörler (* Çarpma ve ** Üs Alma)

const taban = 2;
const us = 3;
console.log(taban * us); // 2*3=6 Çarpma
console.log(taban ** us); // 2*2*2=8 Üs Alma

// Beraber bir işlemde kullanacak Olursak ;
const pik = 3.14;
const r = 3;
const alan = pi * r ** 2;
const çevre = 2 * pi * r;
console.log(çevre, alan); // 18.84   28.26
console.log("ÇEVRE:" + çevre, "ALAN:" + alan); // ÇEVRE:18.84 ALAN:28.26

// TODO *******************************************************************************/

//! Aritmetik Operatörler (Modulus % ve ++ ve --)

const sayi = 123;
const birlerBasamagi = 123 % 10;
console.log("Birler Basamağı : " + (sayi % 10)); // Birler Basamağı : 3

let a = 3;
let b = ++a;
let c = --a;
console.log(a, b, c); // 3 4 3

a += 5;
console.log(a); // 8

const z = 3;
// let k = z++; HATA: const değişkenin değeri arttırılamaz.

// TODO *******************************************************************************/

//? ***********************************************************************************/

//! Karşılaştırma Operatörleri

//? == İki değişkenin veri tipine bakmaksızın eşitliğini kontrol eder.
//? Eşitse true aksi takdirde false döndürür.

//? === Veri tipi de dahil olmak üzere eşitliğini kontrol eder.
//? Eşitse true aksi takdirde false döndürür.

//? != İki değişkenin eşit olmamasını kontrol eder.
//? Eşit değilse true aksi takdirde false döndürür.

//? > Soldaki değişkenin değeri sağdakinden büyükse true aksi takdirde false döndürür.

//? < Soldaki değişkenin değeri sağdakinden küçükse true aksi takdirde false döndürür.

//? >= Soldaki değişkenin değeri sağdakine eşit veya büyükse true aksi takdirde false döndürür.

//? <= Soldaki değişkenin değeri

//? ***********************************************************************************/

// TODO Karşılaştırma Operatörleri ile ilgili Örnekler Çözüp konuyu pekiştirelim...

const s3 = 5;
const s4 = "5";
console.log(s3 == s4); // true (Veri tipine bakmadığından)
console.log(s3 === s4); // false (veri tipi number ve string olduğundan)

const s5 = 6;
console.log(s5 == 6); // true
console.log(s5 == "6"); // true

//! ÖNEMLİ: JS, operatörlere bakarak gerektiğinde string formatındaki sayıyı number
//! formatına çevirerek işlemi gerçekleştiriyor...

console.log(s5 === "6"); // false
console.log(s5 !== 6); // false
console.log(s5 != "6"); // false

console.log(s5 !== "6"); // true (Eşit olmadığı için)

//! ÖNEMLİ: === ve !== operatörleri veri tipini de kontrol eder.

console.log(s5 > 6); // false (Eşit olduğundan false verir)
console.log(s5 > "4"); // true (6>4 oldğundan true verir)
console.log(s5 >= 6); // true (6>=6 olduğundan true verir)
console.log(s5 > "7"); // false (6>7 olduğundan false verir)

//! ÖNEMLİ: Büyük eşit ve küçük eşit işlemlerinde veri tipi kontrolü yapılamıyor.

// TODO *******************************************************************************/

//! Mantıksal Operatörler

// TODO --> && MANTIKSAL VE -->işlemi gerçekleştirir.
// Kontrol ettiği değişkenlerin tamamı TRUE ise TRUE değer döndürür.
// Aksi takdirde FALSE değer döndürür.

// TODO --> || MANTIKSAL VEYA --> işlemi gerçekleştirir.
// Kontrol ettiği değişkenlerin sadece bir tanesi bile TRUE ise TRUE değer döndürür.
// Ancak tamamı FALSE ise FALSE değer döndürür.

// TODO --> ! MANTIKSAL DEĞİL --> işlemi gerçekleştirir.
// Yani, kontrol ettiği değişkenin değerinin tersini döndürür.
// Değişken TRUE ise FALSE, FALSE ise TRUE değer döndürür.

let s7 = true;
let s8 = true;
console.log(s7 && true); // true
console.log(s7 && s8); // true
console.log(s7 && s8 && false); // false

s8 = false;
console.log(s7 || s8 || false); // true (s7 true olduğundan true verdi)

s8 = null;
console.log(s7 && s8); // null
console.log(s7 || s8); // true
// TODO --> ÖNEMLİ: 0, FALSE, NULL, undefined, "" ve NaN dışındaki durumlar TRUE kabul edilir...

f2 = "kuş";
f3 = "kedi";
console.log(f2 || f3); // kuş
console.log(f2 && f3); // kedi

f2 = true;
f3 = false;
console.log(!f2); // false
console.log(!f3); // true
f3 = null;
console.log(!f3); // true
// TODO --> ÖNEMLİ: 0, FALSE, NULL, undefined, "" ve NaN dışındaki durumlar TRUE kabul edilir...

//! ***************************************************************************************

//! Atama Operatörleri

//? = x = y Soldaki değişkenin değerini sağdakine kopyalar.
//? += x += 1 x= x+1 işlemi gerçekleştirir.
//? -= x -= 2 x= x-2 işlemi gerçekleştirir.
//? *= x *= 3 x= x*3 işlemi gerçekleştirir.
//? /= x /= 4 x= x/4 işlemi gerçekleştirir.
//? **= x **= 2 x= x2 işlemi gerçekleştirir.
//? %= x %= 3 x = x mod 3 işlemi gerçekleştirir.
//? &= x &= y x = x VE y işlemi gerçekleştirir.
//? |= x |= y x = x VEYA y işlemi gerçekleştirir.

// TODO **********************************************************************************

//! Koşul Operatörü
// Koşul Operatörü, if-else ifadelerinin tek satırlık hali gibi düşünülebilir.
// 3 parametre alır...
// (Koşul ? ifade1 : ifade2)

// Eğer Koşul doğru ise ifade1, yanlış ise ifade2 çalıştırılır.

let age = 7;
let okul = age >= 7 ? "ilkokul" : "anaokulu";
console.log(okul); // ilkokul

age = 6;
okul = age >= 7 ? "ilkokul" : "anaokulu";
console.log(okul); // anaokulu

// TODO **********************************************************************************

// Tip Değişimleri

const para = "100";
console.log(para + 15); // 10015
console.log(Number(para) + 15); // 115
// ÖNEMLİ : Number() fonksiyonu tip çevrimi yapılabilir.

const sayi5 = 56;
console.log(String(sayi5) + sayi5); //5656
console.log(typeof sayi5); // number

const language = "Javascript";
console.log(Number(dil));
console.log(Number("123abc")); // Nan
// ÖNEMLİ : Number() fonksiyonu Harfleri sayıya çeviremediği için NaN
// (Sayı değil - Not a Number) döndürüyor...

const sayi6 = 54;
console.log(String(sayi6), sayi6); // 54 54
// ÖNEMLİ : String() fonksiyonu ile verilen ifadeyi String e çevirmek mümkündür...

const k1 = 5;
const k2 = -7;
const ismim = "John";
console.log(Boolean(isim)); // true
console.log(Boolean(k1)); // true
console.log(Boolean(k2)); // true

const sıfır = 0,
  nal = null;
const tanımsız = undefined;
const boş = "",
  sayıDeğil = NaN;

console.log(Boolean(sıfır), Boolean(nal)); // false false
console.log(Boolean(tanımsız), Boolean(boş)); // false false
console.log(Boolean(sayıDeğil)); // false
