var countText = document.getElementById('count-text');
var count = 0;

function increase() {
	count++;
	countText.innerHTML = count;
}

function decrease() {
	count--;
	countText.innerHTML = count;
}

function reset() {
	countText.innerHTML = 0;
}