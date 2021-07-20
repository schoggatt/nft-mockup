const Color = artifacts.require("Color"); // Puts color on the blockchain

module.exports = function(deployer) {
  deployer.deploy(Color);
};