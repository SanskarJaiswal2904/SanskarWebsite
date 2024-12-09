const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;

const CounterSchema = new mongoose.Schema({
  _id: { type: String, default: "website-visit-counter" },
  count: { type: Number, default: 0 },
}, { collection: 'total-count' });

let Counter;

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  Counter = mongoose.model('Counter', CounterSchema);
};

module.exports = async (req, res) => {
  try {
    await connectDB();
    const counter = await Counter.findByIdAndUpdate(
      "website-visit-counter",
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );
    res.json({ count: counter.count });
  } catch (err) {
    console.error('Error incrementing counter:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
