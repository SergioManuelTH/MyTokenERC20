const MyTokenERC20 = artifacts.require("MyTokenERC20");

contract("Testing myTokenERC20", (accounts) => {
    
  [alice, bob, mary] = accounts;
  console.log('Alice address: ', alice);
  console.log('Bob address: ', bob);
  console.log('Mary address: ', mary);

  
    context('Constructor', async () => {
        it('Testing name=BBCOIN', async () => {
            const myTokenInstance = await MyTokenERC20.deployed();
            const name = await myTokenInstance.name();
            expect(name).to.equal('BBCOIN');
        });
        it('Testing symbol=BB', async () => {
            const myTokenInstance = await MyTokenERC20.deployed();
            const symbol = await myTokenInstance.symbol();
            expect(symbol).to.equal('BB');
        });
        it('Testing decimals=2', async () => {
            const myTokenInstance = await MyTokenERC20.deployed();
            const decimals = await myTokenInstance.decimals();
            assert.equal(decimals.toNumber(),2); 
        });
        it('Testing totalSupply=66600', async () => {
            const myTokenInstance = await MyTokenERC20.deployed();
            const totalSupply = await myTokenInstance.totalSupply();
            assert.equal(totalSupply.toNumber(),66600); 
        });
        it('Testing balanceOf(Alice)=66600', async () => {
            const myTokenInstance = await MyTokenERC20.deployed();
            const balanceOf = await myTokenInstance.balanceOf(alice);
            assert.equal(balanceOf.toString(),'66600'); 
        });
    });

    context('Execution', async () => {
        it('Testing TRANSFER from Alice to Bob', async () => {
            const myTokenInstance = await MyTokenERC20.deployed();
            await myTokenInstance.transfer(bob,22200, {from:alice});
            const balanceOfBob = await myTokenInstance.balanceOf(bob);
            const balanceOfAlice = await myTokenInstance.balanceOf(alice);
            console.log('Bob balance:', balanceOfBob.toNumber());
            console.log('Alice balance:', balanceOfAlice.toNumber());
            assert.equal(balanceOfBob.toNumber(),22200); 
            assert.equal(balanceOfAlice.toNumber(),44400);
        });
        
        it('Testing TRANSFER from Bob to Alice with no funds', async () => {
          try {
            const myTokenInstance = await MyTokenERC20.deployed();
            const result = await myTokenInstance.transfer(alice,999900,{from:bob});
            
          } catch (error) {
            console.log(error);
            //expect(error).to.equal('Error: execution reverted: Insuficient balance from owner');
          }
        })

    });
    

})
