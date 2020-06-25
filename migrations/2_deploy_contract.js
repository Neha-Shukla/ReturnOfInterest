const ROI = artifacts.require("ReturnOnInterest");

module.exports = function(deployer) {
  deployer.deploy(ROI);
};