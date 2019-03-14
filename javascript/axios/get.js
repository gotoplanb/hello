const axios = require('axios')

axios.get('http://requestbin.fullcontact.com/vbwzbsvb', {
  params: {
    ID: 12345
  }
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});