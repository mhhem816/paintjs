const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsclolr")
const range = document.getElementById("jsRange");
const range = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");



const INITIAL_COLOR = "2c2c2c";
const CANVAS_SIZE = 700

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE; 

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE , CANVAS_SIZE)
ctx.strokeStyle ="#INITIAL_COLOR";
ctx.fillStyle = "INITIAL_COLOR";
ctx.lineWidth = 2.5;


let painting = false;
let filling = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event) {
    // console.log(event);
        const x= event.offsetX;
        const y= event.offsetY;
        if(!painting){
            ctx.beginPath();
            ctx.moveTo(x, y);
        }else{
            ctx.lineTo(x, y);
            ctx.stroke();
        }
}

// onMouseMove 는 마우스를 움직이는 내내 발생함

// function onMouseDown(event){
//     // console.log(event);
//     painting = true;
// }

// function onMouseUp(event){
//     // painting = false;
//     stopPainting();
// }

// function onMouseLeave(event){
//     painting = false;
// }

function handleColorClick(event){
    // console.log(event.target.style);
    const color = event.target.style.backgroundColor;
    // console.log(color);
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth =size;
}

function handleModeClick(){
    if(filling === true){
        filling = false;
        mode.innerText = "fill"
    }else{
        filling = true;
        mode.innerText = "paint"
        // ctx.fillStyle = ctx.strokeStyle;
    }
}

function handleCanvasClick(){
    if(filling){
    ctx.fillRect(0,0, CANVAS_SIZE , CANVAS_SIZE)
    }
}

function handleColorClick(event){
    event.preventDetault();
}

function handleSaveClick(){
    const image = convas.toDataURL ("image/jpad"); // console.log(image); 
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS"
    link.click();
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
     canvas.addEventListener("mousedown", startPainting);
    // canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", stopPainting);
    // canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
    // canvas.addEventListener("mouseleave", onMouseLeave);
     canvas.addEventListener("click", handleCanvasClick);
     canvas.addEventListener("contextmenu", handleCM);
}
// console.log(Array.from(colors));
Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick)
);
//array를 주면 그 array안에서 forEach로 color를 가질수 있다.

if(range){
    range.addEventListener("input", handleRangeChange)
}

if(mode){
    mode.addEventListener("click", handleModeClick)
}
if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick)
}