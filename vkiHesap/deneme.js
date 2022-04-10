let kilo = prompt("Kilonuzu giriniz" , "kilogram cinsinden")
kilo = parseFloat(kilo);
console.log(kilo)
let boy = prompt("Boyunuzu giriniz" , "metre cinsinden örnek 1.66");
boy = parseFloat(boy);
console.log(boy)
vkiHesapla(kilo, boy);

function vkiHesapla(kilo, boy) {
  let vki = kilo / (boy*boy);
  if(vki<18.5) 
  return alert(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`);
  if(vki>= 18.5 && vki <= 24.9) 
  return alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`);
  if(vki>= 25.0 && vki <= 29.9) 
  return alert(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`);
  if(vki>= 30) 
  return alert(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`);
  return alert("Girdiğiniz değerleri kontrol ediniz");
};



