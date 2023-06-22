// We import the Web3 library. This library allows us to interact with Ethereum.
const Web3 = require('web3');

// We create a new instance of Web3 and connect to the Ethereum mainnet through Infura.
// Replace 'YourInfuraProjectID' with your own Infura Project ID.
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YourInfuraProjectID'));

// Define the contract address - this is the address where your contract is located on Ethereum.
// Replace 'YourContractAddress' with your own contract address.
const contractAddress = 'YourContractAddress';

// Define the ABI (Application Binary Interface) of the contract.
// This is a representation of the smart contract, including all of its functions and variables.
// Replace 'YourContractABI' with your own contract's ABI.
const abi = YourContractABI;

// Create a new instance of the contract using the ABI and the address.
// This contract object is how we interact with our contract on Ethereum.
const contract = new web3.eth.Contract(abi, contractAddress);

// We define an asynchronous function to get the transfer events.
const getTransferEvents = async () => {
    // We call the 'getPastEvents' function on our contract instance, asking for 'Transfer' events.
    // 'fromBlock: 0' means we want to get all events from the beginning of the blockchain. 
    // You might want to change this to a more recent block number to limit the response.
    const events = await contract.getPastEvents('Transfer', {
        fromBlock: 0,
        toBlock: 'latest' // 'latest' means up to and including the most recent block.
    });

    // Now we iterate through all the events we received.
    for (let i = 0; i < events.length; i++) {
        // Each event has a 'returnValues' object which includes the actual values of the event.
        // We log the 'from', 'to', and 'tokenId' values, which represent the sender, receiver, and the ID of the token transferred.
        console.log('From: ' + events[i].returnValues.from);
        console.log('To: ' + events[i].returnValues.to);
        console.log('Token ID: ' + events[i].returnValues.tokenId);
    }
};

// Finally, we call our function.
// We catch any errors that occur and log them to the console.
getTransferEvents().catch((err) => console.error(err));
