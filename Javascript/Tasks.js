// Javascript Browser UI Functions

	// global var (not a practice I will be repeating in the future.)
	var david = new buildPerson("David", 19, "IT scientist");

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

	// basic functions

	function add(x, y){
		return x + y;
	}
	
	function add3(x, y, w){
		return x + y + w;
	}
	
	function sq(x){
		return x * x;
	}

	function ultimateAnswer(){
		return "Answer to the Ultimate Question of " + answer + 42;
	}
	
	function buildPerson(name, age, occupation){ 
		this.name = name;
		this.age = age; 
		this.occupation = occupation;
		this.printMe = function (){
				return this.name + " is " + this.age + " years old, they work as a "
				+ this.occupation +".";
			}
		this.setAge = function (x){
				return this.age = x;
			}
	}
	
	function ageUP(person){
			person.setAge(person.age + 1);
		return  person.name+" is " + person.age + ".";
	}
	
	function strings1(){
		var string = "He said \"My name is Elliot\"";
		return string;
	}
	
	function strings2(str1, val){
		
		return str1 + val;
	}
	
	function printArray(list){
		document.write("<ul>");
		for(let x = 0; x < list.length; x++){
			document.write("<li>" + list[x] + "</li>");
		}
		document.write("</ul> <br>");
	}
	function printArray_VehicleList(list){
		document.write("<ul>");
		for(let x = 0; x < list.length; x++){
			document.write("<li>"+ "Entry #" + (1+x) + ": <br>" + list[x].printMe() + "</li>");
		}
		document.write("</ul> <br>");
	}
	
	function arrays1(){
		var myList = ["val 1", "val 2", "val 3"];
		
		document.write("ARRAYS: <br>");
		document.write("This is my list: <br>");
		printArray(myList);
		
		document.write("This is my list with a new value: <br>");
		myList[myList.length] = "new Val";
		printArray(myList);
		
		document.write("This is my list with the last value removed: <br>");
		delete myList[myList.length - 1];
		myList.splice(myList.length - 1,1);
		printArray(myList);
	}
	
	function checkAgeRange(person){
		if(person.age >= 20 && person.age <= 40){
			document.write(person.name+" is between 20 and 40 years old!");
		}
		else{
			document.write(person.name+" is NOT between 20 and 40 years old!");			
		}
		nLine(2);
	}
	
	function iteration(){
		document.write("Iteration 1:<br>");
		document.write("<div class = \"tab1\">");
		for(let x = 1; x <= 10; x++){
			document.write("Increment step #"+x);
			nLine(1);
		}
		document.write("</div>");
		
		nLine(2);
		
		document.write("Iteration 2:<br>");
		document.write("<div class = \"tab1\">");
		for(let x = 1; x <= 10; x++){
			if(x % 2 === 0){
				document.write("Increment step #"+x);
				nLine(1);
				}
		}
		document.write("</div>");
	}
	
	function challenge(){		
		var X = 24 + (29*2);
		var Y = X > 50;

		for(let x = 1; x <= 10; x++)
			{
				document.write("result : " + ((X/x) < 25) + "<br>");
			}
			
			document.write("result : " + add(12,55) + "<br>");
			document.write("<br>"+ (42 + 5));
	
		//alert("result : " + add(12,55));
		console.log("result : " + add(12,55));
		console.log(sq(5));
		console.log(add3(2,3,4));
		console.log(document.lastModified);
		console.log(david.printMe());
	}

	function form_CreatePerson(element_name, element_age, element_occ){
		return new buildPerson(	document.getElementsByName(element_name)[0].value,
		 						document.getElementsByName(element_age)[0].value,
								document.getElementsByName(element_occ)[0].value);
	}

	function basic(){
		document.write("<b>Basic!</b>")	;	
		nLine(2); // creates multiple doc new line prints
		
		// Task 1 - Square function
		document.write("Squared number:");	nLine(1);
		document.write("5 Squared: " + sq(5))
		nLine(2); // end
		
		// Task 2 - Sum of 3 values
		document.write("Sum of 3 numbers:");	nLine(1);
		document.write("1,2,3 <br>sum:  " + add3(1,2,3));
		nLine(2); // end
		
		// Task 3 - Person Object
		// Task 4 - button to boost age
		document.write("Person class:");
		var kelly = new buildPerson("Daniel", 24, "Fish Factory Manager");	nLine(1);
		document.write(kelly.printMe());
		kelly.setAge(kelly.age +1);	nLine(1);
		document.write(kelly.printMe());
		nLine(2); // end
		
		// Task 5 - create a form that creates a person object(PENDING)
	}
	function basic2(){
		nLine();

		// Task 6 - write out text with \" and also print uppercase version.
		// Task 7 - Concatenate a String and a Number together.
		document.write(strings1());							nLine(1);
		document.write(strings1().toUpperCase());			nLine(1);
		document.write(strings2("This is my number: ", 5));	nLine(2);
		
		// Task 8 - an array of 3 strings, output it.
		// Task 9 - add a string to said array, output it.
		// Task 10 -  remove last string from array, output it.
		arrays1();
		
		// Task 11 - check that a person is between the age of 20 and 40. Output result.
		checkAgeRange(david);
		
		// Task 12 - Create a for loop that prints out each iteration with its respective value.
		// Task 13 - Create a for loop which onLiney prints out values that are divisible by 2.
		iteration();
		// end of Basic (for now)
	}
	
	// intermediate functions
	
	function fizzBUZZ(){
		
		// this section makes a table through iteration that creates a new row
		// every 5 entries.
		document.write(makeBold("<u>FIZZBUZZ iterator:</u>"));
		nLine(2);
		
		// let's place this into a table!
		document.write("<table><tr>");
		for(let x = 1; x <= 100; x++){
			// split ever 5 numbers up
			if(x % 5+1 === 0){document.write("<tr>");}
			
			// all elements contained in a field
			document.write("<td>");			
			if(x % 3 === 0 && x % 5 === 0){
				document.write(makeBold("FizzBuzz"));
			}
			else if(x % 3 === 0 ){	document.write(makeBold("Fizz"));}
			else if(x % 5 === 0){	document.write(makeBold("Buzz"));}
			else{
				document.write(x);
			}
			// all elements contained in a field
			document.write("</td>");	
			
			// split ever 5 numbers up
			if(x % 5 === 0){document.write("</tr>");}
		}
		document.write("</table>");
		nLine(2);
	}
	
	function fizzBUZZ_bonus(maxIter, word1, word2){
		
		// this section makes a table through iteration that creates a new row
		// every 5 entries.
		document.write(makeBold("<u>"+word1+word2+" iterator:</u>"));
		nLine(2);
		
		// let's place this into a table!
		document.write("<table><tr>");
		for(let x = 1; x <= maxIter; x++){
			// split ever 5 numbers up
			if(x % 5+1 === 0){document.write("<tr>");}
			
			// all elements contained in a field
			document.write("<td>");			
			if(x % 3 === 0 && x % 5 === 0){
				document.write(makeBold(word1 + word2));
			}
			else if(x % 3 === 0 ){	document.write(makeBold(word1));}
			else if(x % 5 === 0){	document.write(makeBold(word2));}
			else{
				document.write(x);
			}
			// all elements contained in a field
			document.write("</td>");	
			
			// split ever 5 numbers up
			if(x % 5 === 0){document.write("</tr>");}
		}
		document.write("</table>");
		nLine(2);
	}
	
	function iteration4(i){
		// i is a number ideally, that is used as our starting point.
		let iterationCount = 0;
		let val = i;
		
		document.write(makeBold("<u>divisible by 3:</u>"));
		nLine(1);
		
		while(val !== 1){
			
			if(val %3 === 0){
				document.write(val + " is divisible by 3! :");
				val = val / 3;
			}
			else if( (val+1) %3 === 0){
				document.write(val + " needs 1 to be divisible by 3:");
				val++;
				val = val / 3;
			}
			else if( (val-1) %3 === 0){
				document.write(val + " needs -1 to be divisible by 3:");
				val--;
				val = val / 3;
			}
			
			iterationCount++;
			
			nLine(1);
			document.write("val: " +  val);
			nLine(1);
		}
		nLine(2);
		document.write("Your value:  "+i+" has reached: " +  val + "!");
		nLine(1);
		document.write("It took <b>" + iterationCount + "</b> iterations to reach this value!");
		nLine(2);
	}
	
	function tripleString(i){
		let val = i;
		let count = 0;
		val = val.toLowerCase(); // normalise our data somewhat
		 
		for(let x = 0; x < val.length - 1; x++){
			count += (val.charAt(x) ===  val.charAt(x+1) && val.charAt(x) ===  val.charAt(x+2) )
					? 1 : 0;			
		}
		return count;
	}
	
	function strings4(){
		var str = "xXxYxx";
		document.write(makeBold("<u>Triple String:</u>"));
		nLine();
		document.write("Val: "+str);
		nLine();
		document.write(tripleString(str));
		nLine(2);
	}
	
	function createParagraph(targetID, nameAttr){
		let para = document.createElement("p");
		para.setAttribute("name", nameAttr);
		let node = document.createTextNode(getText("form_paragraphText"));
		para.appendChild(node);

		let element = document.getElementById(targetID);
		element.appendChild(para);
	}
	
	function appendParagraph(targetName){
		let val = document.getElementsByName(targetName)[0];
		val.childNodes[0].nodeValue += getText("form_paragraphText");
	}	
	
	function deleteParagraph(targetName){
		let val = document.getElementsByName(targetName)[0];
		if(val){val.parentNode.removeChild(val);}
	}	

	function getText(textName){
		return document.getElementsByName(textName)[0].value;
	}
	
	function domInsert(){
		let targetVal = "script_object";
		let objectName = "custom_para";
		let str = "This is my function value, passed in by a variable.";

		let buttons = ["para_create", "para_append", "para_del"];
		let strfunc = [ `createParagraph("${targetVal}", "${objectName}")`,
						`appendParagraph("${objectName}")`,
						`deleteParagraph("${objectName}")`]

		document.getElementsByName(buttons[0])[0].setAttribute("onclick", strfunc[0]);
		document.getElementsByName(buttons[1])[0].setAttribute("onclick", strfunc[1]);
		document.getElementsByName(buttons[2])[0].setAttribute("onclick", strfunc[2]);
	}
	
	function json1(){		
		let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
		
		document.write("<p id = \"script_json\"><b>JSON 1</b></p>");
		
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				let squadStr = ["squadName", "homeTown", "members"];
				let requestData = JSON.parse(this.responseText);
				
				let parentElement = document.getElementById("script_json");
					let myH3 = document.createElement('h3');
					let myPara1 = document.createElement('p');
				
				myH3.textContent = requestData["squadName"];
				myPara1.textContent = 	"From: " + requestData[squadStr[1]] +
										", No of Members: " +
										requestData[squadStr[2]].length;
										
				// output header						
				parentElement.appendChild(myH3);
				parentElement.appendChild(myPara1);
										
				for(let x = 0; x < requestData[squadStr[2]].length; x++){
					let p = document.createElement('p');
					
					p.textContent = "Name : " + 				requestData[squadStr[2]][x]["name"] + 
									"; Age: " + 				requestData[squadStr[2]][x]["age"] +
									"; Secret ID: " + 			requestData[squadStr[2]][x]["secretIdentity"] +
									"; Main special power: " +  requestData[squadStr[2]][x]["powers"][0] +
									"; Total powers: " + 		requestData[squadStr[2]][x]["powers"].length;
					
					parentElement.appendChild(p);
				}
				// debug // console.log(requestData);	
			}
		};
		xhttp.open("GET", requestURL, true);
		xhttp.send();
	}
	
	// tragic code, needs re-evaluation/re-implemetation do more flexable use.
	function json2_Search(){
		let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";
		
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				
				let requestData = JSON.parse(this.responseText);
				let jsonSize = requestData.length;
				let val = document.getElementsByName("form_jsonSearch")[0].value;
				
				let parentElement = document.getElementById("script_json2");
					let myH3 = document.createElement('h3');
					let myPara1 = document.createElement('p');
				
				
				myH3.textContent = "Search results:";
				for(let x = 0; x < jsonSize; x++){
					if(requestData[x]["nm"].includes(val)){
						myPara1.textContent += "Name : " + requestData[x]["nm"] + ", ";
						myPara1.textContent += "City : " + requestData[x]["cty"]+ ", ";
						myPara1.textContent += "House : " + requestData[x]["hse"]+ ", ";
						myPara1.textContent += "Years : " + requestData[x]["yrs"]+ ".";
						break;
					}				
				}
				parentElement.appendChild(myH3);
				parentElement.appendChild(myPara1);
				// debug // console.log(requestData);	
			}
		};
		xhttp.open("GET", requestURL, true);
		xhttp.send();
	}
	
	// see above.
	function json2(){
		document.write("<p id = \"script_json2\"><b>JSON 2</b></p>");
		document.write(	"<table><tr>"+
						"<td>Search by name: </td>"+
						"<td><input type=\"text\" name=\"form_jsonSearch\"></td>"+
						"<td><button onclick= \"json2_Search()\">Search</button></td>"+
						"</tr></table>");
	}
	
	
	function buildCar(model, reg, val, faults){ 
		this.model = model;
		this.reg = reg;
		this.value = val;	
		this.faults = faults; 
		this.rtnTotalPrice = function(){
			return (!this.faults) ? this.value : this.value *0.75;
		};
		this.printMe = function(){
			return "Model: " + this.model + ", regNo: "+ this.reg + "Value: "+this.value+", faults: " + this.faults + ".<br>"; 
		};
	}
	
	function buildGarage(name){ 
		this.name = name;
		this.vehicleList = []; 
		this.listVehicles = function(){
			if(this.vehicleList.length === 0){
				document.write("Vehicle list is empty.<br>");
			}
			else{
				printArray_VehicleList(this.vehicleList);
			}
		};
		this.checkCar_in = function(model, reg, val, faults){
				this.vehicleList[this.vehicleList.length] = new buildCar(model, reg, val, faults);
				document.write("Vehicle added!<br> NEW! : ");
				document.write(this.vehicleList[this.vehicleList.length-1].printMe());
			};
		this.checkCar_out = function(reg){			
			for(let x = 0; x < this.vehicleList.length; x++){
				if(this.vehicleList[x].reg === reg){
					document.write("Vehicle " + this.vehicleList[x].reg +
					" of model type: " + this.vehicleList[x].model +
					" has been removed from the garage!<br>");
					delete this.vehicleList[x];
					this.vehicleList.splice(x,1);
		
					break;
				}
			}
		this.listVehicles_Form = function(targID){
			let parentElement = document.getElementById(targID);			
			
			while (parentElement.hasChildNodes()) {
				parentElement.removeChild(parentElement.lastChild);
			}
			
			
			for(let x = 0; x < this.vehicleList.length; x++){
				let myPara = document.createElement('p');
				myPara.textContent = this.vehicleList[x].printMe();
				
				parentElement.appendChild(myPara);
			}
			
		};
		this.checkCar_inForm = function(formID){
				let model = document.getElementsByName(formID + ".model")[0].value;
				let reg = 	document.getElementsByName(formID + ".reg")[0].value;
				let val = 	document.getElementsByName(formID + ".val")[0].value;
				let faults = document.getElementsByName(formID + ".faults")[0].checked;
							
			
				this.vehicleList[this.vehicleList.length] = new buildCar(model, reg, val, faults);
				alert("Vehicle added: \n" + this.vehicleList[this.vehicleList.length-1].printMe());
			};			
		};
		this.listVehicle_Form = function(formID, targID){
			let parentElement = document.getElementById(targID);			
			let value = document.getElementsByName(formID + ".regSearch")[0].value;
			
			// clean up
			while (parentElement.hasChildNodes()) {
				parentElement.removeChild(parentElement.lastChild);
			}
			
			let myPara = document.createElement('p');
			for(let x = 0; x < this.vehicleList.length; x++){
				if(this.vehicleList[x].reg === value){
					myPara.textContent = this.vehicleList[x].printMe();
					break;
				}
			}
				
			parentElement.appendChild(myPara);
			
		};
		this.valCar_Form = function(formID, targID){
			let parentElement = document.getElementById(targID);			
			let value = document.getElementsByName(formID + ".regSearch")[0].value;
			
			// clean up
			while (parentElement.hasChildNodes()) {
				parentElement.removeChild(parentElement.lastChild);
			}
			
			let myPara = document.createElement('p');
			for(let x = 0; x < this.vehicleList.length; x++){
				if(this.vehicleList[x].reg === value){
					myPara.textContent = "The value of "+this.vehicleList[x].model+", reg: " + this.vehicleList[x].reg + ", is: " + this.vehicleList[x].rtnTotalPrice();
					break;
				}
			}
				
			parentElement.appendChild(myPara);
		};
		this.delCar_Form = function(formID){			
			let value = document.getElementsByName(formID + ".regSearch")[0].value;
			
			for(let x = 0; x < this.vehicleList.length; x++){
				if(this.vehicleList[x].reg === value){
					alert("Vehicle " + this.vehicleList[x].reg +
					" of model type: " + this.vehicleList[x].model +
					" has been removed from the garage!");
					delete this.vehicleList[x];
					this.vehicleList.splice(x,1);
				}
			}			
		};
		this.carBillCalc = function(index){return this.vehicleList[index].rtnTotalPrice();};
	}
	
	// need access globally
	var myGarage = new buildGarage("Alex's Garage shop");
	function garage(){
		// This section needs to upgraded, particularly to include form entry/UI driven.
		document.write(makeBold("<u>Garage section:</u>"))
		nLine(1);
		
		myGarage.listVehicles();
		myGarage.checkCar_in("Volvo", "CR4-Z87", 2200, true);
		myGarage.listVehicles();
		document.write("Car value: " + myGarage.carBillCalc(0)); nLine(1);
		myGarage.checkCar_out("CR4-Z87");
		myGarage.listVehicles();
		myGarage.checkCar_in("Volvo", "CR4-Z87", 2200, true);
	}
	
	function intermediate(){
		document.write("<b>Intermediate!</b>");	
		pageDiv();
		
		nLine(2); // creates multiple doc new line prints
		// Task 14 - add FIZZBUZZ logic
		fizzBUZZ();
		// Task 14 b - add 3 parameters, 1 that acts as the max loop iteration/
		//			 - 1 that acts as a representation of the word divisible by 3.
		//			 - 1 that acts as a representation of the word divisible by 5.
		fizzBUZZ_bonus(25,"Dog", "Class");
	
		pageDiv();
		// Task 15 - Create a method that divides a given number until it divides by 3.
		//			 Where the result is 1, adjust the value to ensure each value is perfectly
		//			 divisible by 3 by adding or removing 1.
		iteration4(50);
		pageDiv();
		
		// Task 16 - Write a function that counts overlapping triple characters in a string.
		//			 return a value that represents the number of detected triples.
		strings4();
		pageDiv();
		// Task 17 - DOM 1
		document.write(makeBold("See <u>Paragraph control form</u>"));
		nLine(2);
		domInsert();
		pageDiv();
		
		// Task 18 - JSON 1
		json1();
		pageDiv();
		
		// Task 19 - JSON 2
		json2();
		pageDiv();
		
		// Task 20 - Garage
		garage();
		
		// Task 21 - Admin Interface
	}
	
	// Advanced functions
	
	
	function advanced(){
		// Rektangles
		
		// Formal inouts & outputs
		
		// Code Cleaning
	}
	