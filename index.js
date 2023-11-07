const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const env = require('dotenv').config();

const bookRoute = require('./Routes/bookRoutes');

const app = express();
const port = process.env.PORT || 3000;
const url = process.env.DB_URL || ""

app.use(bodyParser.json());
app.use(cors())

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error',() => console.log('DB connection error'));
db.once('open', () => {
  console.log('Connected to DB');
});

app.use('/api' , bookRoute)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
