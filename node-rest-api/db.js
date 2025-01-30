const mongoose = require( "mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://ankitbtec7:UW0weqCEXxs2hupE@cluster0.7yc6q.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`mongo db connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;