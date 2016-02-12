//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
function isTyler(name) {
	if (name === 'Tyler') {
		return true;
	} else {
		return false;
	}
}
console.log(isTyler(name));
  //Code Here

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

var name = 'Tyler';

function getName(name) {
	name = prompt('Whats your name?');
	console.log(name);
}

getName();

  //Code Here


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome() {
	alert('Welcome ' + getName());
}

welcome();

//Next problem




//What is the difference between arguments and parameters?

  //Answer Here

//parameters define your function and arguments control what the function does.
//a parameter is the variable inside the function. when the function is called the argument is what's passed.

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
//Nan, 0, False, '', Undefined

if(str() !== false)
{
    alert('para para paradise');
}
return false;


//Next Problem



//Create a function called myName that returns your name

  //Code Here
function myName() {
	return 'Zach McKimmins';
}  


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var newMyName = myName;

//Now alert the result of invoking newMyName
newMyName();

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.
function outerFn() {
	function () {
		return 'Zach McKimmins'
	}
}
  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.
var innerFn = outerFn();
  //Code Here

//Now invoke innerFn.
innerFn();