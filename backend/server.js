let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbSetup = require('./servers/db');

// Express Routes
const userRoute = require('../backend/routes/users.route');