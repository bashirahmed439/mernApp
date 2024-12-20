const mongoose = require('mongoose');
const mongouri = "mongodb://localhost:27017";

const connectToMongo =async () =>{

    try {
      var result =  await mongoose.connect('mongodb://127.0.0.1:27017/bashir');
        console.log('Database Connected Successfully!');
      } catch (error) {
        console.log(error);
        handleError(error);
      }

}

module.exports = connectToMongo;