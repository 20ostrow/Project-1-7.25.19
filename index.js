var box = document.getElementById("box");
var boxheight = box.offsetHeight;
var boxwidth = box.offsetWidth;

var targetX = Math.random() * boxwidth;
var targetY = Math.random() * boxheight;

console.log(`targetX: ${targetX}`);
console.log(`targetY: ${targetY}`);

function distance(mousex, mousey, targetx, targety) {
  var xDistance = targetx - mousex;
  var yDistance = targety - mousey;
  var distanceFormula = Math.sqrt(xDistance ** 2 + yDistance ** 2);
  console.log(`distance:${distanceFormula}`)
  return distanceFormula;
}

function loc(e) {
  console.log(`mousex: ${e.clientX}\nmousey: ${e.clientY}`);
  var mousex = event.clientX;
  var mousey = event.clientY;
  dist = distance(mousex, mousey, targetX, targetY);
  box.style.backgroundColor = `rgb(0, 0, ${255-dist})`;
  if (dist <= 20) {
    box.style.backgroundColor = "rgb(0, 255, 0)";
    // alert("You won!")
  }
}

box.addEventListener("mousemove", loc);

//win condition distance within 20
