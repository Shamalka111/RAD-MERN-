let express = require('express');
const bodyParser = require('body-parser');
const createError = require('http-errors');
// const { default: mongoose } = require('mongoose');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const dbConfig =require('./db/database');
const noteRoutes =require('./routes/note.router');


mongoose.Promise =global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
}).then(() => {
        console.log('Database Successfully connected')
    },
    error => {
        console.log('Database could not be connected : ' + error)
    }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());

const userRoute = require('./routes/student.routes')
//const gohome = require('./routes/home')


app.use('/admin', userRoute);
app.use('/api/notes',noteRoutes);

const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
    console.log('Port connected to: ' + port)
})

app.use((req, res, next) => {
    next(createError(404));
});


app.get('/', (req, res) => {
    res.send('invaild endpoint');
});

app.use(function (err, req, res, next) {
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})