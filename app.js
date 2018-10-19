var colorSelect;
var defaultColor = "#bcf442";

window.addEventListener("load", startup, false);

function startup() {
  colorSelect = document.querySelector("#colorSelect");
  colorSelect.value = defaultColor;
  colorSelect.select();
}

var color = $(".selected").css("background-color");
var ctx = $("canvas")[0].getContext("2d");
var myCanvas = $("canvas");
var lastEvent;
var mouseDown = false;

myCanvas.mousedown(function(event) {
  lastEvent = event;
  mouseDown = true;})
.mousemove(function(event) {
  if (mouseDown) {
    ctx.beginPath();
    ctx.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.strokeStyle = colorSelect.value;
    ctx.lineWidth =  8;
    ctx.lineCap = "round";
    ctx.stroke();
    lastEvent = event;
  }
}).mouseup(function() {
  mouseDown = false;
}).mouseleave(function() {
  myCanvas.mouseup();
});

$("#clearcanvas").click(function(event)
  { 
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,1000,1000)
  })