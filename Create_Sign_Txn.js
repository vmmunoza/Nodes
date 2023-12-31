// Import Web3 module
const Web3 = require('web3');

// Create an instance of Web3 and set the Infura node as provider
// Replace 'YourInfuraProjectID' with your own Infura project ID!
const web3 = new Web3('https://mainnet.infura.io/v3/YourInfuraProjectID');

// Define your Ethereum accounts
// You can generate accounts using MetaMask or geth
const account1 = '0xYourAccountAddress1'; // Your account address 1
const account2 = '0xYourAccountAddress2'; // Your account address 2

// Private key for account1
// IMPORTANT: NEVER reveal your private keys to anyone!
// This is used to sign transactions from this account
const privateKey1 = Buffer.from('YourPrivateKey1', 'hex');

// Define an async function for making the transfer
const transfer = async () => {
    // Create the transaction object
    const txObject = {
        nonce:    web3.utils.toHex(await web3.eth.getTransactionCount(account1)),
        to:       account2,
        value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    };

    // Sign the transaction
    const tx = new Tx(txObject, { chain: 'mainnet' });
    tx.sign(privateKey1);

    // Serialize the transaction and convert it to hex
    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex');

    // Broadcast the transaction to the network
    const txHash = await web3.eth.sendSignedTransaction(raw);

    // Log the transaction hash
    console.log('Transaction hash:', txHash);
};

// Call the transfer function
transfer().catch(console.error);
