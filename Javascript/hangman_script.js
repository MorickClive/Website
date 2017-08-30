// Javascript Browser UI Functions

	let consoleSize = 5;
	let myGuessWord = "";
	let myHiddenWord = "";
	let tries = 11;

	// global functions
	function makeBold(x){ 
		return "<b>"+x+"</b>";
	}
	function pageDiv(){
		document.write("<hr>");
	}

	function nLine(y = 1){
		for(let x = 1; x <= y; x++)
		{
			document.write("<br>")
		}
	}

	function rtnLetter(){
		let activeElement = document.getElementById("Letter_Field").value.charAt(0).toUpperCase();
		
		consoleOut("You have entered: '" + activeElement +"'.");
		
		// clean up after user entry.
		cleanField();
		
		fillHidden(activeElement);
	}
	
	function fillHidden(letter){
		let pos = -1;
		let str = "";
		
		console.log(letter);
		
		for(let x = 0; x < myHiddenWord.length; x++){
			//console.log(myGuessWord.charAt(x));
			if(myGuessWord.charAt(x) ===  letter){
				pos = x;
				break;
			}
		}
		
		if(pos !== -1){
			//console.log(pos); // debug
			for(let x = 0 ; x < myHiddenWord.length; x++){
				if(myGuessWord.charAt(x) === myGuessWord.charAt(pos)){
					str += myGuessWord.charAt(x);
				}
				else{
				 str += myHiddenWord.charAt(x);
				}			
			}
			
			myHiddenWord = str;
			hangmanOut("Guess this word: " + myHiddenWord + "||        You have " + tries + " tries left.");
			
			if (str === myGuessWord){
				consoleOut("----------------------------------------------------------");				
				consoleOut("You have discovered the word: " + myGuessWord + ".");	
				consoleOut("YOU WIN!!!!!");
				consoleOut("----------------------------------------------------------");					
			}
			
		}
		else{ 
		 tries--;
		 
		 if(tries <= 0) {
			 	consoleOut("----------------------------------------------------------");				
				consoleOut("Game over: You been hanged!!!!!");	
				consoleOut("YOU LOSE!");
				consoleOut("----------------------------------------------------------");
		 }
		 else {
			 	consoleOut("Wrong!!!! : You have " + tries + " tries left.");
				hangmanOut("Guess this word: " + myHiddenWord + "||        You have " + tries + " tries left.");				
		 }
		}
	}
	
	function cleanField(){
		// clean field;
		document.getElementById("Letter_Field").value = "";
	}
	
	function getWord(callback){
		let requestURL = "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt";
		let randomWord = "";
		
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				
				let requestData = this.responseText.split("\n");
				let txtSize = requestData.length;
				//console.log(txtSize);
				randomWord = requestData[parseInt(Math.random()*txtSize)];
				// debug // console.log(requestData);
				
				callback(randomWord);
			}
		};
		xhttp.open("GET", requestURL, true);
		xhttp.send();

	}
			
	
	function consoleOut(val){
		let parentElement = document.getElementById("hangmanConsole");			
		
		// clean up
		if(parentElement.childElementCount > consoleSize){
			parentElement.removeChild(parentElement.firstChild);
		}
		
		let myPara = document.createElement('p');
		myPara.textContent = val;

		parentElement.appendChild(myPara);
	};
	
	function hangmanOut(val){
		let parentElement = document.getElementById("hangmanImage");			
		
		// clean up
		while (parentElement.hasChildNodes()) {
			parentElement.removeChild(parentElement.lastChild);
		}
		
		let myPara = document.createElement('p');
		myPara.textContent = val;

		parentElement.appendChild(myPara);
	};
	
	function consoleClean(){
		let parentElement = document.getElementById("hangmanConsole");			
		
		// clean up
		while(parentElement.hasChildNodes()){
			parentElement.removeChild(parentElement.firstChild);
		}
	}

	function consoleAuto(){
		consoleOut("----------------------------------------------");
		consoleOut("WELCOME TO HANGMAN.");
		consoleOut("Please use the console below to enter in your command.");
		consoleOut("----------------------------------------------");
		generateNewWord();
		
	}
	
	function replaceAt(string, index, replace) {
		return string.substring(0, index) + replace + string.substring(index + 1);
	}

	// this handles my output
	function handleWord(word){
		//consoleOut(word); // don't need to do this.
		myGuessWord = word.toUpperCase();
		console.log(myGuessWord); // this is my word
		
		let hiddenStr = "";
		for(let i = 0; i < myGuessWord.length; i++){
			hiddenStr += "_";
		}
		myHiddenWord = hiddenStr.toUpperCase();
		hangmanOut("Guess this word: " + myHiddenWord);
	}
	
	function generateNewWord(){
		getWord(handleWord); // use handleWord function to handle my var
	}
	
	
	
