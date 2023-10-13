const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        dbURL = "mongodb+srv://venkadeshdeveloper:venkadesh@cluster0.12gdcib.mongodb.net/";

        mongoose.set("strictQuery", false);

        await mongoose.connect(dbURL).then(() => {
            console.log("DB is successfully connected!");
        }).catch(err => {
            console.log(err);
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;