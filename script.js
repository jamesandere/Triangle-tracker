function triangleTracker() {
 var a = parseInt(document.getElementById("lengthA").value);
 var b = parseInt(document.getElementById("lengthB").value);
 var c = parseInt(document.getElementById("lengthC").value);

 var side = [a, b, c];

 if (side[0] + side[1] <= side[2] || side[0] + side[2] <= side[1] || side[2] + side[1] <= side[0]) {
   alert("this cannot form a triangle");
 }else if (side[0] === side[1] && side[0] === side[2]) {
   alert("equilateral triangle");
 } else if (side[0] === side[1] || side[0] === side[2] || side[1] === side[2]) {
   alert("Isosceles triangle")
 } else if (side[0] + side[1] > side[2] && side[0] + side[2] > side[1] && side[1] + side[2] > side[0]) {
   alert("Scalene triangle")
 } else {
   alert("Not a triangle");
 }
}
