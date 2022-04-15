const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors);


// Setting up the login endpoint
app.use('/login', (req, res) => {
    res.send({
        // In future, we can create more secure token functionality, like Auth0.
        token: 'testauthenticationtoken'
    });
});

// Set up the server to listen on port 8080
app.listen(3000, () => {
    console.log("API is running on port 8080.");
})