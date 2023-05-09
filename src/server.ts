import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import contentMessageRoutes from './routes/ContentMessageRoutes';

dotenv.config();

const app = express();
const PORT = 3000;

const MONGODB_URI = process.env.MONGODB_URI || '';
app.use('/content-messages', contentMessageRoutes);

MongoClient.connect(MONGODB_URI)
  .then((client) => {
    console.log('Connected to MongoDB');
    // Perform any necessary database operations here

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
