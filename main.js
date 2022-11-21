const SCREEN_WIDTH = 900:
const SCREEN_HEIGHT = 600;

const canvas = document.createElement("canvas")
canvas.setAttribute("width", SCREEN_WIDTH)
canvas.setAttribute("height", SCREEN_HEIGHT)
document.body.(canvas)

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
    renderMinimap(0,0,0.75, rays)
}

setInterval(gameLoop,TICK)