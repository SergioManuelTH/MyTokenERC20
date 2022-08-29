//SPDX-License-Identifier: MIT
pragma solidity >=0.7.0;

contract myTokenERC20{
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    constructor(string memory n, string memory s, uint8 d, uint256 ts)payable{
        name=n;
        symbol=s;
        decimals=d;
        totalSupply= ts * (uint256(10)** decimals);
        balanceOf[msg.sender]=totalSupply;
    }  

    function transfer(address to, uint256 value) public returns(bool success){
        require(balanceOf[msg.sender] >= value, "Insuficient balance from owner");
        balanceOf[msg.sender] -= value;
        balanceOf[to] += value;
        emit Transfer(msg.sender,to,value);
        return true;
    }

    function approve(address spender, uint256 value) public returns (bool success){
        allowance[msg.sender][spender] = value;
        emit Approval(msg.sender, spender, value);
        return true;
    }

    function transferFrom(address from, address to, uint256 value) public returns (bool success){
        require(balanceOf[from] >= value, "Insuficient balance from address allowed");
        require(allowance[from][msg.sender]>= value);
        balanceOf[from] -= value;
        balanceOf[to] += value;
        allowance[from][msg.sender] -= value;
        emit Transfer(from, to, value);
        return true;
    }

}