let conf = confirm("do you want check my magic?")
if (conf == true) {
	alert("ok, man let`s go");
	let age = prompt("Hello, What is your age?", '18');
	if (age < 18) {
		window.location.replace("https://www.pornhub.com/");
	} else if (age >= 18) {
		var nameM = prompt('Whats your name ?', 'max');
		const itemM = document.querySelector('div');
		const newElement = document.createElement('div')
		newElement.innerHTML = `Hello ${nameM}, this my website. Do you know, hahah`
		itemM.after(newElement);
	}
} else {
	window.open(
		"https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/", "");

}