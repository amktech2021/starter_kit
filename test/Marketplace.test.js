const Marketplace = artifacts.require('./Marketplace.sol') // import the contract

contract('Marketplace', (accounts) => {
    let Marketplace
    before(async () => {
        Marketplace = await Marketplace.deployed()
    })

    describe('deployment', async () => {
        it('deploys successfully', async () => {
            const address = await Marketplace.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })
    })
    it('has a name', async () => {
        const name = await Marketplace.name()
        assert.equal(name, 'Dapp University Marketplace')
    })
})