import mongoose from "mongoose";
// const MONGO_URI="mongodb+srv://harshitsinghaldkcse:TXuCqYtRHMYD3yNz@cluster0.cxof6jd.mongodb.net/blog"
const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;
        // const mongoUri="mongodb+srv://harshitsinghaldkcse:TXuCqYtRHMYD3yNz@cluster0.cxof6jd.mongodb.net/blog"
        if (!mongoUri) {
            throw new Error('MONGO_URI is not defined in environment variables.');

        }
        console.log('MONGO_URI:', process.env.MONGO_URI);

        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully.');
        
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
    }
};

export default connectDB;
