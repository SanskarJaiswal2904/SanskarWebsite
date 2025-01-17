require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');





// Middleware
app.use(bodyParser.json());

// CORS configuration
app.use(cors({
  origin: ['http://localhost:8080', 'https://sanskarwebsite.vercel.app'], // Allow frontend URLs
  methods: ['GET', 'POST'], // Allow specific HTTP methods
  allowedHeaders: ['Content-Type'], // Allow specific headers
  credentials: true, // Optional: If you're sending cookies or auth headers
}));
  
// MongoDB Connection
const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Mongoose Schema and Model
const CounterSchema = new mongoose.Schema({
  _id: { type: String, default: "website-visit-counter" },
  count: { type: Number, default: 0 },
}, { collection: 'total-count' }); // Explicitly specify the collection name

const Counter = mongoose.model('Counter', CounterSchema);

// Initialize Counter Document (if not already created)
const initializeCounter = async () => {
  try {
    const existingCounter = await Counter.findById("website-visit-counter");
    if (!existingCounter) {
      await Counter.create({ _id: "website-visit-counter", count: 0 });
      console.log('Counter initialized');
    }
  } catch (err) {
    console.error('Error initializing counter:', err);
  }
};
initializeCounter();

// API to fetch the current counter value
app.get('/api/v1/get-counter', async (req, res) => {
  try {
    const counter = await Counter.findById("website-visit-counter");
    if (!counter) {
      return res.status(404).json({ error: 'Counter not found' });
    }
    res.json({ count: counter.count });
  } catch (err) {
    console.error('Error fetching counter:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// API to increment the counter value
app.post('/api/v1/increment-counter', async (req, res) => {
  try {
    const counter = await Counter.findByIdAndUpdate(
      "website-visit-counter",
      { $inc: { count: 1 } },
      { new: true, upsert: true } // Ensures the document is created if not found
    );
    res.json({ count: counter.count });
  } catch (err) {
    console.error('Error incrementing counter:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

  app.get('/api/v1/test', (req, res) => {
  try {
    // Log the request body to verify incoming data (optional)
    console.log('Request received:', req.body);

    // Respond with a success message
    res.status(200).json({
      success: true,
      message: 'Test route is working!',
      data: req.body, // Echoing back the request body
    });
  } catch (error) {
    // Handle any unexpected errors
    console.error('Error in test route:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred on the test route',
    });
  }
  });

  app.get('/api/v1/test2', (req, res) => {
    res.send('Server is in test2');
  });

  app.get('/', (req, res) => {
    res.send('Server is live');
  });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});