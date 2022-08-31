const MyTokenERC20 = artifacts.require("MyTokenERC20");

module.exports = function(deployer) {
  deployer.deploy(MyTokenERC20,"SERCOIN","STH",2,666,{from:'0xbDE72108B5018A345F0F1e38cf2a3f0577Eb98Ac'}); 
};
