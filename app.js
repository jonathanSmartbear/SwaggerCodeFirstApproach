const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const axios = require("axios");

const swaggerJsDoc = require("swagger-jsdoc");

const owner = "JHDemoProjects";
const projectFolder = "InternalAPIs";
const apiName = "DemoExample";
const API_KEY = "fa8f415b-bd39-450a-bbf0-9033b48b8029";

const IMPORT_URL = `https://api.swaggerhub.com/apis/${owner}/${apiName}?isPrivate=true&version=1.0.0&projectName=${projectFolder}`;

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

let swaggerDocs = swaggerJsDoc(swaggerOptions);
//swaggerDocs = JSON.stringify(swaggerDocs);

// prints the doc to /doc
app.get("/doc", (req, res) => {
  res.json(swaggerDocs);
})
//console.log(swaggerDocs)


///////////// POST TO SwaggerHub ////////////
axios.post(IMPORT_URL, {swaggerDocs},
  {headers: {
    Authorization: API_KEY,
    "Content-Type": "application/json",
  }}
 )
  .then(function (response) {
    
  })
  .catch(err => console.log(err));
  console.log("Complete!");
////////////////////////////////////////////

var server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// close server so the build wont hang
server.close(() => {
  console.log(`Server closed`);
});
