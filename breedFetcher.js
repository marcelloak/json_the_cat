const request = require('request');

let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + process.argv[2];

request(url,(error, response, body) => {
  if (error) {
    console.log("Error occurred:", error.code);
    process.exit();
  }
  let breedInfo = JSON.parse(body);
  if (breedInfo.length === 0) console.log("No breeds match that search string");
  else if (breedInfo.length > 1) console.log("Multiple breeds match that search string");
  else console.log(breedInfo[0].description);
});