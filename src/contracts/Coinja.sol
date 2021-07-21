pragma solidity 0.5.0;

import "./ERC721Full.sol";

contract Coinja is ERC721Full {
  uint public nextTokenId;

  constructor() ERC721Full("Coinja", "STAR") public {
  }

  // E.G. color = "#FFFFFF"
  function mint() public { // Have to restrict access 
    _mint(msg.sender, nextTokenId); // Etherium address of the person calling the method
    nextTokenId++;
  }

}