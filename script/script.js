
let takeSum = document.getElementById("summary");
let takeCat = document.getElementById("categories");
let takeSco = document.getElementById("score");


fetch('https://api.teleport.org/api/urban_areas/slug:los-angeles/scores/')
.then(response => response.json())
.then(json=>{
 const infoFetch = json;
     
    
    function writeInfo(){
        takeSum.innerHTML = (infoFetch.summary);
        takeSco.innerHTML = ("Total Score: " + infoFetch.teleport_city_score);

infoFetch.categories.forEach((x) => {
    takeCat.insertAdjacentHTML(
      "afterbegin",
      `${x.name} : ${x.score_out_of_10.toFixed(1)}<br>`
    );
  });

   }

   writeInfo();
});

