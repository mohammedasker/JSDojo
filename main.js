// INTRO STAGE
//start conversation
	function btn() {
		document.getElementById('text').innerHTML = 'Welcome to the JS Dojo!';
		document.getElementById('showBtn').style.display = 'block';
	}
// Master JavaScript introducing itself
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
// Player selects Yes
	if (document.getElementById('btn4').onclick = function() {
		document.getElementById('btn5').disabled = true;
		document.getElementById('text4').innerHTML = "Good! Then, let's begin by going to the first stage.";
		document.getElementById('showBtn4').style.display = 'block';
	})
// Player selects No
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

// STAGE 2
// STAGE 3
// FINAL STAGE
