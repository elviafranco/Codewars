// For this project, you will build a message generator program. Every time a user runs a program, they should get a new, randomized output. You’re welcome to take the project in a couple of different forms, like an astrology generator, inspirational message, or nonsensical jokes. To make your program truly random, the message that it outputs should be made up of at least three different pieces of data. Take what you know of JavaScript syntax so far to build the program and customize it to your liking.

const randomHoroscope = {
    zodiacSign: ['Pisces', 'Cancer', 'Scorpio'],
    dailyFocus: ['Career', 'Love', 'Friendship', 'Self'],
    horoscope: ['prosperity and wealth are coming to you', 'your soul mate is waiting', 'reach out to your friends today because you are on their mind', 'Hit the gym and take a self care day! You\'re in need of it']
}

// New Array with random generated daily horoscope
let dailyHoroscope = []

// Get a random number 
function generateRandomNumber(number) {
    return Math.floor(Math.random() * number)
}

//Iterate over object
for(let property in randomHoroscope){
    let optionIndex = generateRandomNumber(randomHoroscope[property].length)
    // Result
    console.log(`The length of property is ${randomHoroscope[property].length}, and the index is ${optionIndex}`);

    // Generate random message
    switch(property) {
        case 'zodiacSign':
            dailyHoroscope.push(`Your sign is ${randomHoroscope[property][optionIndex]}.`)
            break;
        case 'dailyFocus':
            dailyHoroscope.push(`Your daily focus is ${randomHoroscope[property][optionIndex]}`)
            break;
        case 'horoscope':
            dailyHoroscope.push(`Your daily horoscope is ${randomHoroscope[property][optionIndex]}.`)
            break;
        default:
            dailyHoroscope.push(`Sorry, your day is gonna suck!`)
    }
}

console.log(dailyHoroscope);


function formatHoroscope(horoscope){
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = dailyHoroscope.join('\n');
    console.log(formatted);
}

formatHoroscope(dailyHoroscope)