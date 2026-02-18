// # DOM Homework Tasks KODEX

// ## Task 1: Text Change on Button Click
// **Create:**
// - One paragraph
// - One button

// **When button is clicked:**
// - If paragraph text is `Hello`, change it to `Welcome`
// - If paragraph text is `Welcome`, change it to `Hello`

var para = document.querySelector(".q1");
var paragraph = document.querySelector("p");
var q1btn = document.querySelector(".q1-btn");

var reset = "hello";

q1btn.addEventListener("click", function () {
  if (reset == "hello") {
    paragraph.innerHTML = "WELCOME";
    para.style.backgroundColor = "lightseaGreen";
    para.style.borderRadius = "10px";
    paragraph.style.fontSize = "50px";
    reset = "welcome";
  } else {
    paragraph.innerHTML = "Hello";
    para.style.backgroundColor = "white";
    paragraph.style.fontSize = "60px";
    para.style.borderRadius = "0px";
    reset = "hello";
  }
});

// ---

// ## Task 2: Change Box Color on Click
// **Create:**
// - One square box
// - One button

// **When button is clicked:**
// - First click → box becomes red
// - Second click → box becomes green
// - Third click → box becomes blue
// - Fourth click → box becomes red again

// This cycle should continue.

var q2 = document.querySelector(".q2");
var box = document.querySelector(".q2-box");
var q2btn = document.querySelector(".q2-btn");

var bgColor = "white";
q2btn.addEventListener("click", function () {
  if (bgColor == "white") {
    box.style.backgroundColor = "red";
    bgColor = "red";
  } else if (bgColor == "red") {
    box.style.backgroundColor = "green";
    bgColor = "green";
  } else if (bgColor == "green") {
    box.style.backgroundColor = "blue";
    bgColor = "blue";
  } else {
    box.style.backgroundColor = "red";
    bgColor = "red";
  }
});
// ---

// ## Task 3: Show and Hide a Box
// **Create:**
// - One button
// - One box with text inside it

// **When button is clicked:**
// - If box is visible → hide the box
// - If box is hidden → show the box again

// The box should not be deleted, only hidden.

var q3 = document.querySelector(".q3");
var q3box = document.querySelector(".q3-box");
var q3btn = document.querySelector(".q3-btn");

var boxes = "visible";
q3btn.addEventListener("click", function () {
  if (boxes == "visible") {
    q3box.style.display = "none";
    q3btn.innerHTML = "VISIBLE";
    boxes = "inivisibe";
  } else {
    q3box.style.display = "";
    q3btn.innerHTML = "INVISIBLE";
    boxes = "visible";
  }
});
// ---

// ## Task 4: Rotate a Box Using Buttons
// **Create:**
// - One square box
// - Two buttons: **Rotate Left** and **Rotate Right**

// **When:**
// - Rotate Right is clicked → box rotates 45 degrees to the right
// - Rotate Left is clicked → box rotates 45 degrees to the left

// Rotation should keep adding up with every click.

var q4box = document.querySelector(".q4-box");
var q4leftbtn = document.querySelector(".q4-left-btn");
var q4rightbtn = document.querySelector(".q4-right-btn");

var rotate = 0;

q4leftbtn.addEventListener("click", function () {
  rotate -= 45;
  q4box.style.transform = `rotate(${rotate}deg)`;
});

q4rightbtn.addEventListener("click", function () {
  rotate += 45;
  q4box.style.transform = `rotate(${rotate}deg)`;
});

// ---

// ## Task 5: Number Increase and Decrease
// **Create:**
// - A number shown on screen (start from 0)
// - Two buttons: `+` and `-`

// **When:**
// - `+` button is clicked → number increases by 1
// - `-` button is clicked → number decreases by 1

// Number should never go below 0.

var q5box = document.querySelector(".q5-box");
var btnInc = document.querySelector(".btn-increment");
var btnDec = document.querySelector(".btn-decrement");

var num = 0;

btnInc.addEventListener("click", function () {
  if (num >= 0) {
    q5box.innerHTML = num;
    num++;
  } else {
    q5box.innerHTML = "Number";
  }
});

btnDec.addEventListener("click", function () {
  if (num > 0) {
    num--;
    q5box.innerHTML = num;
  } else {
    q5box.innerHTML = "Number";
  }
});

// ## Task 6: Light and Dark Background
// **Create:**
// - One button named **Change Mode**

// **When button is clicked:**
// - First click → page background becomes dark and text becomes white
// - Second click → page background becomes white and text becomes black

// This should repeat on every click.

// > Use JavaScript only.

var page1 = document.querySelector(".page1");
var q6btn = document.querySelector(".q6-btn");

var mode = "white";
q6btn.addEventListener("click", function () {
  if (mode == "white") {
    page1.style.backgroundColor = "black";
    page1.style.border = "solid white 2px";
    q6btn.style.backgroundColor = " white";
    q6btn.style.color = " black";
    mode = "black";
  } else if (mode == "black") {
    page1.style.backgroundColor = "white";
    page1.style.border = "solid black 2px";
    q6btn.style.backgroundColor = " black";
    q6btn.style.color = " white";
    mode = "white";
  } else {
    page1.innerHTML = "Mode failed";
  }
});

// ---

// ## Task 7: Show Input Text on Screen
// **Create:**
// - One input box
// - One paragraph

// **When user types in the input:**
// - The same text should appear inside the paragraph immediately
var q7text = document.querySelector(".q7-text");
var q7p = document.querySelector(".q7-p");

q7text.addEventListener("input", function () {
  q7p.textContent = q7text.value;
});
// ---

// ## Task 8: Change Color on Mouse Hover
// **Create:**
// - One box

// **When:**
// - Mouse goes inside the box → box color changes
// - Mouse goes outside the box → box color goes back to original

//  Use JavaScript events, not CSS hover.

var q8box = document.querySelector(".q8-box");

q8box.addEventListener("mouseenter", function () {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  var color = `rgb(${r}, ${g}, ${b})`;

  q8box.style.backgroundColor = color;

  console.log(color);
});
q8box.addEventListener("mouseleave", function () {
  q8box.style.backgroundColor = 'black';
});

// ---

// ## Task 9: Button Works Only Once
// **Create:**
// - One button
// - One paragraph

// **When button is clicked:**
// - Show message: `Button Clicked`
// - Button should stop working after that

var q9boxp = document.querySelector('.q9-box-p');
var q9btn = document.querySelector('.q9-btn');

q9btn.addEventListener('click', function () {
    q9boxp.textContent = "Button Clicked";
    q9btn.disabled = true;
    console.log('btn clicked')
});

// ---

// ## Task 10: Traffic Light
// **Create:**
// - Three circles or boxes: red, yellow, green
// - Three buttons: **Stop**, **Ready**, **Go**

var red = document.querySelector('.red');
var yellow = document.querySelector('.yellow');
var green = document.querySelector('.green');

var redBtn = document.querySelector('.red-btn');
var yellowBtn = document.querySelector('.yellow-btn');
var greenBtn = document.querySelector('.green-btn');

function turnOffAll() {
    red.style.backgroundColor = "gray";
    yellow.style.backgroundColor = "gray";
    green.style.backgroundColor = "gray";
}

redBtn.addEventListener('click', function() {
    turnOffAll();
    red.style.backgroundColor = "red";
});

yellowBtn.addEventListener('click', function() {
    turnOffAll();
    yellow.style.backgroundColor = "yellow";
});

greenBtn.addEventListener('click', function() {
    turnOffAll();
    green.style.backgroundColor = "green";
});
