const dogumTarihi= document.getElementById("dogumTarihi");
const  goster= document.getElementById("goster");



function YasiGoster(){
let yil=new Date().getFullYear()
// ParseInt => string bir değeri integera dönüştürür
let yas=yil-parseInt(dogumTarihi.value)
goster.innerHTML=yas 
}