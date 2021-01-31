const express = require('express');
const cors = require('cors');

const { hotelsRouter, hotelsDBRouter } = require('./routes');
const { notFoundMiddleware } = require('./middlewares');
const connectDB = require('./database/db');


const app = express();
connectDB();


const PORT = process.env.PORT || 4000;

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//Routes

app.use('/api/v1/', hotelsRouter);
app.use('/api/v1/hotels', hotelsDBRouter);

app.use(notFoundMiddleware)


app.listen(PORT, () => {
  console.log(`Servidor corriendo el puerto ${PORT}`)
})