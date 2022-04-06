// Några grundläggande inställningar
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 1 * window.innerHeight;

canvas.style.width = "100%";
canvas.style.height = "100%";

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
const c = canvas.getContext("2d");
const midX = canvas.width / 2;
const midY = canvas.height / 2;

// Matar ut canvas dimensioner till konsolen, pröva att
// ändra storlekn på fönstret och ladda däörefter om sidan.
console.log(
  `Bredd på canvas: ${canvas.width},
Höjd på canvas: ${canvas.height}`
);

function rightSideHouse(bredd,höjd) {
  var yposition = canvas.height-20-höjd
  var xposition = canvas.width-20-bredd
  var triangeltopp = canvas.height / 2
  c.beginPath()
  c.rect(xposition,yposition,bredd,höjd)
  c.lineTo(xposition+bredd/2, triangeltopp)
  
  c.lineTo(canvas.width-20, yposition)
  c.stroke()
}
function leftSideHouse(bredd,höjd){
  var yposition = canvas.height-20-höjd
  var xposition = 20
  var triangeltopp = canvas.height / 2
  c.beginPath()
  c.rect(xposition,yposition,bredd,höjd)
  c.lineTo(xposition+bredd/2, triangeltopp)
  
  c.lineTo(bredd+20, yposition)
  c.stroke()
}

function tree(bredd){
  c.beginPath()
  c.ellipse(canvas.width/2)

}

rightSideHouse(300,100);
leftSideHouse(300,100);
