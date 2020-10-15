
const fs = require('fs');

///////////// POST TO testEngine ////////////////////////////////////////////////
const axios = require("axios");

const owner = "JHDemoProjects";
const projectFolder = "InternalAPIs";
const apiName = "DemoExample";
const API_KEY = "testengine";
const xmlFile = fs.readFile("./tests/TestEngineSchemaC-readyapi-project.xml", 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
//  console.log(data)
})

const TestEngine_Url = `http://ec2-3-129-173-1.us-east-2.compute.amazonaws.com:8080/api/v1/testjobs`;
const basicAuth = {
  'username': 'jonathan',
  'password': API_KEY
}
/////////////////////////////////////////////
axios.post(TestEngine_Url, xmlFile, {
  'auth': basicAuth,
  'Content-Type': 'application/xml'
})
  .then(function (reqwest) {
    console.log(reqwest);
  })
  .catch(err => console.log(err));

  console.log("Sent Test To TestEngine!");
////////////////////////////////////////////////////////////////////////////////


