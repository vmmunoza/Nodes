// Import Web3 module
const Web3 = require('web3');

// Create an instance of Web3 and set the Infura node as provider
// We are using Websockets for real-time updates
// Replace 'YourInfuraProjectID' with your own Infura project ID
const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/YourInfuraProjectID'));

// Subscribe to 'newBlockHeaders' to get notified of new blocks on the blockchain
web3.eth.subscribe('newBlockHeaders', (error, blockHeader) => {
    if (error) console.error(error);

    // Log the block number
    console.log('Successfully subscribed!', 'Block number:', blockHeader.number);
}).on('error', console.error);
