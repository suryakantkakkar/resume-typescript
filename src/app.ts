import express from 'express';
import resumeRoutes from './routes/resumeRoutes';  

const app = express();


app.use(express.json());

app.use('/', resumeRoutes);  

app.get('/test', (req, res) => res.send('Test route working!'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
