const pass = document.querySelector("#password");
const p = document.querySelector(".passinfo");
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showFunction = () => {
	if (
		pass.value.lenght > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		p.textContent = "Masz super Hasło!";
		p.style.color = "green";
	} else if (pass.value.lenght > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
		p.textContent = "masz całkiem spoko hasło";
		p.style.color = "gold";
	} else {
		p.textContent = "masz słąbe hasło";
		p.style.color = "red";
	}
};
