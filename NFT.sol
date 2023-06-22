Sure, here's an example of a simple NFT contract, written in Solidity, and leveraging the ERC721 standard from OpenZeppelin. I'll comment each part to clarify its purpose:

```solidity
// SPDX-License-Identifier: MIT
// Define the version of Solidity that will be used to compile this contract
pragma solidity ^0.8.0;

// Import ERC721 standard from the OpenZeppelin contracts library
// OpenZeppelin contracts are widely audited and used by the community
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
```

This is the simplest form of an NFT contract. It only allows new tokens to be minted. In a real-world use case, you would probably want to include some sort of access control to restrict who can mint new tokens. Also, depending on your use case, you might want to add metadata to your tokens, which could be done by overriding the `_baseURI()` function from ERC721.

This contract assumes that the Solidity compiler version is 0.8.0 or higher, and that the OpenZeppelin contracts have been installed in your project. If not, you can install them using npm:

```bash
npm install @openzeppelin/contracts
```

The SPDX-License-Identifier: MIT at the top of the contract is a license identifier, which helps developers to know they can use this contract under the terms of the MIT license.
