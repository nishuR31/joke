const express = require('express');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config(); // Ensure you have a .env file with MONGO_URI defined
const { param, body, validationResult } = require('express-validator');

const app = express();
const port = process.env.PORT || 3000; // Use PORT from .env or default to 3000

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define Joke Schema
const jokeSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4 }, // UUID for each joke
  joke: { type: String, required: true },
  tags: { type: [String], default: [] },
});

// Define Joke Model
const Joke = mongoose.model('Joke', jokeSchema);

// Middleware to handle validation errors
const handleErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Route to get all jokes
app.get('/api/jokes', async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.status(200).json(jokes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jokes', error: error.message });
  }
});

// Route to add a single joke with multiple tags
app.post('/api/jokes', async (req, res) => {
	console.log('Incoming request:', req.body);
  try {
    const { joke, tags } = req.body;
    if (!joke) {
      return res.status(400).json({ message: 'Joke text is required' });
    }
    const newJoke = new Joke({
      joke: joke.trim(),
      tags: Array.isArray(tags) ? tags : [],
    });
    const savedJoke = await newJoke.save();
    res.status(201).json(savedJoke);
  } catch (error) {
    res.status(500).json({ message: 'Error adding joke', error: error.message });
  }
});

// Route to add jokes with specific tag (corrected version of the post routes)
app.post(
  '/api/jokes/:tag',
  [param('tag').notEmpty(), body('jokesString').notEmpty()],
  handleErrors,
  (req, res) => {
	  console.log('Incoming request:', req.body);
    const { tag } = req.params;
    const { jokesString } = req.body;
    const newJokes = processJokes(jokesString, [tag]);
    res.status(201).json(newJokes);
  }
);

// Route to delete all jokes
app.delete('/api/jokes', async (req, res) => {
  try {
    await Joke.deleteMany();
    res.status(200).json({ message: 'All jokes deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting jokes', error: error.message });
  }
});

// Route to delete a specific joke by ID
app.delete('/api/jokes/id/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedJoke = await Joke.findOneAndDelete({ id });
    if (!deletedJoke) {
      return res.status(404).json({ message: 'Joke not found' });
    }
    res.status(200).json({ message: 'Joke deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting joke by ID', error: error.message });
  }
});

// Route to get jokes filtered by tag
app.get('/api/jokes/tag/:tag', async (req, res) => {
  try {
    const { tag } = req.params;
    const filteredJokes = await Joke.find({ tags: tag });
    if (filteredJokes.length === 0) {
      return res.status(404).json({ message: `No jokes found with the tag: ${tag}` });
    }
    res.status(200).json(filteredJokes);
  } catch (error) {
    res.status(500).json({ message: 'Error filtering jokes by tag', error: error.message });
  }
});

// Route to get all unique tags
app.get('/api/tags', async (req, res) => {
  try {
    const jokes = await Joke.find();
    const tags = [...new Set(jokes.flatMap((joke) => joke.tags))];
    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tags', error: error.message });
  }
});

// Catch-all route for undefined endpoints
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
















































  



























