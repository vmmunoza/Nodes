// SPDX-License-Identifier: MIT
// Define the version of Solidity that will be used to compile this contract
pragma solidity ^0.8.0;

// Import ERC721 standard from the OpenZeppelin contracts library
// Notice that OpenZeppelin contracts are widely audited and used by the community
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// Contract MyNFT inherits from ERC721
contract MyNFT is ERC721 {
    // Variable to keep track of token Id
    uint public nextTokenId;

    // Contract constructor calls the ERC721 constructor to set the name and symbol of our NFT
    constructor() ERC721("MyNFT", "MNFT") {}

    // A public function that allows us to mint new tokens
    function mint(address to) public {
        // We increment the token id for each new token
        nextTokenId++;
        // The _mint function is internal to ERC721 and handles the details of creating the new token
        _mint(to, nextTokenId);
    }
}
