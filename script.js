// # Intermediate Level DOM + Math Practice Tasks

// ## 1. Dice Game

// Create two dice images dynamically using `document.createElement()`. Use
// `Math.random()` to generate numbers (1--6). Display both dice results
// and show the winner based on the higher number. Render everything
// dynamically using `append()` or `appendChild()`.

var q1 = document.querySelector(".q1");

// Create Button
var btn = document.createElement("button");
btn.className = "q1-btn";
btn.innerText = "Roll Dice";
q1.appendChild(btn);

// Create Dice Box
var box = document.createElement("div");
box.className = "q1-box";
q1.appendChild(box);

// Create Result
var results = document.createElement("h2");
results.className = "q1-results";
q1.appendChild(results);

// Dice image paths (Wikipedia SVG - reliable)
var diceImages = [
  "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg"
];

btn.addEventListener("click", function () {

  var dice1 = Math.floor(Math.random() * 6);
  var dice2 = Math.floor(Math.random() * 6);

  box.innerHTML = "";

  var img1 = document.createElement("img");
  img1.src = diceImages[dice1];

  var img2 = document.createElement("img");
  img2.src = diceImages[dice2];

  box.appendChild(img1);
  box.appendChild(img2);

  if (dice1 > dice2) {
    results.innerText = "Player 1 Wins 🎉";
  } else if (dice2 > dice1) {
    results.innerText = "Player 2 Wins 🎉";
  } else {
    results.innerText = "It's a Draw 🤝";
  }
  console.log(results)

});


// // ## 2. Random Color Card Generator

// // Create a card on button click. Generate a random RGB background color
// // using `Math.floor()` and `Math.random()`. Set a random width and height.
// // Assign a unique `data-id` using `setAttribute()`.

var q2 = document.querySelector(".q2");
var q2btn = document.querySelector(".q2-btn");

q2btn.addEventListener("click", function () {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  var height = Math.floor(Math.random() * 100) + "px";
  var width = Math.floor(Math.random() * 100) + "px";

  var card = document.createElement("div");

  card.style.height = height;
  card.style.width = width;
  card.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  card.style.position = "absolute";
  var top = Math.floor(Math.random() * 100);
  var left = Math.floor(Math.random() * 100);

  card.style.top = top + "%";
  card.style.left = left + "%";

  card.setAttribute("data-id", Date.now());

  q2.appendChild(card);
});

// ## 3. Lottery System

// Take user input (1--50). Generate a random number using `Math.ceil()`.
// If the number matches user input, display "You Won" otherwise "Try
// Again". Update result dynamically in the DOM.

var q3input = document.querySelector(".q3-input");
var q3box = document.querySelector(".q3-box");

q3input.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && e.target.value.trim() !== "") {
    var random = Math.ceil(Math.random() * 50);
    if (q3input.value == random) {
      q3box.textContent = "YOU WON";
      console.log(random);
    } else {
      q3box.textContent = "TRY AGAIN";
      console.log(random);
    }
  }
});

// // ## 4. Dynamic Image Gallery

// // Store image URLs in an array. On button click, pick a random image using
// // `Math.floor()`. Create an `<img>` element dynamically and append it to a
// // container. Use `getAttribute("src")` to print the image source in
// // console.

var q4inner = document.querySelector(".q4-inner");
var q4btn = document.querySelector(".q4-btn");

var images = [
  "https://imgs.search.brave.com/xyfHuuGUa4O1I-bprlFye28GN6L0JMzkMQjN4Vdt7Wc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9nZXR3/YWxscGFwZXJzLmNv/bS93YWxscGFwZXIv/ZnVsbC82L2IvYi84/MTk3MDgtY2hob3Rh/LWJoZWVtLXdhbGxw/YXBlcnMtMTkyMHgx/MDgwLWZvci1tb2Jp/bGUuanBn",
  "https://imgs.search.brave.com/8lVdGF2_HMtQFyrGIdnNnD9a1_mwF9ylXOb5zKLXG0c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDkxODA2/OTIuanBn",
  "https://imgs.search.brave.com/A_BY9wpCTAXWJHRYKItTBLm5R7di6M_9NZtISUSFZbo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbm9i/aXRhLWFuZC1kb3Jh/ZW1vbi00ay1nNHgx/bHJsbHh5eHI1c3Nk/LmpwZw",
  "https://imgs.search.brave.com/vo9aUBwbgqxtXrry-lsopln-Vf5CKFozj6Wf42oeUq8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZG9y/YWVtb24tYW5kLW5v/Yml0YS1pbi1ibHVl/LWlmbGJienJ2bDVj/NGlhNW8uanBn",
  "https://imgs.search.brave.com/lBWhWkdeKB5t1dmtpBQQ485Z-QhKVipVZFWUAbDhN5w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE4MTI0/NzEuanBn",
];

q4btn.addEventListener("click", function () {
  var randomImg = Math.floor(Math.random() * images.length);

  q4inner.innerHTML = "";

  var img = document.createElement("img");
  img.style.height = "100%";
  img.style.width = "100%";
  img.style.objectFit = "cover";
  img.style.Position = "center";
  img.setAttribute("src", images[randomImg]);

  q4inner.appendChild(img);
});

// // ## 5. Progress Bar Simulator

// // Create a progress bar dynamically. On button click, increase progress
// // randomly between 10--30%. Update the width style property dynamically.
// // Stop progress at 100%.

var q5btn = document.querySelector(".q5-btn");
var q5boxOuter = document.querySelector(".q5-box-outer");

var progress = 0;

q5btn.addEventListener("click", function () {
  var random = Math.floor(Math.random() * 21) + 10;

  progress = progress + random;

  if (progress >= 100) {
    progress = 0;
  }

  q5boxOuter.style.width = progress + "%";
});

// ## 6. Random Box Remover

// Create 5 boxes dynamically. Assign each box a unique `data-id` using
// `setAttribute()`. On click of a box, remove only that specific box. Use
// `getAttribute()` to identify which box was clicked.

var q6btn = document.querySelector(".q6-btn");
var q6box = document.querySelector(".q6-box");

var boxCount = 0;
var maxBoxes = 5;

q6btn.addEventListener("click", function () {

  if (boxCount >= maxBoxes) return;

  var box = document.createElement("div");

  box.style.height = "250px";
  box.style.width = "250px";
  box.style.margin = "10px";
  box.style.display = "inline-block";

  // random color
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  q6box.appendChild(box);

  boxCount++;

  if (boxCount === maxBoxes) {
    q6btn.disabled = true;
  }

  box.addEventListener("click", function () {
    this.remove();
    boxCount--;

    if (boxCount < maxBoxes) {
      q6btn.disabled = false;
    }
  });

});


// ## 7. Mini Gambling UI

// Generate 3 random numbers between 1--9. Display all numbers dynamically.
// If all three numbers are the same, show "Jackpot". Otherwise display


var spinBtn = document.getElementById("spinBtn");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var result = document.getElementById("result");

spinBtn.addEventListener("click", function () {

  var n1 = Math.floor(Math.random() * 9) + 1;
  var n2 = Math.floor(Math.random() * 9) + 1;
  var n3 = Math.floor(Math.random() * 9) + 1;

  num1.innerText = n1;
  num2.innerText = n2;
  num3.innerText = n3;

  if (n1 === n2 && n2 === n3) {
    result.innerText = "🎉 Jackpot!";
    result.style.color = "lime";
  } else {
    result.innerText = "Try Again";
    result.style.color = "red";
  }

});

