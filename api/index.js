import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

// Use cors and body-parser middlewares after initializing app
app.use(cors());
app.use(bodyParser.json());

// Example route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
