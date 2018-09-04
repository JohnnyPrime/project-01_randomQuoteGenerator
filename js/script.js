// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
    {
        quote: "Video games are bad for you? That's what they said about rock and roll.",
        source: "Shigeru Miyamoto",
        citation: "",
        year: null
  },
    {
        quote: "Thank you, Mario! But our princess is in another castle!",
        source: "Toad",
        citation: "Super Mario Bros.",
        year: 1985
  },
    {
        quote: "My body is ready",
        source: "Reggie Fils",
        citation: "E3",
        year: 2007
  },
    {
        quote: "It's-a me, Mario!",
        source: "Mario",
        citation: "Super Mario 64",
        year: 1996
  },
    {
        quote: "I like shorts! They're comfy and easy to wear!",
        source: "Youngster",
        citation: "Pokémon Red and Blue",
        year: 1996
  },
    {
        quote: "Hey, listen!",
        source: "Navie",
        citation: "The Legend of Zelda: Ocarina of Time",
        year: 1998
  },
    {
        quote: "It's dangerous to go alone! Take this.",
        source: "Old Man",
        citation: "The Legend of Zelda",
        year: 1986
  },
    {
        quote: "Get the power! NINTENDO POWER!",
        source: "Nintendo Power",
        citation: "",
        year: null
  },
    {
        quote: "STOP RESETTIN'! You hear me?!",
        source: "Resetti",
        citation: "Animal Crossing",
        year: null
  }

];

var randomQuote;
var sequencedNumbers = [];
var randomNumbers = [];
var numsArray = generateNumsArray(quotes);


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

// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote() {
    return quotes[nextRandomNumber()];
}


// Create the printQuote funtion and name it printQuote
function printQuote() {
    randomQuote = getRandomQuote();
    console.log(randomQuote.quote);
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
