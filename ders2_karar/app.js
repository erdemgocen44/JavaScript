//==KARAR YAPILARI====

//===IF==ELSE=====

const s1 = Number(prompt("Birinci sayı : "));
const islem = prompt("İşlem giriniz : ");
const s2 = Number(prompt("İkinci sayı : "));
let sonuc = 0;
if (islem == "+") sonuc = s1 + s2;
else if (islem == "-") sonuc = s1 - s2;
else if (islem == "*") sonuc = s1 * s2;
else sonuc = s1 / s2;
console.log(sonuc);