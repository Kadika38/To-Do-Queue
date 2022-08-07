const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const path = require('path');

const PORT = 3001;
const MONGOPORT = 27017;
const app = express();

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: `mongodb://localhost:${MONGOPORT}` }),
};

app.use(session(sess));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
  });
});