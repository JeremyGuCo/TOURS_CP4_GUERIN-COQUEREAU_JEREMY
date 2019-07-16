const express = require('express');
const app = express();
const wildRouter = require('./routes/wildcircus');

const port = 3000;

app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
   next();
});

app.use('/api', wildRouter);

app.listen(port, (err) => {   
   if (err) {
      throw new Error('Something bad happened...');
   }
   console.log(`Server is listening on ${port}`);
});