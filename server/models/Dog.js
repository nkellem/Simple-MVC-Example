const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let dogModel = {};

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    required: true,
    tim: true,
    unique: false,
  },

  age: {
    type: Number,
    min: 0,
    required: true,
  },

  createdData: {
    type: Date,
    default: Date.now,
  },

});

DogSchema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };

  return dogModel.findOne(search, callback);
};

// Create the cat model based on the schema. You provide it with a custom discriminator
// (the name of the object type. Can be anything)
// and the schema to make a model from.
// Look at the model variable definition above for more details.
dogModel = mongoose.model('Dog', DogSchema);


// export our public properties
module.exports.dogModel = dogModel;
module.exports.DogSchema = DogSchema;
