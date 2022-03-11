function hesapla() {
    let kilo = document.KitleForm.kilo.value
    let boy = document.KitleForm.boy.value
    if(kilo > 0 && boy > 0){  
    let sonuc = kilo /(boy/100*boy/100)
    document.KitleForm.endeks.value = sonuc.toFixed(2);
    if(sonuc < 18.5){
    document.KitleForm.islemsonucu.value = "Çöp Gibisin Aga"
    }
    if(sonuc > 18.5 && sonuc < 25){
    document.KitleForm.islemsonucu.value = "Adamsın Sen Böyle Devam"
    }
    if(sonuc > 25){
    document.KitleForm.islemsonucu.value = "Az Ye Kanka Olmaz Böyle.:)"
    }
    }
    else{
    alert("Dalgamı Geçiyosun Canım >:/")
    }
    }