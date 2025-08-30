


// button one
let one = document.getElementById('enterone');

// button two
let two = document.getElementById("entertwo");

// button three
let three = document.getElementById('enterthree');

// anouncement alert box pop up
document.getElementById('anouncement').innerHTML;

let reset = document.getElementById("reset-btn");

// commentators sticker
let commentators = document.getElementById("commentator");

// sticker
let sticker = document.getElementById('sticker');

// game rules div to disapear after clicking start
let rules = document.getElementById('rules');


function start() {
rules.style.display = "none";
}

// total increment     
let totals = 0;

// score increment
let scores = 0;

// wrong increment
let wrongs = 0;


one.addEventListener('click', function() {
  randomNums = Math.floor(Math.random() * 3 + 1);

// button function value
  let ones = 1;

  if (ones === randomNums) {  
scores++
totals++;
commentators.textContent = "You got it 😀";
sticker.textContent = "😜";
  } else if (totals > 9) {
totals = 0; 
scores = 0;
wrongs = 0;

  } else {
    wrongs++
    totals++;
    commentators.textContent = "You failed it 😢";
    sticker.textContent = "😓";

  }

  if (totals > 9) {
anouncement.style.display = "block";
  }

//   ai number random number generator
  document.getElementById("ai").textContent = randomNums;

//   ttotal increment
  document.getElementById("total").textContent = totals;

  // scores increment
  document.getElementById("score").textContent = scores;

  // wrong increment
  document.getElementById("wrong").textContent = wrongs;

  document.getElementById("scoress").textContent = scores;
  document.getElementById("wrongss").textContent = wrongs;
  document.getElementById("totalss").textContent = totals;

})


// button two 2


two.addEventListener("click", function () {
  randomNums = Math.floor(Math.random() * 3 + 1);

  // button function value
  let twos = 2;

  if (twos === randomNums) {
    scores++;
    totals++;
    commentators.textContent = "You got it 😀";
    sticker.textContent = "😜";
  } else if (totals > 9) {
    totals = 0;
    scores = 0;
    wrongs = 0;
  } else {
    wrongs++;
    totals++;
        commentators.textContent = "You failed it 😢";
    sticker.textContent = "😓";

  }

  if (totals > 9) {
    anouncement.style.display = "block";
  }

  //   ai number random number generator
  document.getElementById("ai").textContent = randomNums;

  //   ttotal increment
  document.getElementById("total").textContent = totals;

  // scores increment
  document.getElementById("score").textContent = scores;

  // wrong increment
  document.getElementById("wrong").textContent = wrongs;

  document.getElementById("scoress").textContent = scores;
  document.getElementById("wrongss").textContent = wrongs;
  document.getElementById("totalss").textContent = totals;
});


// button three 3

  
three.addEventListener("click", function () {
  randomNums = Math.floor(Math.random() * 3 + 1);

  // button function value
  let threes = 3;

  if (threes === randomNums) {
    scores++;
    totals++;
    commentators.textContent = "You got it 😀";
    sticker.textContent = "😜";

  } else if (totals > 9) {
    totals = 0;
    scores = 0;
    wrongs = 0;
    randomNums = "";
  } else {
    wrongs++;
    totals++;
        commentators.textContent = "You failed it 😢";
        sticker.style.animation = "animate";
    sticker.textContent = "😓";
  }

  if (totals > 9) {
    anouncement.style.display = "block";
  }

  //   ai number random number generator
  document.getElementById("ai").textContent = randomNums;

  //   ttotal increment
  document.getElementById("total").textContent = totals;

  // scores increment
  document.getElementById("score").textContent = scores;

  // wrong increment
  document.getElementById("wrong").textContent = wrongs;

  document.getElementById("scoress").textContent = scores;
  document.getElementById("wrongss").textContent = wrongs;
  document.getElementById("totalss").textContent = totals;
});




reset.addEventListener("click", function clear() {
  if (totals > 9) { 
    totals = 0;
  scores = 0;
  wrongs = 0;
  anouncement.style.display = "none";
randomNums = "";
  }
});

