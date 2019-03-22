const btn = document.querySelector('button');
const input = document.querySelector('input');
const boxes = document.querySelector('.boxes');


btn.addEventListener("click", addBox);


function addBox(){
boxes.innerHTML = '';
document.querySelector('p').textContent = 'Click on a color to copy it!';
let i = 0;
do{
    let box = document.createElement('div');
    let color = ranHexCol();
    box.className = 'box';
    box.style.backgroundColor = color;
    box.innerHTML = color;
    box.addEventListener("click",copyToClipboard);
    boxes.appendChild(box);
    i++;
}
while (i < input.value)
}

function ranHexCol() {
const letters = '0123456789ABCDEF';
let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

function showText(){
let message = document.createElement('h1');
message.innerHTML = 'COPIED!';
message.className = 'message';
event.target.appendChild(message);
fadeOutEffect(message);
}

function copyToClipboard() {
    const textArea = document.createElement('textarea');
    textArea.value = event.target.innerHTML;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showText();
  };


function fadeOutEffect(fadeTarget) {

setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.005;
        } else {
            clearInterval(fadeEffect);
        }
    }, 5);
    
setTimeout(function(){
        document.querySelector('.message').remove();
   },1500);
}

