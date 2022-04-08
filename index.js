let counter = 0;
let counterEl = document.getElementById('counter-phar');
let displayMessageEl = document.getElementById('saved-values');

function increment() {
    counter ++;
    counterEl.textContent = counter;
}

function save() {
    let  counterStr = counter + ' - ';
    displayMessageEl.textContent += counterStr;
    counterEl.textContent = 0; 
    counter = 0;

}