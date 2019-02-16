function track(){
var sideA=parseInt(document.getElementById('A').value);
var sideB=parseInt(document.getElementById('B').value);
var sideC=parseInt(document.getElementById('C').value);
if(sideA==isNaN || sideB==isNaN || sideC==isNaN){
  document.getElementById("output").innerHTML ="peleka ufala kando";
}
else{
  if(sideA + sideB > sideC && sideB + sideC > sideA && sideC + sideA >sideB){
    if(sideA==sideB && sideB==sideC && sideC==sideA){
    document.getElementById("output").innerHTML = "This is an equilateral triangle!";
    document.getElementById("img").src= "https://www.pngkey.com/png/full/423-4237927_drawing-of-equilateral-triangle.png"
      }
    else if (sideA!==sideB && sideB!==sideC && sideC!== sideA){
    document.getElementById("output").innerHTML ="This is a scalene triangle!";
    document.getElementById("img").innerHTML ="";
    }
    else {
    document.getElementById("output").innerHTML ="This is an isosceles triangle";
    document.getElementById("img").innerHTML ="";
    }
}
else{
  document.getElementById("output").innerHTML ="This is not a triangle";
  document.getElementById("img").innerHTML ="";
  }
}
}
