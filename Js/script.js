function track(){
var sideA=parseInt(document.getElementById('A').value);
var sideB=parseInt(document.getElementById('B').value);
var sideC=parseInt(document.getElementById('C').value);

if(isNaN(sideA) || isNaN(sideB) || isNaN(sideC)){
  document.getElementById("output").innerHTML= "Not a number!";
   document.getElementById("img").src= "https://image.flaticon.com/icons/svg/159/159469.svg";
}
else{
  if(sideA + sideB > sideC && sideB + sideC > sideA && sideC + sideA >sideB){
    if(sideA==sideB && sideB==sideC && sideC==sideA){
       document.getElementById("output").innerHTML = "This is an equilateral triangle!";
       document.getElementById("img").src= "https://www.pngkey.com/png/full/423-4237927_drawing-of-equilateral-triangle.png";
      }
    else if (sideA!==sideB && sideB!==sideC && sideC!== sideA){
       document.getElementById("output").innerHTML ="This is a scalene triangle!";
       document.getElementById("img").src ="https://i.kym-cdn.com/photos/images/newsfeed/000/403/313/50a";
    }
    else {
       document.getElementById("output").innerHTML ="This is an isosceles triangle!";
       document.getElementById("img").src ="https://b.kisscc0.com/20180813/biw/kisscc0-equilateral-triangle-equilateral-polygon-right-tri-non-skilled-worker-5b712cb67ac933.1878165915341436705029.png";
        }
    }
    else{
        document.getElementById("output").innerHTML ="This is not a triangle!";
        document.getElementById("img").src ="https://image.flaticon.com/icons/svg/151/151882.svg";
      }
    }
    }
