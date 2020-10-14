


///////////// POST TO testEngine ////////////////////////////////////////////////
const axios = require("axios");

const owner = "JHDemoProjects";
const projectFolder = "InternalAPIs";
const apiName = "DemoExample";
const API_KEY = "testengine";
const testJob = "testJobString";

const TestEngine_Url = `http://ec2-3-129-173-1.us-east-2.compute.amazonaws.com:8080/api/v1/testjobs?fetch=5`;
const basicAuth = {
  'username': 'jonathan',
  'password': API_KEY
}
/////////////////////////////////////////////
axios.get(TestEngine_Url,{
  auth: basicAuth
})
  .then(function (response) {
    console.log(response);
  })
  .catch(err => console.log(err));

  console.log("Sent Test To TestEngine!");
////////////////////////////////////////////////////////////////////////////////


