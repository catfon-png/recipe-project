import axios from 'axios'
const apiId = '1fbf7cde';
const apiKey = 'c4863efa2b218a6cc7151c09f620ed76';

const apiUrl = `https://api.edamam.com/search?q=pasta&app_id=${apiId}&app_key=${apiKey}`;
axios.get(apiUrl)
  .then(response => {
    console.log(response.data.hits);
    // const recipes = response.data.hits;
  })
  .catch(error => {
    console.log(error);
  });