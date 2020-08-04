let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

var name = " ";

function setUserName() {
  if(name == " ") {
    name = prompt('Please enter your name.');
    // localStorage.setItem('name', myName);
    // myHeading.textContent = chooseMsg() + ', ' + myName;
  }  
  myHeading.textContent = chooseMsg() + ', ' + name;

}

myButton.onclick = function() {
  setUserName();
}

function chooseMsg() {
  var length = 3;
  var msgs = ["very good", "excellent", "good work"];

  var rand = Math.floor(Math.random()*1000)%length;
  console.log("rand: ", rand);
  return msgs[rand];
}