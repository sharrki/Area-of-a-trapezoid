// AREA OF TRAZOID 

// GLOBAL VARIABLES

// EVENT LISTENERS
document.getElementById("shom").addEventListener("click",wawa);

// EVENT FUNCTIONS
function wawa(){

    let b1 = Number(document.getElementById("com"). value);
   let b2 = Number(document.getElementById("dom").value);
   let height =Number(document.getElementById("tom").value);
   document.getElementById("wom").innerHTML= ((b1 + b2)*height)/2; 

}

