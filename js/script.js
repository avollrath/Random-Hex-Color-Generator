const btn = document.querySelector('button');
const input = document.querySelector('input');
const boxes = document.querySelector('.boxes');


btn.addEventListener("click", addRanBox);




function addRanBox(){

boxes.innerHTML = '';

let count = input.value;

for (i= 0; i <= count; i++) {
    let box = document.createElement("div");
    let color = ranHexCol();
    box.className = 'box';
    box.style.backgroundColor = color;
    box.innerHTML = color;
    box.addEventListener("click",copyToClipboard);
    boxes.appendChild(box);
}


}


function ranHexCol() {

var letters = '0123456789ABCDEF';
var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;

}

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = event.target.innerHTML;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showCopiedText();
  };






  function showCopiedText(){


let message = document.createElement("h1");
message.innerHTML = 'COPIED';
message.className = 'message';
event.target.appendChild(message);
fadeOutEffect(message);
}





function fadeOutEffect(target) {
let fadeTarget = target;
let fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.005;
        } else {
            clearInterval(fadeEffect);
        }
    }, 1);
    
    setTimeout(function(){
        document.querySelector('.message').remove();
   },1500);
}