var showListe = [];

//!! json dosyasından veri getirme aşamaları (ezbere gerek yok google dan sonra bakılabilir)

fetch("./tv-show.json")
    .then((cevap) => cevap.json())
    .then((veri) => {
        showListe = veri;
        showIzle(showListe);
    });

//todo metot oluştur
//!   https://getbootstrap.com/docs/4.0/components/card/   bu siteden card alıyoruz
function showIzle(showListe) {
    var liste = document.querySelector(".liste");
    showListe.forEach((a) => {
        liste.innerHTML =
            liste.innerHTML +
            `<div class="card col-md-3"  >
        <img class="card-img-top" src="${
          a.show.image ? a.show.image.medium : ""
        }" alt="Card image cap">
        <div class="card-body">
          <h5>${a.show.name}</h5>
          <a href=${
            a.show.url
          }target="_blank" class="btn btn-success">Detaylar</a>
        </div>
      </div>`;
    });
}