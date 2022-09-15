const head = document.querySelector('.head');
const count = document.querySelector('.count');
const counter = document.querySelector('.counter');


setTimeout(() => head.innerText = 'Hey This is Punit.', 3000);
let c=1;
setInterval(() => {
    if(c < 100){
        c++;
        count.innerText = c;
    }
}, 27);


let cou = 1;
setInterval(() => {
    if(cou < 50){
        cou++;
        counter.innerText = cou;
    }
}, 59.5);