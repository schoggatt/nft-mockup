const { assert } = require('chai')
const XMLHttpRequest = require('XMLHttpRequest').XMLHttpRequest

function request_data(url)
{
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    return xmlhttp.responseText
}

const Coinja = artifacts.require('./Coinja.sol') 

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('Coinja', (accounts) => {
    let contract

    before(async () => {
        contract = await Coinja.deployed()
    })

    describe('Deployment', async() => {
        it('Deploys successfully.', async () => {
            const address = contract.address
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, '0x0')
            assert.notEqual(address, undefined)
        })

        it('Has a name.', async () => {
            const name = await contract.name()
            assert.equal(name, 'Coinja')
        })

        it('Has a symbol.', async () => {
            const symbol = await contract.symbol()
            assert.equal(symbol, 'STAR')
        })
    })

    describe('Minting', async() => {

        it('Creates a new token.', async() => {
            const result = await contract.mint()
            const event = result.logs[0].args
            assert.equal(event.tokenId.toNumber(), 0, 'ID is correct.')
            assert.equal(event.to, accounts[0], 'Account is correct.')
        }) 
    })

    describe('Indexing', async() => {

        it('List Coinjas.', async() => {
            await contract.mint()
            await contract.mint()
            await contract.mint()

            const tokenURI = await contract.tokenURI(0)
            assert.equal(tokenURI, "http://localhost:3000/0")

            const totalSupply = await contract.totalSupply()
            assert.equal(4, totalSupply)
        }) 
    })

    describe('Server Connectivity', async() => {

        it('Print API Data for a NFT.', async() => {
            const result = await contract.mint()
            const event = result.logs[0].args

            const uri = await contract.tokenURI(4)
            const callReturn = request_data(uri)

            assert.equal(event.tokenId.toNumber(), 4)
            assert.notEqual(callReturn, '')
        }) 

        it('Print API Data for all NFTs.', async() => {
            const totalSupply = await contract.totalSupply()
            for(let i = 0; i < totalSupply; i++)
            {
                const uri = await contract.tokenURI(i)
                assert.equal(uri, "http://localhost:3000/" + i)
            }
        })
    })

    describe('Ownership', async() => {
        
        it('Check if the NFTs are owned.', async() => {
            const totalSupply = await contract.totalSupply()
            for(let i = 0; i < totalSupply; i++)
            {
                const owner = await contract.ownerOf(i)
                assert.notEqual(owner, '')
            }
        })

    })

    // describe('Burn', async() => {
        
    //     it('Check if NFTs can be burned.', async() => {
    //         const initialTotalSupply = await contract.totalSupply()
    //         console.log(initialTotalSupply)
    //         await contract.burn(0)
    //         await contract.burn(1)
    //         const totalSupply = await contract.totalSupply()
    //         console.log(totalSupply)
    //         assert.equal(totalSupply, initialTotalSupply) // Does not do anything need to look into better testing 
    //     })

    // })
})