fetch('https://api.teleport.org/api/urban_areas/slug:los-angeles/scores/')
.then(response => response.json())
.then(json=>{
    infoFetch = json;
     
    
    function ciao(){
let scrivi = document.getElementById("summary");
scrivi.innerHTML = (infoFetch.summary);
let scrive = document.getElementById("categories");
scrive.innerHTML = (infoFetch.categories);
let scrivo = document.getElementById("score");
scrivo.innerHTML = (infoFetch.teleport_city_score);
   }

   ciao();
});