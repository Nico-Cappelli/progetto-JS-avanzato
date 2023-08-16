
let takeSum = document.getElementById("summary");
let takeCat = document.getElementById("categories");
let takeSco = document.getElementById("score");



 const btn = document.querySelector(".btn");
 
       btn.addEventListener("click", function () {
         takeSum.style.display = "block";
         takeCat.style.display = "block";
         takeSco.style.display = "block";

        });

fetch('https://api.teleport.org/api/urban_areas/slug:los-angeles/scores/')
.then(response => response.json())
.then(json=>{
 const infoFetch = json;




 
     
 const btn = document.querySelector("#btn");
  btn.addEventListener("click", function writeInfo(){
   
        takeSum.innerHTML = (infoFetch.summary);
        let tc = infoFetch.teleport_city_score.toFixed(2);
        takeSco.innerHTML = ("Total Score: " + tc);

infoFetch.categories.forEach((x) => {
    takeCat.insertAdjacentHTML(
      "afterbegin",
      `${x.name}: ${x.score_out_of_10.toFixed(2)}<br>`
    );
  });
  

}) 
   writeInfo();
});

