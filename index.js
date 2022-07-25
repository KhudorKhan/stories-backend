import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Backend Connected...')
})

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true } )
    .then(() => app.listen(PORT, () => console.log(`Server is runnig on port: ${PORT}`)))
    .catch((error) => console.log(error.message));













// mongoose.connect(CONNECTION_URL);

// const connection = mongoose.connection;
// connection.once('open', (e) => {
//     if (e) {
//         console.log(e)
//     } else {
//         console.log('MongoDB Connected');
//     }
// })


// app.listen(PORT, () => {
//     console.log('Server is running')
// })


