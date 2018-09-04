// FSJS - Random Quote Generator

// an array of quote objects
var quotes = [
  {
    quote: "Video games are bad for you? That's what they said about rock and roll.",
    source: "Shigeru Miyamoto",
    citation: "",
    year: null,
    color: "DarkOliveGreen",
    realLife: true

  },
  {
    quote: "Thank you, Mario! But our princess is in another castle!",
    source: "Toad",
    citation: "Super Mario Bros.",
    year: 1985,
    color: "Olive",
    realLife: false
  },
  {
    quote: "My body is ready",
    source: "Reggie Fils",
    citation: "E3",
    year: 2007,
    color: "OliveDrab",
    realLife: true
  },
  {
    quote: "It's-a me, Mario!",
    source: "Mario",
    citation: "Super Mario 64",
    year: 1996,
    color: "LimeGreen",
    realLife: false
  },
  {
    quote: "I like shorts! They're comfy and easy to wear!",
    source: "Youngster",
    citation: "Pokémon Red and Blue",
    year: 1996,
    color: "SpringGreen",
    realLife: false
  },
  {
    quote: "Hey, listen!",
    source: "Navi",
    citation: "The Legend of Zelda: Ocarina of Time",
    year: 1998,
    color: "DarkSeaGreen",
    realLife: false
  },
  {
    quote: "It's dangerous to go alone! Take this.",
    source: "Old Man",
    citation: "The Legend of Zelda",
    year: 1986,
    color: "MediumAquamarine",
    realLife: false
  },
  {
    quote: "Get the power! NINTENDO POWER!",
    source: "Nintendo Power",
    citation: "",
    year: null,
    color: "MediumSeaGreen",
    realLife: true
  },
  {
    quote: "STOP RESETTIN'! You hear me?!",
    source: "Resetti",
    citation: "Animal Crossing",
    year: null,
    color: "DarkGreen",
    realLife: false
  }

];

var randomQuote = quotes[0];
var sequencedNumbers = [];
var randomNumbers = [];
var numsArray = generateNumsArray(quotes);
var message;
var myTimer;

//generate an array of random numbers for getRandomQuote()
//create an array of numbers, prevent same number from appearing back to back (including the end of one array and the start of the next)
function generateNumsArray(theRay) {
  //create an array containing a sequence of numbers, excluding 0
  for (var i = 0; i < theRay.length - 1; i += 1) {
    sequencedNumbers.push(i + 1);
  }
  //randomly transfer numbers to another array, effectively randomizing the sequence
  for (var j = 0; j < theRay.length - 1; j += 1) {
    randomNumbers.push(sequencedNumbers.splice(Math.floor(Math.random() * sequencedNumbers.length), 1)[0]);
  }
  //add 0 into the array, to prevent the end of newArray from matching the start of the next newArray
  randomNumbers.unshift(0);
  return randomNumbers;
}

//return a random number for getRandomQuote()
//pop a number off the end of numsArray if possible, otherwise refill numsArray first, then pop
function nextRandomNumber() {
  if (numsArray.length) {
    //console.log(numsArray + " in function");
    return numsArray.pop();

  } else {
    numsArray = generateNumsArray(quotes);
    return nextRandomNumber();
  }
}

//console.log(numsArray + " at start");
//console.log(nextRandomNumber());

// return a random quote object from our quote array
function getRandomQuote(array) {
  return array[nextRandomNumber()];
}


// create a string and feed it to the document to show the user our randomly selected quote
function printQuote() {
  //reset the timer if user clicks button



  randomQuote = getRandomQuote(quotes);
  message = "";
  message += '<p class="quote">' + randomQuote.quote + '</p>';
  message += '<p class = "source">' + randomQuote.source;
  if (randomQuote.citation) {
    message += '<span class = "citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year) {
    message += '<span class = "year">' + randomQuote.year + ' </span>';
  }
  if (randomQuote.realLife) {
    message += '<p><span class = "really">Not a simulation!</span></p>'
  } else {
    message += '<p ><span class = "really">Happened in a game.</span></p>'
  }
  message += '</p>'
  //console.log(message);
  document.getElementById('quote-box').innerHTML = message;

  //reset timer after button click
  clearTimer();
  document.body.style.backgroundColor = randomQuote.color;
}

//start first timer
setTimer();

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//auto click button after x amount of time
function setTimer() {
  clearTimeout(myTimer);
  //use quote length to slighty increase display time
  var timer = (randomQuote.quote.length + randomQuote.source.length) * 75 + 3000;
  myTimer = setTimeout("autoClick()", timer);
  //console.log(timer);
}

//click the button when timer goes off
function autoClick() {
  clearTimeout(myTimer);
  document.getElementById('loadQuote').click();
  setTimer();
}

//clear and reset timer
function clearTimer() {
  clearTimeout(myTimer);
  setTimer();
}
