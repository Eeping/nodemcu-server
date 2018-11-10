const mongoose = require('mongoose');

const db = 'mongodb://paul:abc123@ds139370.mlab.com:39370/nodemcu';

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('mongoose connected to mongodb');
  })
  .catch(error => {
    console.log('mongoose connection error: ', error);
  });

const sensorSchema = new mongoose.Schema({
  name: {
    type: String
  },
  value: {
    type: Number
  }
});

const Sensor = mongoose.model('Sensor', sensorSchema, 'sensorCollection');

module.exports = Sensor;
