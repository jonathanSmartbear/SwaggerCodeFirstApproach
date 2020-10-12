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


(async function () {
    await import()
    {
        try {
            // Import
            console.log(`Importing API ${version}`);
            await axios({
                url: PUBLISH_URL,
                method: "POST",
                headers: {
                    authorization: API_KEY,
                    "Content-Type": "application/json",
                },
                data: { openAPIPath },
            });

        } catch (error) {
            console.error(error.message);
            process.exit(1);
        }
        console.log("Complete!");
    };
})();
