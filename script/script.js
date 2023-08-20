
/*let takeSum = document.getElementById("summary");
let takeCat = document.getElementById("categories");
let takeSco = document.getElementById("score");*/

function create(divValue, element, clas, attribute)
{
  const contenitore = document.getElementById(divValue);
  const NEW_ELEMENT = document.createElement(element);
 
NEW_ELEMENT.classList.add(clas);
NEW_ELEMENT.id = (attribute);
contenitore.appendChild(NEW_ELEMENT);

return NEW_ELEMENT;
};

const btnC = document.querySelector("#btnCanc");



fetch('https://api.teleport.org/api/urban_areas/slug:los-angeles/scores/')
.then(response => response.json())
.then(json=>{
  const infoFetch = json;
  const btn = document.querySelector("#btn");
  btn.addEventListener("click", function(){
    let inputVal = document.getElementById("text").value;
    if (inputVal == "Los Angeles") {
        const takeSum = create("bodyDiv", "div", "parag", "summary" );
        const takeCat = create("bodyDiv", "div", "parag", "categories" );
       const takeSco = create("bodyDiv", "div", "parag", "score" );
      /*btn.addEventListener("click", function () {
        takeSum.style.display = "block";
        takeCat.style.display = "block";
        takeSco.style.display = "block";

       });*/


     takeSum.innerHTML = (infoFetch.summary);
     let tc = infoFetch.teleport_city_score.toFixed(2);
     takeSco.innerHTML = ("Total Score: " + tc);

infoFetch.categories.forEach((x) => {
 takeCat.insertAdjacentHTML("afterbegin",`${x.name}: ${x.score_out_of_10.toFixed(2)}<br>`);
});
      
      
    } else{
 
       alert("insert the correct city")
    };
   
  

});
});
/*btnC.addEventListener("click", function(){
takeCat.remove();
takeSco.remove();
takeCat.remove();
  
});*/

document.getElementById("btnCanc").onclick = function() {
  document.getElementById("summary").remove();
  document.getElementById("categories").remove();
  document.getElementById("score").remove();
};





