require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes.js');
const userModel = require('./models/userModel')
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || 3001;


//middleware
app.use(express.json());
app.use('/api', userRoutes);

// rutes
app.get('/', (req, res) => {
    res.send('Welcome to my API');
});


// MongoDB conection
mongoose
    .connect(process.env.MONGODB_URI/* , {
        useNewUrlParser: true,
        useUnfiedTopology: true,
        useCreateIndex: true
    }, (err) => {
    try {
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(err);
    }
    } */)
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => console.error(error));

app.listen(port, () => {
    console.log('Server on port: ', port);
});

/* function crear () {
 
    userModel.create(
        {
            team: "Dia",
            name: "Carlos",
            lastName: "Ocampo",
            userName: "Carl02",
            password: "123",
            teamAdmin: true
        }
    )
} */


