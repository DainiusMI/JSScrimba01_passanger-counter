let value = 0;
let counterEl = document.getElementById('counter-phar');

function increment() {
    value ++;
    counterEl.innerText = value;

}
function save() {
    let messageStart = 'Previous entries: ';
    let massangerCount = document.getElementById('counter-phar').innerText;
    let combine = messageStart + massangerCount;

    document.getElementById('saved-values').innerText = combine;

}