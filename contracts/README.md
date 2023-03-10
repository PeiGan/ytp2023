# Contracts

## Introduction
The AuditPool.sol is the core contract which controls the pool created by the contracts which are audited.

Currently, the contract is only deployed on Ethereum Goerli testnet, at

```
0x7Bf16ee9588F10249652A9624fEa170d1D13C8F5
```

Feel free to create your own instance!

AuditingContractBase.sol and AuditingContractInterface.sol are interfaces for contracts which are audited. You can learn more about this below.

If there's anything unclear, just head straight into the code. Should be easy to understand. There's also examples of audited contract and attacker's contract inside the examples folder.


## Usage

### For audited contracts

There are some functions you need to know:

```solidity
function initiatePool(address audited_contract, uint duration, address receiver) public payable;
```

This function initiate a pool for your contract auditing.

Parameters:
* address audited_contract: your contract's address.
* uint duration: the duration time (in second) of your contract auditing. When it reaches the duration and your contract isn't hacked, people who invest in your pool will be able to claim their reward.
* address receiver: if the portion in your testContract function isn't 10000, then this address will receive the ether left when your contract is hacked.

Also you will have to attach some ether when calling this function as your initial amount of this pool.

We recommend you to call this function (of the aforementioned address of AuditPool) in the constructor of your contract.

Then, you have to implement this function in your contract (which is inside the AuditingContractInterface.sol):

```solidity
function testContract(address receiver) override external;
```

Write your own unit tests in this function. When auditors think they have successfully cracked your contract, they will call this function. In this function you should check some important variables to see if they are working  properly.

If the tests in this function failed, your contract should call this function (of the aforementioned address of AuditPool):

```solidity
function contractHacked(address receiver, uint portion) public;
```

Parameters:
* address receiver: the address of the one who cracked the contract. This should be msg.sender in your contract.
* uint portion: how much portion of the pool this bug deserves. The hacker will get (portion / 10000) of the pool.

This function will check if msg.sender is the same as audited_contract in the *initiatePool* call. Then, the pool is ended and prizes are distributed.



### For auditors (hackers)

Please read through the "For contract auditing" section.

Find a way to fail the unit tests inside *testContract*, and make them trigger *contractHacked* call in order to get your reward. Try your best!

### For participants

You can use our website to interact with the smart contract, and this would be enough.

If you're not satisfied, state variables are all set public, and you can use web3.js or other things to get them. Also, the two functions ( *addEtherIntoPool* and *claimReward* ) are the ones you're interacting with.