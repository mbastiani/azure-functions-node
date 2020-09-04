const Mongoose = require('mongoose');

//module.exports.connect = function () {
Mongoose.connect(process.env["ENV_MONGODB"], {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
//}