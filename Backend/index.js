
import dotenv from 'dotenv';
dotenv.config();
import { createRequire } from 'module';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
const require = createRequire(import.meta.url);

const express = require('express'); // Importing express
const cors = require('cors');


   const app = express(); // Creating an express app
   app.use(cors());
   app.use(express.json());

// connect to mongo
   
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));



const Message = mongoose.model('message', {
    name: String,
    email: String,
    message: String,
  });
  
  app.post('/message', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Received data:', { name, email, message });
  
    // Create and save the new message
    const newMessage = new Message({ name, email, message });
    newMessage
      .save()
      .then((savedMessage) => {
        res.status(201).send({ message: 'Message saved successfully', data: savedMessage });
      })
      .catch((error) => {
        console.error('Error saving message:', error);
        res.status(500).send({ message: 'Error saving message', error });
      });
  });
  

   // Set up the server to listen on port 3000
   
   const PORT =process.env.PORT
   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
   });

   // Get the current file path and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the React app's 'dist' folder
app.use(express.static(path.join(__dirname, '../Frontend/dist')));

// Catch-all route to serve React's index.html for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/dist', 'index.html'));
});