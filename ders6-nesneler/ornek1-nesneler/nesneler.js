//***********NESNELER************* */

//diziler sıralı bellek bölgeleridir. dolayısıyla dizilere erişim index le olur. Eğer diziler karışıksa (nesne) indexle erişim güçlüğü ortaya çıkar bu yüzden =>-......................................................

//! OBJECT (nesne)

// nesnelerde key-value (property-value) yapısı kullanılır
//nesnelerde aradığımız veriye erişmek için key adını kullanmamız gerekir..........

const insan = {
    ad: "Kenan",
    soyad: "Kul",
    yas: 30,
    meslek: "developer",
    diller: ["Java", "JS", "SQL", "HTML"],
};
console.log(insan);
//! 1) .dot notasyonu
console.log(insan.ad);
console.log(insan.diller);
//! 2) köşeli parantez içine
console.log(insan["ad"]);
console.log(insan["diller"]);
console.log(`Adım: ${insan.ad} ve yasım: ${insan.yas}`);

// const bilgi = prompt("insan nesnesinden ne görmek istersin : ad,soyad,yas");
// console.log(insan[bilgi]);
//!objeye key.value lar ekleme
insan.konum = "Türkiye";
insan.email = "insan@hotmail.com";
insan["dogumTarihi"] = 1991;
console.log(insan);
//****NESNE metodları */

//!bugünün yılını al=> Date().getFullYear()
const kisi = {
    ad: "Merve",
    soyad: "Aslan",
    dogumTarihi: 1990,
    meslek: "tester",
    tool: "selenyum",
    ehliyet: true,
    yasHesapla: function() {
        return new Date().getFullYear() - this.dogumTarihi;
    },
    ozet: function() {
        return ` ${this.ad} ${this.soyad} ${this.yasHesapla()} yasındadır`;
    },
};
console.log(kisi);
console.log(kisi.yasHesapla());
console.log(kisi.ozet());

//! NESNE İTERASYON ittirme örnekleri

const people = [{
        ad: "Merve",
        soyad: "İzgi",
        meslek: "Öğretmen",
        yas: 35,
    },
    {
        ad: "Akif",
        soyad: "Emre",
        meslek: "Developer",
        yas: 12,
    },
    {
        ad: "Dila",
        soyad: "Halide",
        meslek: "Mühendis",
        yas: 5,
    },
    {
        ad: "Mine",
        soyad: "Ayşe",
        meslek: "Developer",
        yas: 31,
    },
    {
        ad: "Erdem",
        soyad: "Göçen",
        meslek: "Asker",
        yas: 38,
    },
];
console.log(people);

//! people dizisindeki kişilerin mesleklerini yazdır
people.forEach((x) => console.log(x.meslek));

//! people dizisindeki tüm kişilerin yaşlerını 1 artırarak yazdır

people.map((x) => x.yas + 1).forEach((x) => console.log(x));

//! yası 25 e eşit veya küçük olanların adlarını yazdır

people.filter((x) => x.yas <= 25).forEach((x) => console.log(x.ad));

//! dizideki kişilerin isimlerini büyütelim ve yaşlarını 5 arttıralım ve soyadlarının ilk iki harfini alalım

people
    .map((x) => {
        return {
            ad: x.ad.toUpperCase(),
            yas: x.yas + 5,
            soyad: x.soyad.slice(0, 2),
        };
    })
    .forEach((x) => console.log(x));

//! Mesleği developer olanların isimleri buyuk yapıp ve yaşlarını yazdırınız.

people
    .filter((x) => x.meslek == "Developer")
    .map((x) => {
        return {
            ad: x.ad.toUpperCase(),
            yas: x.yas,
        };
    })
    .forEach((x) => console.log(x));

//!