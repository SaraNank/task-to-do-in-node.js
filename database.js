import mongoose from 'mongoose';

const uriLocal = process.env.DB_URI;
const connectDB = async () => {
    await mongoose.connect(uri);
  };
  const database = mongoose.connection;
  
  database.on('error', (error) => {
    console.log(error);
  })
  
  database.once('connected', () => {
    console.log('Database Connected');
  })
  
  export default connectDB;


  mongoose.set('toJSON', {
    virtuals: true,
    transform: (doc, converted) => {
      delete converted._id;
    }
  });
  