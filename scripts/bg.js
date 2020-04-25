const body = document.querySelector("body");
const IMG_NUMBER = 9;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `../resources/${imgNumber}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
}

function genRandom() {
    return Math.floor(Math.random() * 10) % IMG_NUMBER;
}
function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();