const ballons = document.querySelectorAll('.bl');
const yay = document.getElementById('yay-no-ballons');

let estourados = 0;

//Executa a ação sobre cada balão
function ballonPopper(ballonVariable) {
	ballonVariable.addEventListener('mouseover', () => {

		if (ballonVariable.style.background === "none") {
			ballonVariable.innerText = "";
		} else {
			ballonVariable.innerText = "POP!";
			ballonVariable.style.background = "none";
			estourados += 1;
		
		}
	});


	ballonVariable.addEventListener('mouseout', () => {
		ballonVariable.innerText = "";
	}, false);
}

//Atribui a função ballonPopper() para cada balão
for (let b of ballons) {
	ballonPopper(b);
}

//Monitora balões estourados
document.addEventListener('mouseover', () => {
	if (estourados === ballons.length) {
		yay.style.display = "block";
		window.scrollTo(0, 0);
	}
});
