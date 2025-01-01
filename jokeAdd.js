const { exec } = require('child_process');
const readline = require('readline');
let jokesArray =[ // jokes ];
// Function to send a joke using a curl request
function sendJokeRequest(joke, tag) {
  const curlCommand = `curl -X POST http://localhost:3000/api/jokes \
-H "Content-Type: application/json" \
-d '{
  "joke": "${joke}",
  "tags":["${tag}"]
}'`;

  return new Promise((resolve, reject) => {
    exec(curlCommand, (error, stdout, stderr) => {
      if (error) {
        reject(`Error executing curl command: ${error.message}`);
        return;
      }
      if (stderr) {
        reject(`stderr: ${stderr}`);
        return;
      }
      resolve(stdout);
    });
  });
}

// Function to process all jokes in the array
async function processJokes() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Enter the tag for the jokes: ', async (tag) => {
    rl.close();

    if (!tag.trim()) {
      console.log('Tag cannot be empty!');
      return;
    }

    for (const [index, joke] of jokesArray.entries()) {
      try {
        console.log(`Sending joke ${index + 1}: "${joke}" with tag: "${tag}"`);
        const response = await sendJokeRequest(joke, tag);
        console.log(`Response from server for joke ${index + 1}: ${response}`);
      } catch (error) {
        console.error(`Failed to send joke ${index + 1}: ${error}`);
      }
    }
    console.log('All jokes processed.');
  });
}

// Run the script
processJokes();

