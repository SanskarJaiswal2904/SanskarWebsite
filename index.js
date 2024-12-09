require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

// Middleware
app.use(bodyParser.json());

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
app.get('/api/get-counter', async (req, res) => {
  try {
    const counter = await Counter.findById("website-visit-counter");
    if (!counter) {
      return res.status(404).json({ error: 'Counter not found' });
    }
    console.log("counter")
    res.json({ count: counter.count });
  } catch (err) {
    console.error('Error fetching counter:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// API to increment the counter value
app.post('/api/increment-counter', async (req, res) => {
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

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
