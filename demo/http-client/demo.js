//API Address:  https://axios-http.com/docs/api_intro
const axios = require('axios');
// axios instance demo

// const instance = axios.create({
//     baseURL: 'http://localhost:3000', timeout: 1000, headers: {'X-Custom-Header': 'foobar'}
// });

// instance.get('/').then(function (response) {
//     console.log(response.data);
// });

// instance.post('/users/do/sign', {
//     username: 'aaa', email: 'bbb'
// }).then(function (response) {
//     console.log(response.data);
// });


// axios web3 demo
axios.post('https://sepolia.infura.io/v3/b6bf7d3508c941499b10025c0776eaf8', {
    "id": 51482996,
    "jsonrpc": "2.0",
    "method": "eth_getTransactionReceipt",
    "params": ["0x3b5e38f90b990cef511d04ad3f6aa9bb33b3ef11afcd75625446b8185c94eb5c"]
}).then(function (response) {
    console.log(response.data);
});