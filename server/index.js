const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookie = require('cookie-parser');
const config = require('./config/key');

const { User } = require('./models/user');
const { auth } = require('./middleware/auth');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.urlencoded());
// app.use(express.json());
app.use(cookie());

mongoose
    .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('db connected'))
    .catch(err => console.log(err));

app.get('/api/user/auth', auth, (req, res) => {
    res.json({
        _id: req.body._id,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role
    })
})

app.post('/api/users/register', (req, res) => {
    const user = new User(req.body)
    user.save((err, userData) => {
        if (err) { return res.json({ success: false, err }) }
        return res.send(userData)
        
    })
})

app.post('/api/user/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) return res.json({
            loginSuccess: false,
            message: 'No such email or password'
        });

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) { return res.json({ loginSuccess: false, message: 'No such email or password' }) }
        });

        user.generateToken((err, user) => {
            if (err) { return res.status(400).send(err) }
            res.cookie('auth', user.token).json({
                loginSuccess: true
            })
        })
    })
})

app.get('/api/user/logout', auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, doc) => {
        if (err) return res.json({ success: false, err })
        return res.send({
            success: true
        })
    })
})

app.listen(5000, console.log('app is running on port5000'));

