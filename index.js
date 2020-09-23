const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(process.argv[2], (error, description) => {
  if (error) console.log("Error fetch details:", error.code);
  else console.log(description);
});