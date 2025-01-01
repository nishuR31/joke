
# See Jokes

## Overview

### What it does:
- Fetches jokes from a server API using `fetch`.
- Displays one joke at a time in the terminal.
- Asks the user if they want to continue fetching more jokes in terms of Y/y or nothing.



## Features
- **Fetch Jokes**: Fetch jokes from an API endpoint.
- **Interactive CLI**: Prompts the user to continue fetching jokes or exit.
- **Simple and User-friendly**: Easy-to-use, clear instructions for interacting with the script.


## Installation
To run the Joke Fetcher CLI on your local machine, follow the steps below.

### Prerequisites:
- **Node.js**: Make sure you have Node.js installed on your system. You can download it from [here](https://nodejs.org/).
- **npm**: Node's package manager comes with Node.js. You’ll need it to install the required dependencies.

### Step 1: Clone the repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/nishuR31/joke.git
```

### Step 2: Install Dependencies

Navigate to the project directory:

```bash
cd joke
```

Install the required dependencies:

```bash
npm install
```

### Step 3: Run the Script

Once everything is installed, run the script with Node.js:

```bash
node seeJoke.js
```

### Step 4: Interact with the CLI

- The script will fetch a joke and display it in the terminal.
- You will then be prompted to decide whether you want to fetch another joke. Type `yes` to get another joke, or type `no` to stop.

### Example Output:

```bash
Joke: Why did the scarecrow win an award? Because he was outstanding in his field!
Do you want another joke? [Y/]: yes
Joke: I told my wife she was drawing her eyebrows too high. She looked surprised.
Do you want another joke? [y/]: no
Goodbye!
```

- **API Issues**:  
  If the API is down or unreachable, ensure that the endpoint (`http://localhost:3000/api/jokes/tag/incest`) is available and correct. If you're testing locally, ensure that the server is running.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

