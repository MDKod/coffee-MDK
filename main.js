//Üzerinde çalışılacak elementleri HTML'den bulup JS'e kendi verdiğimiz isimlerle tanıtıyoruz.
const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const closeBtn = document.getElementById('close-btn')

//Menü butonuna basınca menünün açılmasını sağlayan olay dinleyicisi

menuBtn.addEventListener('click',()=> {
    navbar.classList.remove('hidden')
})

//Kapat butonuna basınca menünün kapanmasını sağlayan olay dinleyicisi

closeBtn.addEventListener('click', ()=>{
    navbar.classList.add('hidden')

})



