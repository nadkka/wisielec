var slowo, slowa, el, strzal, dl;
var odpowiedzi=[];
trafienie= false;
var bledy=0;

function start(){
    slowa=["jajko", "komputer", "kremówki", "pieniądze", "kalkulator", "naleśniki", "borówka", "pociąg", "kanapki", "ślimak", "antarktyda", "księżniczka","kolorowanka",'tysiąc','komoda','chevrolet','pięćdziesięciogroszówka','arachnofobia','lekkoatletyka','kasztanowy','kołowrotek','deoksyrybonukleinowy'];
    kategoria=["jedzenie", "urządzenie", "jedzenie", "rzeczy", "urządzenie", "jedzenie", "jedzenie", "transport", "jedzenie", "zwierzę", "kontynent", "osoba","rzecz",'liczba','mebel','auto','moneta','lęk','sport','kolor','rzecz','biologia'];
    indeks=Math.floor(Math.random() * slowa.length)
    slowo=slowa[indeks];
    document.getElementById("kategoria").innerHTML= kategoria[indeks];
    dl=slowo.length;
    
    for(var i=0; i<dl; i++){
        odpowiedzi[i]= '_';
    }
    document.getElementById('haslo').innerHTML=odpowiedzi.join(" ");
}

function sprawdz(){
    trafienie= false;
    strzal=document.getElementById('znak').value;

   for(var j=0; j<slowo.length; j++) {
       if(slowo[j]==strzal && odpowiedzi[j]=="_"){
           odpowiedzi[j]=strzal;
           dl--;
           trafienie=true;
       }
       document.getElementById('haslo').innerHTML=odpowiedzi.join(" ");
   }
   document.getElementById('znak').value="";

   if(trafienie== false && bledy<9){
       bledy++;
       obraz= "s" + bledy + ".jpg";
       document.getElementById("szubienica").innerHTML=' <img src=" '+ obraz+ ' ">';
   }
   if(dl==0 && bledy<9){
       document.getElementById("wynik").innerHTML = "WYGRANA!";
       document.getElementById("wynik").style.border= "3px solid #5D5D81";
   }
   if(bledy==9){
    document.getElementById("wynik").innerHTML = "PRZEGRANA :(";
    document.getElementById("wynik").style.border="3px solid #5D5D81";
}
}