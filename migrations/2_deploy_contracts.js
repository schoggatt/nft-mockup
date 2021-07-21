const Coinja = artifacts.require("Coinja"); // Puts coinja on the blockchain

module.exports = function(deployer) {
  deployer.deploy(Coinja);
};