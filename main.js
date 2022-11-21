const SCREEN_WIDTH = 900;
const SCREEN_HEIGHT = 600;
var div = document.getElementById("game");

const canvas = document.createElement("canvas")
canvas.setAttribute("width", SCREEN_WIDTH)
canvas.setAttribute("height", SCREEN_HEIGHT)
document.getElementById("game").appendChild(canvas)

const TICK = 30;

function clearScreen(){}
function movePlayer(){}
function getRays(){}
function renderScene(rays){}
function renderMinimap(x,y,scale,rays){}

function gameLoop(){
    clearScreen()
    movePlayer()
    const rays = getRays()
    renderScene(rays)
    rendrMinimp(0,0,0.75,rays)
}

setInterval(gameLoop,TICK)