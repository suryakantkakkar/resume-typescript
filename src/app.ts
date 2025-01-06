import express from 'express';
import resumeRoutes from './routes/resumeRoutes';  // Make sure this path is correct

const app = express();

// Middleware
app.use(express.json());

// Register the routes
app.use('/', resumeRoutes);  // Prefix '/api' is optional, depending on your design

// Example: test route for sanity check
app.get('/test', (req, res) => res.send('Test route working!'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
