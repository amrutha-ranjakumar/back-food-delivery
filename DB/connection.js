const mongoose = require('mongoose');

// Get connection string from .env file
const connectionString = process.env.DATABASE;

// Connect to MongoDB
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected successfully!!");
}).catch((err) => {
    console.log(`MongoDB connection failed due to ${err}`);
});
