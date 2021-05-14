const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://daniel:abc1234@cluster0.ssedw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('db connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('connected')
})

app.listen(5000, console.log('app is running on port5000'));

