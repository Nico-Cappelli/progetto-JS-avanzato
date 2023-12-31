
function create(divValue, element, clas, attribute)
{
  const container = document.getElementById(divValue);
  const NEW_ELEMENT = document.createElement(element);
 
  NEW_ELEMENT.classList.add(clas);
  NEW_ELEMENT.id = (attribute);
  container.appendChild(NEW_ELEMENT);

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
document.getElementById("btnCanc").onclick = function() {
  document.getElementById("summary").remove();
  document.getElementById("categories").remove();
  document.getElementById("score").remove();
};



