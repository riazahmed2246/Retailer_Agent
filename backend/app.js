
import express from 'express';
import mongoose from 'mongoose';
import registerRoutes from './routes/register.js';
import loginRoutes from './routes/login.js';
import adminRoutes from './routes/admin.js';

// Initialize Express
const app = express();
app.use(express.json()); // For parsing JSON data

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Retailer_Agent', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Use the registration routes
app.use('/api/v1', registerRoutes);
app.use('/api/v1', loginRoutes);
app.use('/api/v1', adminRoutes); // Use admin routes

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
