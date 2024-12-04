require('dotenv').config(); // Load environment variables from .env file
const { MongoClient } = require("mongodb");

// Access MongoDB URI from the .env file
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function updateVisitCount() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    // Access the database and collection
    const database = client.db("personal-website");
    const collection = database.collection("total-count");

    // Check if the document exists
    console.log("Checking if the document exists...");
    let document = await collection.findOne({ _id: "website-visit-counter" });
    console.log("Document found:", document);

    if (!document) {
      console.log("Document does not exist. Creating a new document with count: 108");
      await collection.insertOne({ _id: "website-visit-counter", count: 108 });
      document = { count: 108 }; // Simulate the newly inserted document
    }

    // Increment the count
    console.log("Incrementing the count...");
    const updatedDocument = await collection.findOneAndUpdate(
      { _id: "website-visit-counter" },
      { $inc: { count: 1 } },
      { returnDocument: "after" } // Return the document after update
    );

    // Log the updated document
    console.log("Updated document after increment:", updatedDocument);

    // Ensure the updated document value exists and is valid
    if (updatedDocument && updatedDocument.value) {
      console.log(`Current visit count: ${updatedDocument.value.count}`);
    } else {
      console.error("Failed to update the visit count. Document was not updated.");
    }
  } catch (err) {
    console.error("Error updating visit count:", err);
  } finally {
    // Ensure the client will close when you finish/error
    await client.close();
  }
}

// Call the function to test it
updateVisitCount().catch(console.dir);
