const { connect } = require('mongoose');


const connectDB = async () => {
  try {
    const conn = await connect('mongodb://localhost/hotels', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log(
      `MongoDB Connected: ${conn.connection.host}`
    );

  } catch (error) {
    console.log(error);
  }

};

module.exports = connectDB;
