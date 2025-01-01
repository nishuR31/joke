const readline = require('readline');
//const fetch = require('node-fetch');  // Ensure you have node-fetch installed for HTTP requests

// Create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Generator function to fetch jokes one at a time
function* nextJoke(array) {
  for (let joke of array) {
    yield joke.joke;  // Yielding the `joke` field from each joke object
  }
}

// Function to prompt user for input asynchronously
function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

// Fetch and display a joke, then ask the user if they want another one
async function fetchJoke() {
  try {
    // Fetch jokes data from the API
    let response = await fetch('http://localhost:3000/api/jokes/tag/incest');
    let jokedata = await response.json();

    // Create a joke iterator
    let jokeIterator = nextJoke(jokedata);

    let joke = jokeIterator.next();
    let done = false;

    // Loop through the jokes until there are no more or the user decides to stop
    while (!done) {
      if (!joke.done) {
        // Display the joke
        console.log("Joke: " + joke.value);
        
        // Prompt the user if they want to continue
        const answer = await askQuestion('Do you want another joke? [Y/N]: ');

        if (answer.toLowerCase() === 'y') {
          joke = jokeIterator.next();  // Get the next joke
        } else {
          console.log("Goodbye!");
          rl.close();
          done = true;  // Exit the loop
        }
      } else {
        // If there are no more jokes left
        console.log("No more jokes left!");
        rl.close();
        done = true;  // Exit the loop
      }
    }
  } catch (error) {
    console.error('Error fetching jokes:', error);
    rl.close();
  }
}

// Call the fetchJoke function to start the process
fetchJoke();
