let white1 = document.getElementById('white');
let green1 = document.getElementById('green');
let skyblue1 = document.getElementById('skyblue');
let purple1 = document.getElementById('purple');
let container1 = document.getElementById('container');
let info1 = document.getElementById('info');
document.body.style.cssText = 'background-color:#fff';
white1.addEventListener('click', changeColor1);
green1.addEventListener('click', changeColor2);
skyblue1.addEventListener('click', changeColor3);
purple1.addEventListener('click', changeColor4);
container1.addEventListener('click', cont) 

function changeColor1() {
    document.body.style.cssText = 'background-color: #e0e0e0';
    info1.innerText = 'Background color: #e0e0e0';
}
function changeColor2() {
    document.body.style.cssText = 'background-color: #6fcf97'; 
    info1.innerText = 'Background color: #6fcf97'; 
}
function changeColor3() {
    document.body.style.cssText = 'background-color: #56ccf2';
    info1.innerText = 'Background color: #56ccf2';  
}
function changeColor4() {
    document.body.style.cssText = 'background-color: #bb6bd9';
    info1.innerText = 'Background color: #bb6bd9'; 
}

// 