// Interact with a Smart Contract:

// Import Web3 module
const Web3 = require('web3');

// Create an instance of Web3 and set the Infura node as provider
// Replace 'YourInfuraProjectID' with your own Infura project ID
const web3 = new Web3('https://mainnet.infura.io/v3/YourInfuraProjectID');

// Define the ABI and the address of the contract
const contractABI = YourContractABI; // Replace with your contract's ABI
const contractAddress = 'YourContractAddress'; // Replace with your contract's address

// Create a new contract instance with the contract at the given address
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Define an async function to get the balance of an account
const getBalance = async (account) => {
    // Call the 'balanceOf' method on our contract
    const balance = await contract.methods.balanceOf(account).call();

    // Log the balance
    console.log('Balance:', balance);
};

// Call the getBalance function with an account
getBalance('0xYourAccountAddress').catch(console.error);
