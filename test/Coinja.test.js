const { assert } = require('chai')
const XMLHttpRequest = require('XMLHttpRequest').XMLHttpRequest

function request_data(tokenId)
{
    var xmlhttp = new XMLHttpRequest();
    var url = 'http://localhost:3000/' + tokenId
    console.log("URL: " + url)

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
            const totalSupply = await contract.totalSupply()
            assert.equal(totalSupply, 1)
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

            const totalSupply = await contract.totalSupply()
            assert.equal(4, totalSupply)
        }) 
    })

    describe('Server Connectivity', async() => {

        it('Print API Data.', async() => {
            const result = await contract.mint()
            const event = result.logs[0].args
            const callReturn = request_data(event.tokenId.toNumber())
            console.log("API Return: " + callReturn)
            assert.equal(event.tokenId.toNumber(), 4)
            assert.notEqual(callReturn, '')
        }) 
    })
})