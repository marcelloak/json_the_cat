const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

  request(url,(error, response, body) => {
    if (error) {
      callback(error, null);
      process.exit();
    }
    let breedInfo = JSON.parse(body);
    if (breedInfo.length === 0) callback("No breeds match that search string", null);
    else if (breedInfo.length > 1) callback("Multiple breeds match that search string", null);
    else callback(null, breedInfo[0].description);
  });
};

module.exports = { fetchBreedDescription };