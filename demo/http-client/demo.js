//API Address:  https://axios-http.com/docs/api_intro
const axios = require('axios');
const instance = axios.create({
    baseURL: 'http://localhost:3000', timeout: 1000, headers: {'X-Custom-Header': 'foobar'}
});

// instance.get('/').then(function (response) {
//     console.log(response.data);
// });

instance.post('/users/do/sign', {
    username: 'aaa', email: 'bbb'
}).then(function (response) {
    console.log(response.data);
});