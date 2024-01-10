const Web3 = require('web3');
const web3 = new Web3.Web3('https://bsc-dataseed4.bnbchain.org');

const dstAddress = '0x0000  ';
const srcAddress = '0x0000  ';

const tx = {
    from: dstAddress,
    to: srcAddress,
    data: txData,
    nonce: '0x1',
    type: '0x0'
};
let privateKey = '03d3b4eb99ba53e8193597dbb692ce9daafd9655c2b4a2ea583f417f4682aa66';
web3.eth.accounts.signTransaction(tx, privateKey).then((res) => {
    web3.eth.sendSignedTransaction(res.rawTransaction).then((res) => {
        console.log(res);
    });
});