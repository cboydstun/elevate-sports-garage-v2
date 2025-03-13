import mongoose from 'mongoose'
import dotenv from 'dotenv';

// connect to MongoDB
export async function connect() {
   
    try {
        await mongoose.connect(process.env.MONGO_URI);
       
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
};

