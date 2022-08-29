const myTokenERC20 = artifacts.require("myTokenERC20");

module.exports = function(deployer) {
  deployer.deploy(myTokenERC20,"STHCOIN","STH",8,500); //si el contructor del contrato tiene args de entrada: deployer.deploy(Hello,'arg1', ..)
};
