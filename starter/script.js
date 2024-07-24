'use strict';
/*
Explanation:
1. document.querySelector('.message'):

This method selects the first element in the document that matches the CSS selector .message.
The querySelector method is a powerful and flexible way to find elements, as it allows for CSS selector syntax.

2. textContent:

This property gets or sets the text content of the specified node.
Setting this property replaces all the text content within the element, including the text of any child elements.
3. Assignment (=):

The assignment operator = is used to set the textContent property of the selected element to the string "Correct answer !".


console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = "Correct answer !";

console.log(document.querySelector('.message').textContent = "Correct answer 🪂!");

document.querySelector('.number').textContent =  13;
document.querySelector('.score').textContent = 10 ;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23 ;

.value:

This property retrieves the current value of the selected input element.
It is commonly used to get the user-entered data in form inputs, such as text fields, number fields, and others.
*/


/*
Breakdown:
beloww code

1. document.querySelector('.check'):

Selects the first element in the document that has the class check.

2 .addEventListener('click', function() { ... }):

Adds an event listener for the click event to the selected element.
When the element is clicked, the provided function will be executed.

3.Function Body:

Inside the function, document.querySelector('.guess').value is used to get the value of the first input element with the class guess.
console.log(...) logs this value to the browser's console.
*/

let highscore = 0 ;
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1 ;
document.querySelector('.number').textContent = secretNumber;


const displayMessage = function(message){
   document.querySelector('.message').textContent = message; 
}



const x = function(){
    console.log(document.querySelector('.guess').value);
}
// its same as function below

document.querySelector('.check').addEventListener('click' , function(){
 const guess = Number(document.querySelector('.guess').value);

//document.querySelector('.message').textContent = "Correct answer !";

console.log(guess , typeof guess);

// when there is no input 

 if(!guess){
//  document.querySelector('.message').textContent = '🚫 No number !' ;
  displayMessage('🚫 No number !');

 }


 // when player wins
 else if(guess === secretNumber){
// document.querySelector('.message').textContent = "Correct answer !"; 
 displayMessage('Correct Answer');
document.querySelector('body').style.backgroundColor = '#60b347';

document.querySelector('.number').style.width = '30rem';

if(score > highscore){
    highscore = score ;
    document.querySelector('.highscore').textContent = highscore;
}
}

// when the guess is wrong
else if(guess !== secretNumber){
    if(score> 1){
        document.querySelector('.message').textContent = 
        guess > secretNumber ? '📈 Too high'  :  '📉 Too low ';
        //score = score - 1;

        displayMessage(guess > secretNumber ? '📈 Too high'  :  '📉 Too low ');
        score--;
        document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.message').textContent = ' You lost the game';
       document.querySelector('.score').textContent = 0 ;
    }
}





 // when guess is too high 
 /* else if(guess > secretNumber){
    if(score> 1){
        document.querySelector('.message').textContent = '📈 Too high';
        //score = score - 1;
        score--;
        document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.message').textContent = ' You lost the game';
       document.querySelector('.score').textContent = 0 ;
    }

}

 // when guess is too low
else if(guess < secretNumber){
    document.querySelector('.message').textContent = '📉 Too low ';
    score--;
    document.querySelector('.score').textContent = score;
}



}
); 

*/


// document.querySelector('check').addEventListener('click' , function(){
//  console.log(document.querySelector('guess'));
 });



/////////////
//coding challenge

// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/


//clicking again button everything reloads to original state
document.querySelector('.again').addEventListener('click' , function(){
    score = 20 ;
    secretNumber = Math.trunc(Math.random() * 20) + 1 ;

    //document.querySelector('.message').textContent = "Start guessing..";
    displayMessage("Start Guessing");
    document.querySelector('.score').textContent = score ;
    document.querySelector('.number').textContent = '?' ;
    document.querySelector('.score').value = '' ;
    
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});




