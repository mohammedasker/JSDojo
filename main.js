const fullNames = names.map(function(name){
  return `${name} Bos`;
});

console.log(fullNames); // Wes Bos, Kait Bos, Lux Bos


// INTRO STAGE
//start conversation
	function btn() {
		document.getElementById('text').innerHTML = 'Welcome to the JS Dojo';
		document.getElementById('showBtn').style.display = 'block';
	}
// Master introducing itself
	function btn2() {
		document.getElementById('text2').innerHTML = "My name is JavaScript and I'm here to teach you every skills I know to help you become the strongest Coding Warrior in the world!";
		document.getElementById('showBtn2').style.display = 'block';
	}
// Master asks if player is ready
	function btn3() {
		document.getElementById('text3').innerHTML = "The training will be a living hell! Are you ready?";
		document.getElementById('showBtn3').style.display = 'block';
		document.getElementById('showBtn3').style.display = 'block';
	}
// Player selects Yes and disable No button
	if (document.getElementById('btn4').onclick = function() {
		document.getElementById('btn5').disabled = true;
		document.getElementById('text4').innerHTML = "Good! Then, let's begin by going to the first stage.";
		document.getElementById('showBtn4').style.display = 'block';
	})
// Player selects No and disable Yes button
// Spawn next stage button
	if (document.getElementById('btn5').onclick = function() {
		document.getElementById('btn4').disabled = true;
		document.getElementById('text5').innerHTML = "I see. When you're ready for the training, let me know."; 
	    document.getElementById('showBtn5').style.display = 'block';
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
		document.getElementById('showWrong').style.display = 'block';
		document.getElementById('btnA').style.background = 'red';
		document.getElementById('btnA').style.color = 'white';
		document.getElementById('btnB').disabled = true;
		document.getElementById('btnC').disabled = true;
		document.getElementById('btnD').disabled = true;
	}

// Show message if player selected wrong answer
// Disable other buttons if player selected answer
	function answerB() {
		document.getElementById('showWrong').style.display = 'block';
		document.getElementById('btnB').style.background = 'red';
		document.getElementById('btnB').style.color = 'white';
	    document.getElementById('btnA').disabled = true;
		document.getElementById('btnC').disabled = true;
		document.getElementById('btnD').disabled = true;
	}

// Show message if player selected wrong answer
// Disable other buttons if player selected answer
	function answerC() {
		document.getElementById('showWrong').style.display = 'block';
		document.getElementById('btnC').style.background = 'red';
		document.getElementById('btnC').style.color = 'white';
		document.getElementById('btnA').disabled = true;
		document.getElementById('btnB').disabled = true;
		document.getElementById('btnD').disabled = true;
	}

// Show message if player selected correct answer
// Disable other buttons if player selected answer
// Spawn next stage button when selected right answer
	function answerD() {
		document.getElementById('showRight').style.display = 'block';
		document.getElementById('btnD').style.background = 'green';
		document.getElementById('btnD').style.color = 'white';
		document.getElementById('btnA').disabled = true;
		document.getElementById('btnB').disabled = true;
		document.getElementById('btnC').disabled = true;
	}

// Spawn Retry button when selected wrong answer
	function tryBtn2(){
		window.location.reload()
	}
// End of stage 1

// STAGE 2
// Show boss when player clicked 'start a battle' button

   function startFight() {
   	document.getElementById('showBoss').style.display = 'block';
   }

   function beatDown() {
   	let currentval = document.getElementById('beatDownButton').innerHTML;
   	let newval = currentval - 0;
   	if (currentval > 0) {
   		newval = currentval - 1;
   	}
   	document.getElementById('beatDownButton').innerHTML = newval;
   	// Spawn next stage button when countdown reached 0
   	if (currentval == 0) {
   	document.getElementById('showBoss').style.display = 'none';
   	document.getElementById('battlestart').style.display = 'none';
   	document.getElementById('stageClear').style.display = 'block';
   }
   }

// End of stage 2

// STAGE 3
// Create progress bar and move the bar when clicked the button
	function move() {
	document.getElementById('startbtn').style.display = 'block';
	let elem = document.getElementById("myBar");
	let width = 1;
	let id = setInterval(frame, 90);

// Stop the progress bar from moving when it is 100%
// Spawn Retry button when the progress bar is 100%
	function frame() {
		if (width >= 100) {
			clearInterval(id);
			document.getElementById('failed').style.display = 'block';
			document.getElementById('drug').disabled = true;
		} else {
			width++;
			elem.style.width = width + '%';
		}

// Disable start button when user clicks it
   if (document.getElementById('move').onclick = function(){
   	document.getElementById('move').disabled = true;
   	console.log('start button disabled');
   })


// Change the progress bar into green when it's less than 50%
		if (width >= 0) {
			document.getElementById('myProgress').style.backgroundColor = '#4CAF50';
			document.getElementById("newText").innerHTML = 'Find the antibotic potion';
			document.getElementById('drug').style.display = 'block';
			console.log('game start');
		}

// Change the progress bar into orange when it reached 50%
		if (width >= 50) {
			document.getElementById("newText").innerHTML = 'Oh,no! Master is getting worse!';
			document.getElementById('myProgress').style.backgroundColor = 'orange';
			console.log('half damage');
		}

// Change the progress bar into red when it reached 85%
		if (width >= 85) {
			document.getElementById("newText").innerHTML = 'Master is about to die! Hurry!';
			document.getElementById('myProgress').style.backgroundColor = 'red';
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
	document.getElementById('passed').style.display = 'block';
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
	document.getElementById('gamestart').style.display = 'block';
	let seconds = document.getElementById("countdown").textContent;
	let countdown = setInterval(function(){
	    seconds--;
	    document.getElementById("countdown").textContent = seconds;
	    if (seconds <= 0) {
	    clearInterval(countdown);
	    console.log('number is counting');
	    document.getElementById('gameover').style.display = 'block';
		document.getElementById('countdown').style.display = 'none';
		document.getElementById('startbtn').style.display = 'none';
		document.getElementById('found').style.display = 'none';
		console.log('Game failed');}
		if (seconds <= 10) {
		document.getElementById('countdown').style.color = 'red';
		}
	},1000);
}
// Hide the countdown timer when user beat the master
// Show message and the reward room button when user click found you button
 function foundYou() {
 	document.getElementById('gamewin').style.display = 'block';
 	[
 	'youlose',
 	'losetext',
 	'restartbtn',
 	'gamestart',
 	'countdown',
 	'startbtn'
 	].forEach(function(elementId){
 		document.getElementById(elementId).style.display = 'none';
 	})
 }

// End of Final Stage
