///////////////////// Server Dependencies (Express) /////////////////////////////
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
///////////////////// Swagger Dependencies (Spec&API calls) ////////////////////
const swaggerJsDoc = require("swagger-jsdoc");
const axios = require("axios");


///////////////////// Defining the API and Paths ///////////////////////////////
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


const divStyle = "color:red;font-size:46px;text-align:center;";
const HelloWorldComponent = `<div style=${divStyle}>Hello World!</div>`;

app.get("/demo", (req, res) => {
  res.status(200).send(HelloWorldComponent);
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

// creating OAS json, into swaggerDocs
let swaggerDocs = swaggerJsDoc(swaggerOptions);

// prints the doc to /doc
app.get("/doc", (req, res) => {
  res.json(swaggerDocs);
})


////////////////////////////////////// Section TWO -> SwaggerHub ////////////////////////////////////////////
//////////////////////////////////////    POST TO SwaggerHub     ////////////////////////////////////////////
const owner = "JHDemoProjects";
const projectFolder = "Published";
const apiName = "DemoExample";
const API_KEY = "fa8f415b-bd39-450a-bbf0-9033b48b8029";

const IMPORT_URL = `https://api.swaggerhub.com/apis/${owner}/${apiName}?isPrivate=true&version=1.0.0&projectName=${projectFolder}`;
const headers = {
  'Content-Type': 'application/json',
  'Authorization': API_KEY
}
/////////////////////      Impoting Functon      ////////////////////////
axios.post(IMPORT_URL, swaggerDocs, {
  headers: headers
})
 .then(function (response) {
    console.log(response);
  })
  .catch(err => console.log(err));

  console.log("Complete!");
//////////////////////////////////////   End section TWO (Importing to SwaggerHub)  //////////////////////////

var server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

////// close server so the build wont hang //////

// server.close(() => {
//  console.log(`Server closed`);
// });
