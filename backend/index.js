const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const credentials = require('./middlewares/credentials');
const corsOptions = require('./config/corsOptions');
require('./services/passport');

require('dotenv').config();

const app = express()

app.use(express.json());

app.use(credentials);

app.use(cors(corsOptions));

app.use(cookieParser());

app.get("/", (req, res) => {
    res.json({message: "hello world!"});
});

require('./routes/auth')(app);
require('./routes/token')(app);
require('./routes/workingTime')(app);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});