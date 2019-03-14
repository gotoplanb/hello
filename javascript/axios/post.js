const axios = require('axios')

axios.post('http://requestbin.fullcontact.com/vbwzbsvb', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

