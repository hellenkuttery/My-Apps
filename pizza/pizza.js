// ADDEVENTLISTENER

// addeventlistener 2 parametre alır. Birisi Event(olay) nedir 
// 2 olarak bir function alır
let toplam=0;

function urunEkle(txt){
    const yeniUrun=document.createElement("li")
    yeniUrun.innerHTML=txt
    document.getElementById("urun").appendChild(yeniUrun)
  
}



document.getElementById("aile").addEventListener("click",function(){
    let text="Ekonomik Aile ....................... 100  TL"
    toplam=toplam+100;
    urunEkle(text)
})
document.getElementById("mini").addEventListener("click",function(){
    let text="Ekonomik Mini....................... 80 TL"
    toplam=toplam+80;
    urunEkle(text)
})

document.getElementById("topla").addEventListener("click",function(){
const pizzaTutarı=document.createElement("p")
pizzaTutarı.innerHTML=toplam;
document.getElementById("tutar").appendChild(pizzaTutarı)
})