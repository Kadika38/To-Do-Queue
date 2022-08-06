const { connect, connection } = require('mongoose');

connect('mongodb://localhost/todoDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;