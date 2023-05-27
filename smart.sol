// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract ZebbiDefi {
    string public constant name = "ZebbiDefi";
    string public constant symbol = "ZEB";
    uint8 public constant decimals = 18;
    uint256 public totalSupply = 42069420 * 10 ** decimals;
    
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;
    
    uint256 public constant sellTax = 2;
    uint256 public constant buyTax = 4;
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    
    constructor() {
        balanceOf[msg.sender] = totalSupply;
        emit Transfer(address(0), msg.sender, totalSupply);
    }
    
    function _transfer(address from, address to, uint256 value) internal {
        require(from != address(0), "Transfer from the zero address");
        require(to != address(0), "Transfer to the zero address");
        require(value > 0, "Transfer amount must be greater than zero");
        
        uint256 sellAmount = 0;
        uint256 buyAmount = 0;
        
        if(from == address(this)){
            buyAmount = value * buyTax / 100;
            balanceOf[to] += (value - buyAmount);
        } else {
            sellAmount = value * sellTax / 100;
            balanceOf[from] -= (value + sellAmount);
            balanceOf[address(this)] += sellAmount;
            buyAmount = value * buyTax / 100;
            balanceOf[to] += (value - sellAmount - buyAmount);
        }
        
        emit Transfer(from, address(this), sellAmount);
        emit Transfer(from, to, value - sellAmount - buyAmount);
        emit Transfer(address(this), to, buyAmount);
    }
    
    function transfer(address to, uint256 value) public returns (bool success) {
        _transfer(msg.sender, to, value);
        return true;
    }
    
    function transferFrom(address from, address to, uint256 value) public returns (bool success) {
        require(value <= allowance[from][msg.sender], "Insufficient allowance");
        allowance[from][msg.sender] -= value;
        _transfer(from, to, value);
        return true;
    }
    
    function approve(address spender, uint256 value) public returns (bool success) {
        allowance[msg.sender][spender] = value;
        emit Approval(msg.sender, spender, value);
        return true;
    }
    
}

