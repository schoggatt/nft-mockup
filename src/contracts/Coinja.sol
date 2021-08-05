pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Coinja is ERC721 {
  uint256 public _tokenIds;

  constructor() ERC721("Coinja", "STAR") public {
    _setBaseURI("genitalwarts://");
  }

  function mint(string memory metadataURI) public returns (uint256){ // Have to restrict access 
    // Require a unique ID
    _tokenIds++;
    _mint(msg.sender, _tokenIds); // Etherium address of the person calling the method
    _setTokenURI(_tokenIds, metadataURI);
    return _tokenIds;
  }

}