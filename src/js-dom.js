// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.

// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".


let logInBtn = document.querySelector('#auth')

function changeText(){
    if (logInBtn.innerText === 'Log in') {
        logInBtn.innerText = 'Log out';
      } else {
        logInBtn.innerText = 'Log in';
      }
}

logInBtn.addEventListener('click', changeText);



// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.



function sendAlert (event) {
    event.preventDefault();
    const alertText = document.querySelector('#alert-message').value;
    alert(alertText)

}

document.querySelector('#send-alert').addEventListener('submit',sendAlert)


// Add an item
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Double-ulick to add an item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ol id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ol>

let doubleClick = document.querySelector('#item-adder')

function itemAdder() {
    const item = document.createElement('li');
  item.innerHTML = 'Item';

  const list = document.querySelector('ol');
  list.appendChild(item);
}

doubleClick.addEventListener('click', itemAdder);

// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

let blueTextBtn = document.querySelector('#blue');
let redTextBtn = document.querySelector('#red');
let changeColor = document.querySelectorAll('.changes-colors');

function turnStuffBlue() {
// div #color-changer .changes-color 
changeColor.forEach(el => el.style.color = 'blue')
}

function turnStuffRed() {

changeColor.forEach(el => el.style.color = 'red')
}
blueTextBtn.addEventListener('click', turnStuffBlue);
redTextBtn.addEventListener('click', turnStuffRed)



// Calculate factorial
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span

function factorial(event) {
    event.preventDefault();
    const input = document.getElementById('factorial-input').value;
    const result = document.getElementById('result');
    result.innerHTML = factorialize(input);
    
  } 
  
  function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  document.addEventListener('submit', factorial)

// Validate a form
//
// This form is used to collect word recommendations from users. However, it
// only accepts words that are at least four characters long. Add code that
// checks the length of the text entered into the <textarea> when the user
// submits the form.
//
//  If the text is three or more characters long, change
//  the feedback text to say "Thanks for your submission!" and change
//  the color of the text to green.
//
// If the text is less than three characters long, change
// the feedback text to say "The word must be at least 4 characters long." and
// change the color of the text to red..

function wordRec(event) {
    event.preventDefault();
    let word = document.getElementById('word');
    let formFeedback = document.querySelector('.form-feedback');
  
    if (word.value.length >= 4) {
      formFeedback.textContent = 'Thanks for your submission!';
      formFeedback.style.color = 'green';
    } else {
      formFeedback.textContent = 'The word must be at least 4 characters long.';
      formFeedback.style.color = 'red';
    }
  }
  
  document.getElementById('recommend-word').addEventListener('submit', wordRec)
