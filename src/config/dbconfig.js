// const mongoose  = require('mangoose');
const mongoose = require('mongoose'); // Correct

const connectDatabase = async () => {
    try {
        const connectionString = "mongodb+srv://testUser:testuser%40123@cluster0.gitr5.mongodb.net/testdb";
        await mongoose.connect(connectionString);
        console.log('Connected to Database');
    } catch(error) {
        console.log('could not conntect to Database', error);
        process.exit(1);
    }

}
module.exports = connectDatabase;