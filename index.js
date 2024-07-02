import express from 'express';
import cors from 'cors';
const app = express();
const port = 5000;

app.use(cors());
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Node.js 18 app!' });
});

app.get('/time', (req, res) => {
    const currentTime = new Date().toISOString();
    res.json({ current_time: currentTime });
});

app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.json({ random_number: randomNumber });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});