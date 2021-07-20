pragma solidity 0.5.0;

import "./ERC721Full.sol";

contract Color is ERC721Full {
  string[] public colors;
  mapping(string => bool) _colorExists;

  constructor() ERC721Full("Color", "COLOR") public {
  }

  // E.G. color = "#FFFFFF"
  function mint(string memory _color) public { // Have to restrict access
    require(!_colorExists[_color]); // Anytime it is evaluated false than the function does not run and throws transaction exception 
    uint _id = colors.push(_color); // Adds to end of array and returns index
    _mint(msg.sender, _id); // Etherium address of the person calling the method
    _colorExists[_color] = true;
  }

}