//Q1
function greetUser(name) {
 let message = "Hello ${name}"   
let outputdiv = document.getElementById("output")
outputdiv.innerHTML = message;

}

//Q2
function chnagetext(){
    let messageElement = document.getElementById('message');
    messageElement.innerText = "Hello, World!";
}

//Q3
function addnumbers(){
let num1 = parseFloat(document.getElementById("number1").vaule);
let num2 = parseFloat(document.getElementById("number2").vaule);

let sum = num1 + num2;
document.getElementById("result").innerText = "The sum is " + sum;


}


//Q4
function updateTitle() {
    let newTitle = document.getElementById("inputField").value;
    let titleElement = document.getElementById("title");
    titleElement.innerText = newTitle;
}

//Q5
function concatenateStrings() {
    let string1 = document.getElementById("input1").value;
    let string2 = document.getElementById("input2").value;

    let combinedString = string1 + ' ' + string2;

    document.getElementById("combinedText").innerText = combinedString;
}

//Q6


function changeBackgroundColor(){
    let colorBox = document.getElementById("colorBox");
    colorBox.style.backgroundColor = "blue";
}
document.getElementById("changeColorButton").addEventListener("click", changeBackgroundColor);