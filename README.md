

# Joke API - Free Jokes Service

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Followers](https://img.shields.io/github/followers/nishuR31.svg?style=social)](https://github.com/nishuR31?tab=followers)
[![Issues](https://img.shields.io/github/issues/nishuR31/joke.svg)](https://github.com/nishuR31/joke/issues)
[![Commits](https://img.shields.io/github/commits-since/nishuR31/joke/latest.svg)](https://github.com/nishuR31/joke/commits/main)
<a href="https://github.com/nishuR31/joke"><img src="https://komarev.com/ghpvc/?username=nishuR31&color=blueviolet" alt="Profile Views"></a>
<a href="https://github.com/nishuR31/joke"><img src="https://img.shields.io/github/repo-size/nishuR31/joke?color=black&label=Repo%20Size&style=flat&logo=github&logoColor=black" alt="GitHub Repo Size"></a>




## Repository Information

- **Repository Name**: [Joke API](https://github.com/nishuR31/joke)
- **License**: MIT License
- **Created By**: [Nishu Rajak](https://github.com/nishuR31)
- **Merits**: Open-source, free, public API for fetching jokes with a variety of tags, including NSFW and SFW content.
- **Features**: Provides several APIs for getting jokes based on categories, tags, or individual joke ID.
  
---

## Overview

The **Joke API** is a free and open-source API for fetching a wide variety of jokes. It includes support for multiple categories of jokes such as **NSFW**, **SFW**, and many others. The API is structured to allow easy access to jokes, with multiple endpoints to fetch random jokes, search by tag, and even delete jokes.

---

## Features

- Fetch jokes using tags or by random selection.
- Support for NSFW (Not Safe For Work) and SFW (Safe For Work) jokes.
- APIs for managing jokes (POST, DELETE, GET).
- Allows filtering jokes by specific tags.
- Free to use and open-source.
- Provides easy-to-integrate API endpoints for developers.

---
<br>

## API Endpoints

### 1. **Get a Random Joke**
   Fetch a random joke from the API.

   **Endpoint**: `/api/jokes`
   - **Method**: GET

### 2. **Get Jokes by Tag**
   Fetch jokes filtered by a specific tag (e.g., `funny`, `dad`, `animal`, etc.).

   **Endpoint**: `/api/jokes/tag/:tag`
   - **Method**: GET
   - **Parameters**: `tag` (e.g., funny, dad, animal)

### 3. **Get Joke by ID**
   Retrieve a specific joke by its unique ID.

   **Endpoint**: `/api/jokes/:id`
   - **Method**: GET
   - **Parameters**: `id` (Unique identifier for the joke)

### 4. **Add a New Joke**
   Add a new joke to the API.

   **Endpoint**: `/api/jokes`
   - **Method**: POST
   - **Body**: `{ "joke": "Your Joke Text", "tags": ["tag1", "tag2"] }`

### 5. **Delete a Joke**
   Delete a joke from the API using its unique ID.

   **Endpoint**: `/api/jokes/:id`
   - **Method**: DELETE
   - **Parameters**: `id` (ID of the joke to delete)

### 6. **Get All Tags**
   Retrieve all available tags for categorizing jokes.

   **Endpoint**: `/api/tags`
   - **Method**: GET

---
<br>

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/nishuR31/joke.git
   cd joke
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

   The server will now be running locally, and you can access the API at:

   ```
   http://localhost:3000
   ```

4. **Fetch Random Joke**:

   ```bash
   curl -X GET http://localhost:3000/api/jokes
   ```

5. **Fetch Jokes by Tag**:

   ```bash
   curl -X GET http://localhost:3000/api/jokes/tag/funny
   ```

6. **Add a Joke**:

   ```bash
   curl -X POST http://localhost:3000/api/jokes -H "Content-Type: application/json" -d '{"joke": "Why did the chicken cross the road?", "tags": ["animal", "funny"]}'
   ```
  
7. **Delete a Joke**:

   ```bash
   curl -X DELETE http://localhost:3000/api/jokes/1
   ```
   
<br>

[*You can also add bulk jokes as an array with jokes in elements having same tag..*](addJoke.md)

<br>

---

<br>

*You can try a basic javascript code to see and fetch code to understand the process, fetching, api working, asynchronous working of functions, generator functions in javascript, and much more.*
The [File](seeJoke.js) contains the code, you can also [Click Here](seeJoke.md) to get more information.

---



## API Example Calls

### Example 1: Get Random Joke

```bash
curl -X GET http://localhost:3000/api/jokes
```

Response:

```json
{
  "joke": "Why don’t skeletons fight each other? They don’t have the guts.",
  "tags": ["funny"]
}
```

### Example 2: Get Jokes by Tag (funny)

```bash
curl -X GET http://localhost:3000/api/jokes/tag/funny
```

Response:

```json
{
  "jokes": [
    {
      "joke": "I told my wife she was drawing her eyebrows too high. She looked surprised.",
      "tags": ["funny"]
    },
    {
      "joke": "Why did the chicken cross the road? To get to the other side.",
      "tags": ["funny", "animal"]
    }
  ]
}
```

### Example 3: Add a Joke

```bash
curl -X POST http://localhost:3000/api/jokes -H "Content-Type: application/json" -d '{"joke": "Why did the bicycle fall over?", "tags": ["funny", "pun"]}'
```

Response:

```json
{
  "message": "Joke added successfully!"
}
```

### Example 4: Delete a Joke

```bash
curl -X DELETE http://localhost:3000/api/jokes/1
```

Response:

```json
{
  "message": "Joke deleted successfully!"
}
```

---
<br>

## Bash Commands

To interact with the server or automate tasks, here are some useful bash commands:

- **Start the server**:

  ```bash
  npm start
  ```

- **Test API with cURL** (fetch random joke):

  ```bash
  curl -X GET http://localhost:3000/api/jokes
  ```

- **Add a new joke**:

  ```bash
  curl -X POST http://localhost:3000/api/jokes -H "Content-Type: application/json" -d '{"joke": "Why do sons love it when their moms have loose change?", "tags": ["family", "funny"]}'
  ```

---
<br>

## Contributing

Contributions are welcome! Please fork this repository, submit issues, and make pull requests to improve this project.

- Fork the repository
- Create a feature branch (`git checkout -b feature-name`)
- Commit your changes (`git commit -am 'Add new feature'`)
- Push to the branch (`git push origin feature-name`)
- Create a new Pull Request

---
<br>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.

---
<br>

## Tags

- **SFW**: Safe For Work jokes
- **NSFW**: Not Safe For Work jokes
- **funny**
- **animal**
- **dad**
- **pun**

---
<br>

## Issues

If you encounter any issues or have suggestions for improvements, please [open an issue](https://github.com/nishuR31/joke/issues).

---
<br>

## Navigation

- [Repository Link](https://github.com/nishuR31/joke)
- [API Documentation](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

