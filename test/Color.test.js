const { assert } = require('chai')

const Color = artifacts.require('./Color.sol') 

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('Color', (accounts) => {
    let contract

    before(async () => {
        contract = await Color.deployed()
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
            assert.equal(name, 'Color')
        })

        it('Has a symbol.', async () => {
            const symbol = await contract.symbol()
            assert.equal(symbol, 'COLOR')
        })
    })

    describe('Minting', async() => {

        it('Creates a new token.', async() => {
            // SUCCESS

            const result = await contract.mint('#EC058E')
            const totalSupply = await contract.totalSupply()
            assert.equal(totalSupply, 1)
            const event = result.logs[0].args
            assert.equal(event.tokenId.toNumber(), 1, 'ID is correct.')
            assert.equal(event.to, accounts[0], 'Account is correct.')

            // FAILURE

            await contract.mint('#EC058E').should.be.rejected;
        }) 
    })

    describe('Indexing', async() => {

        it('List colors.', async() => {
            await contract.mint('#FFFFFF')
            await contract.mint('#000000')
            await contract.mint('#5386E4')

            const totalSupply = await contract.totalSupply()
            assert.equal(4, totalSupply)

            let color 
            let result = []
            for (var i = 1; i <= totalSupply; i++){
                color = await contract.colors(i - 1)
                result.push(color)
            }

            let expected = ['#EC058E', '#FFFFFF', '#000000','#5386E4']
            assert.equal(result.join(','), expected.join(','))
        }) 
    })
})