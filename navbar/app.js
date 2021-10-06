function navSlide() {
    const burger = document.querySelector(".burger");
    /* bir tane degisken acıyorum burger classını tutucak olan bir degisken */
    /* burgera ulastık */
  ​
    const nav = document.querySelector(".nav-links");
    /* Kategorilerime js de nav yazarak ulasabilecegim */
  ​
    const navLinks = document.querySelectorAll(".nav-links li");
    /* nav-links'in icindeki li lere de ulasmıs olucam */
  ​
    /* TIKLANNDIGI ZAMAN OLACAK OLAYLARLA İLGİLİ KOD YAZICAZ BUNU BURGER MENUME YAZICAM */
  ​
    burger.addEventListener("click", () => {
      /* sadece nav'a ulasıcam */
      nav.classList.toggle("nav-active"); /* tıkladıgım zaman olan olayı */
  ​
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ""; /* eger bu sekilde ise bosluk yazsın */
        } else {
          /* DEGİLSE GECİS EFEKTİNİN TRANSİSİNİNİ VE SANİYESİNİ BELİRLEDİK */
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`;
        }
      });
  ​
      burger.classList.toggle(
        "toggle"
      ); /* ACILIR KAPANIŞIRŞIL OZELLİGİNİ BİZE AKTİF ETTİ */
      /* en alt kısımda belirtmemiz gerekiyormus */
    });
  }
  ​
  navSlide(); /* YAZDIGIMIZ FONKSİYONU EN ALTTA SADE BİR SEKİLDE CALISTIRMASINI SAGLADIK */