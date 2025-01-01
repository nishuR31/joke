
# Joke Sending Script

### Overview

This script automates the process of sending jokes to a server via HTTP POST requests using `curl`. It allows you to send multiple jokes, each associated with a custom tag, to a server endpoint (such as a joke API or a joke database). This is perfect for testing joke APIs, bulk uploading jokes, or sending a batch of humorous content to a server for storage or processing.

The script utilizes `curl` to send HTTP requests, and it prompts users to specify a custom tag for each joke, which allows for better categorization. The tag can be anything from "funny" to more specific tags like "dad jokes" or "knock-knock jokes." The jokes are submitted in bulk, and the server’s responses are logged for easy tracking of submission success or failure.

### Features

- **Bulk Joke Submission**: Automatically send multiple jokes from a predefined array to the server in a single process. This reduces manual effort and accelerates the submission process.
- **Custom Tagging**: Each joke can be associated with a custom tag (such as “funny,” “dad jokes,” or others) for better organization and retrieval, enhancing searchability in databases or APIs.
- **Error Handling**: Built-in error handling ensures that any issues encountered (e.g., network errors, server-side issues) are logged clearly, making troubleshooting easier.
- **Interactive User Input**: Users are prompted to provide the tag for the jokes dynamically at runtime, making the script adaptable to different scenarios.
- **Detailed Server Response Logging**: For every joke sent, the server’s response (including any success or error messages) is printed, so you can track the outcome of each submission.
- **Simple Customization**: You can easily modify the jokes array to add your own set of jokes or adjust the tag input to suit your needs.

### Prerequisites

Before you run the script, make sure you have the following:

- **Node.js**: Ensure that Node.js is installed on your system. If not, you can download it from [nodejs.org](https://nodejs.org/).
- **If Using Emulators like Termux**:
  ```bash
  npm install nodejs-lts
  ```
- **Server Endpoint**: You need a running server that accepts HTTP POST requests at an endpoint like `http://localhost:3000/api/jokes`. This server should be capable of handling JSON data and processing incoming joke submissions.
- **Curl**: The `curl` command-line tool is necessary to make HTTP requests. It is generally pre-installed on Unix-based systems but can also be manually installed on other platforms like Windows.

### Setup
1. **If you Don't have Git**:
   ```bash
   pkg install git
   ```

2. **Clone the Repository**:If you haven’t already, clone the repository or download the script file to your local machine.
   ```bash
   git clone https://github.com/nishuR31/joke.git
   cd joke
   ```

3. **Ensure the Server is Running**: Ensure that the API endpoint (e.g., `http://localhost:3000/api/jokes`) is up and running. You should verify that the server is accepting POST requests and correctly processing the joke submissions.


4. **Install Dependencies** (if applicable): The script uses Node.js, and it may rely on additional external modules. Install any necessary dependencies by running:

   ```bash
   npm install
   ```

   ```bash
   npm start
   ```

5. **Modify the Jokes Array** (Optional): You can modify the jokes sent by editing the `jokesArray` variable in the script. Here’s an example:
   ```js
   let jokesArray = [
     "Why did the scarecrow win an award? Because he was outstanding in his field!",
     "I told my wife she was drawing her eyebrows too high. She looked surprised.",
     "Parallel lines have so much in common. It’s a shame they’ll never meet."
   ];
   ```

---

### How to Run

1. **Navigate to the Script Directory**: Open a terminal window and navigate to the directory where the `sendJokes.js` script is located.

2. **Run the Script**: To launch the script, use Node.js by running:
   ```bash
   node sendJokes.js
   ```

3. **Provide a Tag**: The script will prompt you to enter a custom tag for the jokes. This tag will be sent along with each joke to categorize the submission. For example:
   ```bash
   Enter the tag for the jokes: funny
   ```

4. **Processing the Jokes**: The script will process each joke from the `jokesArray` and send it to the server. After each submission, the server’s response will be displayed. Errors, if any, will also be logged.

--- 

### Example

Here’s an example of what the output might look like when the script is run:

```bash
$ node sendJokes.js
Enter the tag for the jokes: funny
Sending joke 1: "Why did the scarecrow win an award? Because he was outstanding in his field!" with tag: funny
Response from server for joke 1: {"status": "success", "message": "Joke added successfully"}
Sending joke 2: "I told my wife she was drawing her eyebrows too high. She looked surprised." with tag: funny
Response from server for joke 2: {"status": "error", "message": "Failed to add joke"}
Sending joke 3: "Parallel lines have so much in common. It’s a shame they’ll never meet." with tag: funny
Response from server for joke 3: {"status": "success", "message": "Joke added successfully"}
All jokes processed.
```

---

### Customizing Jokes

You can easily modify the `jokesArray` to include your own jokes. Each entry should be a string representing a joke. For example:
```js
let jokesArray = [
  "Why don't skeletons fight each other? They don’t have the guts.",
  "What’s orange and sounds like a parrot? A carrot!",
  "I would tell you a joke about an elevator, but it’s an uplifting experience."
];
```

--- 

### Troubleshooting

If you run into any issues, here are a few things to check:

- **Server URL**: Ensure that the server URL (`http://localhost:3000/api/jokes`) is correct and accessible from your local machine. You can test the endpoint using tools like Postman or curl directly.
  
- **Server Logs**: Review your server logs for any error messages related to the POST requests. The server should provide helpful feedback if something goes wrong.

- **Curl Installation**: Ensure that `curl` is installed and available in your terminal. You can verify this by running the command:
  ```bash
  pkg install curl
  curl --version
  ```

### Advanced Usage

- **Add More Custom Headers**: If your server requires authentication or custom headers (e.g., API tokens), you can modify the `curlCommand` in the script:
  ```js
  const curlCommand = `curl -X POST http://localhost:3000/api/jokes \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "joke": "${joke}",
    "tags":["${tag}"]
  }'`;
  ```

- **Automating Joke Submission**: If you want to automate the joke submission process, you can use task schedulers (e.g., `cron` on Linux/Mac) to run the script at specific intervals. This can be useful for regularly posting jokes to a server or API.

### Conclusion

This script provides a straightforward way to send bulk jokes to an API endpoint with custom tagging and error handling. It’s highly customizable, allowing you to easily change the jokes or the tags used for categorization. Additionally, the detailed logging helps you track the success or failure of each submission, ensuring that you’re always aware of the process’s outcome.

---

**IMPORTANT NOTE**
ONLY 512MB IS GIVEN AS FREE PLAN IN MONGODB, DON'T OVER SPAM AS IF ONCE ALL STORAGE IS USED UP, NO ONE CAN ADD MORE JOKES. 

