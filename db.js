import mongoose from "mongoose";
// const MONGO_URI ="mongodb://localhost:27017/expressCrud";
const MONGO_URI ="mongodb+srv://dhavalajain:844165@cluster0.stcbugn.mongodb.net/expressCrud";

const connectDb= async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDb Connected!")
    } catch (error) {
        console.log(error);
    }
};

export default connectDb;