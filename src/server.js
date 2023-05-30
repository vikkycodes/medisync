const express = require("express"),
      cors = require("cors"),
      morgan = require("morgan"),
      {json, urlencoded} = require("body-parser");


    const app = express();
    
    //installed middlewares
    app.use(cors);
    app.use(morgan);
    app.use(json);

     
    const PORT = 4000;

    const start = () => {
    app.listen(PORT,console.log(`listening to port ${PORT}`))
    }
   module.exports = { start }