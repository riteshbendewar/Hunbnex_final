const mongoose = require('mongoose');
require('dotenv').config()
 
const connectDB = async () => {
  try {
    // eslint-disable-next-line no-undef
    await mongoose.connect(  process.env. MONGO_URI, {
    
  
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
