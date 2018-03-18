var paragraph = document.querySelector('p');
paragraph.addEventListener('click', updateName);

function updateName(){
	var name = prompt('Enter your name');
	paragraph.textContent = 'Player 1: ' +name;
}