//==Fonksiyonlar=====

//! 1.YÖNTEM FUNCTİON DECLARATION YONTEMİ
//Bu yöntem ile fonksiyonun tanımlanması vcağırılmasından once veya sonra olabilir

//fonksiyonun tanımlanması

function yazdirAd() {
    console.log("Erdem");
}

//fonksiyonun  çağırılması

yazdirAd();

//ornek: klavyeden girilen sayının tek mi çift mi olduğunu gösteren  bir fonksiyon yazınız

// const sayimiz = prompt("Lütfen bir sayı giriniz : ");

// function tekCift(sayimiz) {
//     return sayimiz % 2 == 0 ? `$(sayimiz) çifttir` : `$(sayimiz)tektir`;
// }

//! 2.YÖNTEM FUNCTION EXPRESSION (bu yöntem daha çok kullanılır)

const tekCift1 = function(sayi) {
    return sayi % 2 == 0 ? "Çifttir" : "Tektir";
};
console.log(tekCift1(6));

//ornek2 verilen 3 sayidan buyuk olanını bulma

let buyukBul = function(a, b, c) {
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

console.log(buyukBul(5, 1, 9));