window.addEventListener("load", function () {

  const forfaits = document.querySelectorAll('#ecran1 .card');
  const options = document.querySelectorAll('#ecran3 .card');
  let optionSelectionnePrecedent = null;
  const duplique = document.getElementById('duplique');
  const auto = document.getElementById('96h');
  const duo = document.getElementById('duo');

  const btOk = document.getElementById('btEcran1');
  const btOk2 = this.document.getElementById('btEcran2');
  let forfaitSelectionnePrecedent = null;
  let nbrAnnonce = document.getElementById('inputNb');




  document.getElementById("ecran2").style.display = "none";
  document.getElementById("ecran3").style.display = "none";
  document.getElementById("ecran4").style.display = "none";
  document.getElementById("btEcran1").addEventListener("click", function () {
    document.getElementById("ecran1").style.display = "none";
    document.getElementById("ecran2").style.display = "block";
  });
  document.getElementById("btRetour2").addEventListener("click", function () {
    document.getElementById("ecran1").style.display = "block";
    document.getElementById("ecran2").style.display = "none";
  });
  document.getElementById("btEcran2").addEventListener("click", function () {
    document.getElementById("ecran1").style.display = "none";
    document.getElementById("ecran2").style.display = "none";
    document.getElementById("ecran3").style.display = "block";
  });
  document.getElementById("btEcran3").addEventListener("click", function () {
    document.getElementById("ecran1").style.display = "none";
    document.getElementById("ecran2").style.display = "none";
    document.getElementById("ecran3").style.display = "none";
    document.getElementById("ecran4").style.display = "block";

  });
  document.getElementById("btRetour3").addEventListener("click", function () {
    document.getElementById("ecran1").style.display = "none";
    document.getElementById("ecran2").style.display = "block";
    document.getElementById("ecran3").style.display = "none";
    document.getElementById("ecran4").style.display = "none";

  });
  document.getElementById("btRetour4").addEventListener("click", function () {
    document.getElementById("ecran1").style.display = "none";
    document.getElementById("ecran2").style.display = "none";
    document.getElementById("ecran3").style.display = "block";
    document.getElementById("ecran4").style.display = "none";

  });

  forfaits.forEach(forfait => {
    forfait.addEventListener("click", function () {
      if (forfaitSelectionnePrecedent !== null && forfaitSelectionnePrecedent !== forfait) {
        forfaitSelectionnePrecedent.style.backgroundColor = "white";
      }

      let computedColor = window.getComputedStyle(forfait).backgroundColor;

      if (computedColor === "rgb(229, 94, 75)" || computedColor === "#e55e4b") {
        forfait.style.backgroundColor = "white";
        btOk.disabled = true;
        forfaitSelectionnePrecedent = null;
      } else {
        forfait.style.backgroundColor = "#E55E4B";
        btOk.disabled = false;
        forfaitSelectionnePrecedent = forfait;
      }
    });
  });


  nbrAnnonce.addEventListener('input', function () {
    let annonce = parseFloat(nbrAnnonce.value);
    btOk2.disabled = true;
    if (annonce > 0) {
      btOk2.disabled = false;
    }
  });

  options.forEach(option => {
    option.addEventListener("click", function () {
      if (optionSelectionnePrecedent !== null && optionSelectionnePrecedent !== option) {
        optionSelectionnePrecedent.style.backgroundColor = "white";
      }

      let computedColor = window.getComputedStyle(option).backgroundColor;

      if (computedColor === "rgb(229, 94, 75)" || computedColor === "#e55e4b") {
        option.style.backgroundColor = "white";
        optionSelectionnePrecedent = null;
      } else {
        option.style.backgroundColor = "#E55E4B";
        optionSelectionnePrecedent = option;
      }
    });
  });
});
