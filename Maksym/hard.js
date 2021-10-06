const obj1 = document.querySelector('.input');
const obj2 = document.querySelector('.button');
const obj3 = document.querySelector('.zaebal');
obj1.style.display = "none";
obj2.style.display = "none";
obj3.style.display = "none";
window.onload = function () {
	var input = document.getElementById("writenumbers");
	if (localStorage.getItem("input")) {
		//if there is a stored value, apply it to the input
		input.value = localStorage.getItem("input");
	}
	input.oninput = function () {
		//if input is changed, store it
		localStorage.setItem("input", input.value);
	};
};
function proverka(input) {
	input.value = input.value.replace(/[^\d,]/g, '');
};
var check11 = false;

bEnter.onclick = function () {
	function play1() {
		if (!check1) {
			var audio = new Audio();
			audio.src = 'sound/click.mp3';
			audio.autoplay = true;
			check11 = true;
		}
	}
	setTimeout(play1, 100);
	let string = document.getElementById("writenumbers").value;
	//console.log(string);
	let matrix = string.split(',').map(Number);
	//console.log(matrix);
	matrix = Array.from(new Set(matrix))
	let on = 0;
	let no = 0;
	let nonEven = [];
	let integer = [];
	for (let i = 0; i <= matrix.length; i++) {
		if (matrix[i] % 2 == 0) {
			integer[on] = matrix[i];
			on++;
		}
	}
	for (let i = 0; i <= matrix.length; i++) {
		if (matrix[i] % 2 > 0) {
			nonEven[no] = matrix[i];
			no++;
		}
	}
	//console.log(`NonEven: ${nonEven}`);
	//console.log(`Even: ${integer}`);
	var check1 = false;
	check.onclick = function () {
		const solution = document.querySelector('.zaebal>h3');
		if (document.getElementById('even1').checked) {
			const element = document.querySelector('.answer');
			const newElementnon = document.createElement('h3');
			newElementnon.innerHTML = integer;
			element.innerHTML = "";
			element.prepend(newElementnon);
			solution.style.display = "";
		} else if (document.getElementById('noneven1').checked) {
			const elementN = document.querySelector('.answer');
			const newElementnonN = document.createElement('h3');
			newElementnonN.innerHTML = nonEven;
			elementN.innerHTML = "";
			elementN.prepend(newElementnonN);
			solution.style.display = "";
		}
	}
	obj1.style.display = "";
	obj2.style.display = "";
	obj3.style.display = "";
}



