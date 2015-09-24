//Once you complete a problem, open up Chrome and check the answer in the console.



//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
  var name = 'Tyler';
  function isTyler(name) {
    if (name === "Tyler") {
      return true;
    }
    else {
      return false;
    }
  }


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
function getName() = {
  var name = prompt("What is your Name?")
  return name;
}

//Next Problem



//Create a function called welcome that uses your getName function you created
//in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
  function getName() = {
    var name = prompt("What is your Name?")
    return name;
    alert("Welcome " + name);
  }

  getName();




//Next problem




//What is the difference between arguments and parameters?

  //Answer Here
Arguments are the variables you can pass into a function. Paramenters are varieables
set to represent those arguments.

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here

if (false)
if (null)
if (undefined)
if (0)
if (NaN)
if ('')
if (document.all) [1]

if (x === "y") {
  return true;
}
else {
  return falsy;
}




//Next Problem



//Create a function called myName that returns your name

  //Code Here
function myName(name) {
  var name = "CJ"
  return name;
}

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var newMyName = myName();

//Now alert the result of invoking newMyName
alert(newMyName);


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
outerFn = function(){
  var name = "CJ";
  return name;
}

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();
