import express from 'express';
import 'dotenv/config'

// Env file variables
const PORT = process.env.LOCAL_PORT || 8080;

const app = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server started on port 8080`);
});

