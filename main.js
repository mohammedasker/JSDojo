// INTRO STAGE
//start conversationootv
	document.addEventListener('click', ()=>{
		document.querySelector('#text').innerHTML = 'Welcome to the JS Dojo';
		document.querySelector('#showBtn').style.display = 'block';
	})
// Master introducing itself
	function btn2() {
		document.querySelector('#text2').innerHTML = "My name is JavaScript and I'm here to teach you every skills I know to help you become the strongest Coding Warrior in the world!";
		document.querySelector('#showBtn2').style.display = 'block';
	}

// Master asks if player is ready
	function btn3() {
		document.querySelector('#text3').innerHTML = "The training will be a living hell! Are you ready?";
		document.querySelector('#showBtn3').style.display = 'block';
		document.querySelector('#showBtn3').style.display = 'block';
	}
// Player selects Yes and disable No button
	if (document.querySelector('#btn4').onclick = function() {
		document.querySelector('#btn5').disabled = true;
		document.querySelector('#text4').innerHTML = "Good! Then, let's begin by going to the first stage.";
		document.querySelector('#showBtn4').style.display = 'block';
	})
// Player selects No and disable Yes button
// Spawn next stage button
	if (document.querySelector('#btn5').onclick = function() {
		document.querySelector('#btn4').disabled = true;
		document.querySelector('#text5').innerHTML = "I see. When you're ready for the training, let me know."; 
	    document.querySelector('#showBtn5').style.display = 'block';
	})

// Spawn Retry button when selected No
	function tryBtn(){
		window.location.reload()
	}
// End of Intro Stage

// STAGE 1

// Show message if player selected wrong answer
// Disable other buttons if player selected answer
	function answerA() {
		document.querySelector('#showWrong').style.display = 'block';
		document.querySelector('#btnA').style.background = 'red';
		document.querySelector('#btnA').style.color = 'white';
		document.querySelector('#btnB').disabled = true;
		document.querySelector('#btnC').disabled = true;
		document.querySelector('#btnD').disabled = true;
	}

// Show message if player selected wrong answer
// Disable other buttons if player selected answer
	function answerB() {
		document.querySelector('#showWrong').style.display = 'block';
		document.querySelector('#btnB').style.background = 'red';
		document.querySelector('#btnB').style.color = 'white';
	    document.querySelector('#btnA').disabled = true;
		document.querySelector('#btnC').disabled = true;
		document.querySelector('#btnD').disabled = true;
	}

// Show message if player selected wrong answer
// Disable other buttons if player selected answer
	function answerC() {
		document.querySelector('#showWrong').style.display = 'block';
		document.querySelector('#btnC').style.background = 'red';
		document.querySelector('#btnC').style.color = 'white';
		document.querySelector('#btnA').disabled = true;
		document.querySelector('#btnB').disabled = true;
		document.querySelector('#btnD').disabled = true;
	}

// Show message if player selected correct answer
// Disable other buttons if player selected answer
// Spawn next stage button when selected right answer
	function answerD() {
		document.querySelector('#showRight').style.display = 'block';
		document.querySelector('#btnD').style.background = 'green';
		document.querySelector('#btnD').style.color = 'white';
		document.querySelector('#btnA').disabled = true;
		document.querySelector('#btnB').disabled = true;
		document.querySelector('#btnC').disabled = true;
	}

// Spawn Retry button when selected wrong answer
	function tryBtn2(){
		window.location.reload()
	}
// End of stage 1

// STAGE 2
// Show boss when player clicked 'start a battle' button

   function startFight() {
   	document.querySelector('#showBoss').style.display = 'block';
   }

   function beatDown() {
   	let currentval = document.querySelector('#beatDownButton').innerHTML;
   	let newval = currentval - 0;
   	if (currentval > 0) {
   		newval = currentval - 1;
   	}
   	document.querySelector('#beatDownButton').innerHTML = newval;
   	// Spawn next stage button when countdown reached 0
   	if (currentval == 0) {
   	document.querySelector('#showBoss').style.display = 'none';
   	document.querySelector('#battlestart').style.display = 'none';
   	document.querySelector('#stageClear').style.display = 'block';
   }
   }

// End of stage 2

// STAGE 3
// Create progress bar and move the bar when clicked the button
	function move() {
	document.querySelector('#startbtn').style.display = 'block';
	let elem = document.querySelector("#myBar");
	let width = 1;
	let id = setInterval(frame, 90);

// Stop the progress bar from moving when it is 100%
// Spawn Retry button when the progress bar is 100%
	function frame() {
		if (width >= 100) {
			clearInterval(id);
			document.querySelector('#failed').style.display = 'block';
			document.querySelector('#drug').disabled = true;
		} else {
			width++;
			elem.style.width = width + '%';
		}

// Disable start button when user clicks it
   if (document.querySelector('#move').onclick = function(){
   	document.querySelector('#move').disabled = true;
   	console.log('start button disabled');
   })


// Change the progress bar into green when it's less than 50%
		if (width >= 0) {
			document.querySelector('#myProgress').style.backgroundColor = '#4CAF50';
			document.querySelector('#newText').innerHTML = 'Find the antibotic potion';
			document.querySelector('#drug').style.display = 'block';
			console.log('game start');
		}

// Change the progress bar into orange when it reached 50%
		if (width >= 50) {
			document.querySelector('#newText').innerHTML = 'Oh, no! Master is getting worse!';
			document.querySelector('#myProgress').style.backgroundColor = 'orange';
			console.log('half damage');
		}

// Change the progress bar into red when it reached 85%
		if (width >= 85) {
			document.querySelector('#newText').innerHTML = 'Master is about to die! Hurry!';
			document.querySelector('#myProgress').style.backgroundColor = 'red';
			console.log('critical damage');
		}
	}
}
// Refresh the page when clicked Retry button
	function tryBtn3() {
		window.location.reload()
}

// Hide the progress bar transition when user clicked the drug button
// Spawn next stage button when user clicks drug button
// Show mission passed message when user clicks drug button

function theDrug() {
	document.querySelector('#passed').style.display = 'block';
	[
	'myProgress',
	'myBar',
	'move',
	'newText',
	'gamefail',
	'textfail',
	'btnfail',
	'startbtn'
	].forEach(function(elementId){
		document.getElementById(elementId).style.display = 'none';
	})
	console.log('found potion');
}
// End of Stage 3

// FINAL STAGE
// Start the countdown when user clicks start button
// Create the countdown timer
function playGame() {
	document.querySelector('#gamestart').style.display = 'block';
	let seconds = document.querySelector("#countdown").textContent;
	let countdown = setInterval(function(){
	    seconds--;
	    document.querySelector("#countdown").textContent = seconds;
	    if (seconds <= 0) {
	    clearInterval(countdown);
	    document.querySelector('#gameover').style.display = 'block';
		document.querySelector('#countdown').style.display = 'none';
		document.querySelector('#startbtn').style.display = 'none';
		document.querySelector('#found').style.display = 'none';
		console.log('number is counting');
		console.log('Game failed');}
		if (seconds <= 10) {
		document.querySelector('#countdown').style.color = 'red';
		}
	},1000);
}
// Hide the countdown timer when user beat the master
// Show message and the reward room button when user click found you button
 function foundYou() {
 	document.querySelector('#gamewin').style.display = 'block';
 	[
 	'youlose',
 	'losetext',
 	'restartbtn',
 	'gamestart',
 	'countdown',
 	'startbtn'
 	].forEach(function(elementId){
 		document.getElementById(elementId).style.display = 'none';
 		console.log('I found you');
 	})
 }

// End of Final Stage
