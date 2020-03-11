const mongoose = require('mongoose');

require('dotenv').config({
  path: '.env.test'
});

module.exports = {
  mongoose,
  connect: () => {
    mongoose.Promise = Promise;
    // mongoose.connect(config.database[process.env.NODE_ENV]);
    mongoose.connect(
      'mongodb://localhost:27017/test',
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
      },
      (err, dbref) => {
        if (!err) console.log('Connected');
        else console.log(err);
      }
    );
  },
  disconnect: done => {
    mongoose.disconnect(done);
  }
};
