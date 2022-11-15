function background() {
	let value = document.getElementById('background').value;
	let elem = document.querySelector('body');
	console.log(value);
	console.log(elem);
	elem.style.backgroundColor = value;
}

function text() {
	let value = document.getElementById('text').value;
	let elem = document.querySelector('p');
	console.log(value);
	console.log(elem);
	elem.style.color = value;
}

function link() {
	let value = document.getElementById('link').value;
	let elem = document.querySelector('a');
	console.log(value);
	console.log(elem);
	elem.href = "https://www."+value;
}