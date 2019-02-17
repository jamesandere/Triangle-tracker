function track(){
var sideA=parseInt(document.getElementById('A').value);
var sideB=parseInt(document.getElementById('B').value);
var sideC=parseInt(document.getElementById('C').value);

if(isNaN(sideA) || isNaN(sideB) || isNaN(sideC)){
  document.getElementById("output").innerHTML= "Not a number!";document.getElementById("output").innerHTML = "This is an equilateral triangle!";
}
else{
  if(sideA + sideB > sideC && sideB + sideC > sideA && sideC + sideA >sideB){
    if(sideA==sideB && sideB==sideC && sideC==sideA){

      }
    else if (sideA!==sideB && sideB!==sideC && sideC!== sideA){
       document.getElementById("output").innerHTML ="This is a scalene triangle!";
    }
    else {
       document.getElementById("output").innerHTML ="This is an isosceles triangle!";
        }
    }
    else{
        document.getElementById("output").innerHTML ="This is not a triangle!";
      }
    }
    }
