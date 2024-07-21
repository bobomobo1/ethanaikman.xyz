let userInput, terminal;
const init = () => {
	console.log("Ready!");
	window.userInput = document.getElementById("userInput");
	terminal = document.getElementById("terminal");
	document.getElementById("keyboard").focus();
};

const commandInput = function executeCommand(input){
	let output;
	input = input.toLowerCase();
	if(input.length === 0) {
		return;
	}

	output = `<div class="commandline">
		      <span>➜</span>
		      ${input}
		  </div>`;
	if(!commands.hasOwnProperty(input)){
	output += `<div class="commandline">
		      command:
		      ${input}
		      doesn't exist.
		  </div>`;
	}else{
	output += `<div class="commandline">
		      ${commands[input]}
		  </div>`;
	}
	
	terminal.innerHTML = `${terminal.innerHTML}<div class="commandline">${output}</div>`;
	terminal.scrollTop = terminal.scrollHeight;
};

const key = function keyEvent(e){
	userInput = document.getElementById("userInput");
	const input = window.userInput.innerHTML;

	if (e.key === "Enter"){
		commandInput(input);
		userInput.innerHTML = "";
		return;
	}

	userInput.innerHTML = input + e.key;
	console.log(e.key);

};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
init();

const commands = {

	help:
		'Commands: <br> <br> &emsp; <span class="command">about</span> <span class"description">  &emsp; &emsp; &emsp; &emsp; &emsp; Explains this website</span>'
};
