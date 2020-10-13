//
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

var server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

server.close(() => {
      console.log(`Server closed`);
    });
}); 

/////////////////////////////////////////////////////////////////////////////////////
const axios = require("axios");
const fs = require("fs");

//bring the json from app.js
const swaggerDocs = require("swaggerDocs");

// const API_KEY = process.env.SWAGGERHUB_KEY;
const API_KEY = "fa8f415b-bd39-450a-bbf0-9033b48b8029";

const openAPIPath = "./docs/apiSpec.json";
const owner = "JHDemoProjects";
const projectFolder = "InternalAPIs";
const apiName = "DemoExample";

const IMPORT_URL = `https://api.swaggerhub.com/apis/${owner}/${apiName}?isPrivate=true&version=1.0.0&projectName=${projectFolder}`;

// write to json file
fs.writeFile(openAPIPath, JSON.stringify(swaggerDocs, null, 4), function (err) {
    if (err) {
        return console.log(err);
    }
    console.log(`/n/n ${openAPIPath}`);
    console.log("The file was saved!");
});

// Import
console.log(`Importing API ${openAPIPath}`);

axios.post(PUBLISH_URL, {
    headers: {
        authorization: API_KEY,
        "Content-Type": "application/json",
    },
    data: openAPIPath
}

).then(function (response) {
    console.log(response);
})

console.log("Complete!");
