let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
const passport = require('passport');
const routes = require('./routes/api/users.route');

const app = express();

// Middleware function that acts as the response body parser. In this case, returns data in JSON format.
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// MongoDB URI Config
const dbConfig = require('./config/keys/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(
        dbConfig,
        { useNewUrlParse: true }
    )
    .then(() => console.log("Connection to MongoDB is successfully established."))
    .catch(err => console.log(err));

// Middleware function for passport
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Routes
app.use(routes);

const PORT = process.env.PORT || 42069;

app.listen(PORT, () => {
    console.log(`The server is up and running on PORT ${PORT}.`)
});