//!==============================

//todo GETELEMENTBYID kullanımı

const paragraf = document.getElementById("para").style;

paragraf.backgroundColor = "orange";
paragraf.color = "yellow";
paragraf.fontSize = "22px";

const buton = document.getElementById("btn");
buton.style.width = "100px";
buton.style.color = "orange";
buton.style.fontSize = "20px";
buton.style.backgroundColor = "black";
buton.textContent = "ARA"; //! textContent tagların içeriğindeki yazıyı değiştirmek istersek kullanırız

//todo getElementByTagName Kullanımı

const image = document.getElementsByTagName("img");

image[0].style.width = "300px";
image[0].style.height = "300px";

image[1].style.width = "300px";
image[1].style.height = "300px";

image[1].style.border = "4px solid red";
image[1].style.borderRadius = "15px";

//! getElementByClassName

const baslik = document.getElementsByClassName("h1");

baslik[0].style.textAlign = "center";
baslik[0].style.color = "red";
baslik[0].style.fontSize = "30px";

//! querySelector//En çok kullanılan çağırma yolu, hatta %100

document.querySelector(".arama").textContent = "DOM SELECTOR KAVRAMI 🃏👌";

document.querySelector("#govde").style.backgroundImage =
    "linear-gradient(pink,green,gray)";

//! Event****************===

//todo (onmouseover,onmouseout=fare üzerine gelince veya ayrılınca)

const h = document.querySelector(".h1");

h.onmouseover = function() {
    h.style.color = "red";
    h.style.backgroundColor = "white";
};

h.onmouseout = function() {
    h.style.color = "black";
    h.style.backgroundColor = "yellow";
};

//todo 1. resme tıkladığıızda iki resim yer değiştirsin

document.querySelector(".bir").onclick = function() {
    document.querySelector(".bir").src = "./img/logo2.png";
    document.querySelector(".iki").src = "./img/logo.png";
};

document.querySelector(".iki").onclick = function() {
    document.querySelector(".iki").src = "./img/logo2.png";
    document.querySelector(".bir").src = "./img/logo.png";
};