$(document).ready(function(){

	var number, count, userGuess;

  	var setNumber = function(){
  		number = Math.floor(Math.random() * 101);
  	}

  	var newGame = function(){
		$('#feedback').html('Make your Guess!');
		count = 0;
		$('#count').html(count);
		$('#guessList').empty();
		setNumber();
	};

  	var checkGuess = function(){
  		if(userGuess % 1 !== 0){
  			alert('You must input a number to continue.');
  			return false;
  		}
  		if(userGuess < 0 || userGuess > 101){
  			alert('You must input a number between 0 and 100 to continue.');
  			return false;
  		}
    	return true;
	}

	var makeFeedback = function(){
		if(number == userGuess){
			$('#feedback').html('You won! Click the NEW GAME button to play again!');
		} 
		else if(Math.abs(number - userGuess) < 6){
			$('#feedback').html('scorching');
		} 
		else if(Math.abs(number - userGuess) < 11 && Math.abs(number - userGuess) > 5){
			$('#feedback').html('hot');
		} 
		else if(Math.abs(number - userGuess) < 21 && Math.abs(number - userGuess) > 10){
			$('#feedback').html('lukewarm');
		}
		 else if(Math.abs(number - userGuess) < 31 && Math.abs(number - userGuess) > 20){
			$('#feedback').html('chilly');
		} 
		else if(Math.abs(number - userGuess) < 51 && Math.abs(number - userGuess) > 30){
			$('#feedback').html('cold');
		} 
		else {
			$('#feedback').html('freezing');
		}
	}

	var processUserGuess = function(){
		userGuess = Math.floor($('#userGuess').val());
  		if (checkGuess() == false){
  			return false;
  		} 
  		else {
  		$('<li>' + userGuess + '</li>').appendTo('#guessList');
  		makeFeedback();
  		count++;
  		$('#count').html(count);
  		}
  	}

	//Functionality Section:

	newGame();

	$('.new').click(function(){
		newGame();
	});

		/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    $('form').submit(function(event){
    	processUserGuess();
    	return false;
    });

});