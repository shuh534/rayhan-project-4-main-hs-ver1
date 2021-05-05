console.log("Hello, World")

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let coord = { x: 0, y: 0 };

document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);
window.addEventListener("resize", resize);

resize();

function resize() {
  ctx.canvas.width = 500;
  ctx.canvas.height = 500;
}
function reposition(event) {
  // canvas is off set by left margin of wrapper and height of div.title, top and bottom margin of .div.title and top .wrapper
  // we have to get left margin (since its in vw)of the wrapper through the rendered style of the window

  let canvasOffsetLeft = window.getComputedStyle(document.getElementById("wrapperId"));
  let l = canvasOffsetLeft.marginLeft; 
  // convert l to number so I can substract
  coord.x = event.clientX - l.match(/\d+/)[0];

  // the top I get from several elements:
  // topmargin of div.title + height of div.title + bottom margin of div.title + top margin of div.wrapper
  coord.y = event.clientY - 230;
}
function start(event) {
  document.addEventListener("mousemove", draw);
  reposition(event);
}
function stop() {
  document.removeEventListener("mousemove", draw);
}
function draw(event) {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#000000";
  ctx.moveTo(coord.x, coord.y);
  reposition(event);
  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
}

document.addEventListener("keydown", function(event){ 
  console.log(event);
  console.log("what did we just press:")
  console.log(event.key)

  // Check if the key we pressed is the 0 key
  // clear the canvas 
  if (event.key == "0"){
    ctx.clearRect(0, 0, canvas.width, canvas.height);   
  }  
  if (event.key == "a"){
    // let letterTraced = document.getElementById("letterTraced");
    // letterTraced.innerHTML = "a"; 
    canvas.style.backgroundImage = "url('../assets/a-lower.svg')";
  }  
  if (event.key == "b"){
    canvas.style.backgroundImage = "url('../assets/b-lower.svg')";
  }
  if (event.key == "c"){
    canvas.style.backgroundImage = "url('../assets/c-lower.svg')";
  }
  if (event.key == "d"){
    canvas.style.backgroundImage = "url('../assets/d-lower.svg')";
  }
  if (event.key == "e"){
    canvas.style.backgroundImage = "url('../assets/e-lower.svg')";
  }
  if (event.key == "f"){
    canvas.style.backgroundImage = "url('../assets/f-lower.svg')";
  }
  if (event.key == "g"){
    canvas.style.backgroundImage = "url('../assets/g-lower.svg')";
  }
  if (event.key == "h"){
    canvas.style.backgroundImage = "url('../assets/h-lower.svg')";
  }
  if (event.key == "i"){
    canvas.style.backgroundImage = "url('../assets/i-lower.svg')";
  }
  if (event.key == "j"){
    canvas.style.backgroundImage = "url('../assets/j-lower.svg')";
  }
  if (event.key == "k"){
    canvas.style.backgroundImage = "url('../assets/k-lower.svg')";
  }
  if (event.key == "l"){
    canvas.style.backgroundImage = "url('../assets/l-lower.svg')";
  }
  if (event.key == "m"){
    canvas.style.backgroundImage = "url('../assets/m-lower.svg')";
  }
  if (event.key == "n"){
    canvas.style.backgroundImage = "url('../assets/n-lower.svg')";
  }
  if (event.key == "o"){
    canvas.style.backgroundImage = "url('../assets/o-lower.svg')";
  }
  if (event.key == "p"){
    canvas.style.backgroundImage = "url('../assets/p-lower.svg')";
  }
  if (event.key == "q"){
    canvas.style.backgroundImage = "url('../assets/q-lower.svg')";
  }
  if (event.key == "r"){
    canvas.style.backgroundImage = "url('../assets/r-lower.svg')";
  }
  if (event.key == "s"){
    canvas.style.backgroundImage = "url('../assets/s-lower.svg')";
  }
  if (event.key == "t"){
    canvas.style.backgroundImage = "url('../assets/t-lower.svg')";
  }
  if (event.key == "u"){
    canvas.style.backgroundImage = "url('../assets/u-lower.svg')";
  }
  if (event.key == "v"){
    canvas.style.backgroundImage = "url('../assets/v-lower.svg')";
  }
  if (event.key == "w"){
    canvas.style.backgroundImage = "url('../assets/w-lower.svg')";
  }
  if (event.key == "x"){
    canvas.style.backgroundImage = "url('../assets/x-lower.svg')";
  }
  if (event.key == "y"){
    canvas.style.backgroundImage = "url('../assets/y-lower.svg')";
  }
  if (event.key == "z"){
    canvas.style.backgroundImage = "url('../assets/z-lower.svg')";
  }
})