HTML
<link>-connects the html file to hw3style.css allowing for  stylizing of the web page to make it more presentable
<script>-connects the html file to passwordcheck.js allowing code that can run a function that takes in the users input for a new password and outputs whether it is acceptable or not 
<form>-Takes in the submitted user input for the new password and retyping new password from the user to the web server, so that when the checkPassword function runs it can take the submitted information and run it through the function
<div>-divdes the inputs, the labels, and once the passwordcheck.js checkPassword function is finished displays the words PASS or FAIL! depending on whether the password is acceptable to use or not
<label>-lebels  the user inputs of typing in the new password and retyping the new password
<input>-Takes in the user input for the form as well as acting as a button that runs the checkPassword function when clicked on

CSS
body-centers text on page
#Output-changes font-weight from normal to bold

JS
function checkPassword()-Once the submit button is clicked the function starts and checks to make sure that the new password meets all the criteria in order to PASS and if it does not meet a single one of the criteria laid out in the function it fails
document.getElementById("submit").addEventListener("click", function(event) - makes sure that the checkPassword function runs once the submit button is click by the user