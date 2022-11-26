const arttir = document.getElementById("arttir");
const azalt = document.getElementById("azalt");

const sonuc = document.getElementById("sonuc");

let sayac = 0;

function sayacArttir() {
  // sayac=sayac+1
  sayac++;
  sonuc.innerHTML = sayac;
}

function sayacAzalt() {
    // sayac=sayac+1
    sayac--;
    sonuc.innerHTML = sayac;
  }