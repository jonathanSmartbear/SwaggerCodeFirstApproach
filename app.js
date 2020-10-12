const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const swaggerJsDoc = require("swagger-jsdoc");



// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Demo API",
      description: "API Information",
      contact: {
        name: "JonathanH"
      },
      servers: ["http://localhost:5000"]
    }
  },
  // ['.routes/*.js']
  apis: ["app.js"]
};



const swaggerDocs = swaggerJsDoc(swaggerOptions);

// prints the doc to /doc
app.get("/doc",(req,res) =>{
  res.json(swaggerDocs);
})

// Routes
/**
 * @swagger
 * /demo:
 *  get:
 *    description: Use to request list
 *    responses:
 *      '200':
 *        description: A successful response
 */

app.get("/demo", (req, res) => {
  res.status(200).send("API results");
});

/**
 * @swagger
 * /demo:
 *    put:
 *      description: Use to put
 *    parameters:
 *      - name: user
 *        in: query
 *        description: Name of a user
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Successfully created user
 */

/*
// write to json file and close server
const fs = require('fs');

fs.writeFile("apiSpec.json", JSON.stringify(swaggerDocs, null, 4), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");

// close server so the build wont hang
    server.close(() => {
      console.log(`Server closed`);
    });
}); 
*/

var server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

server.close(() => {
      console.log(`Server closed`);
    });
}); 
