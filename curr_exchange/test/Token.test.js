import { tokens, EVM_REVERT } from './helpers'
const Token = artifacts.require('./Token')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Token', (accounts)=>{
  
  const name = 'Pratyush'
  const symbol = 'Symbol'
  const decimal = '18'
  const totalSupply = tokens(1000000).toString()
  let token
  beforeEach(async()=>{
    token = await Token.new();

  })
  describe('deployment', ()=> {
    it('tracks the name',async ()=> {
      //Fetch the token from the blockchain
      // const token = await Token.new()
      //read the name
      const result = await token.name()
      //check token name is Pratyush
      result.should.equal(name)
    })

    it('tracks the symbol', async ()=> {
      
      const result = await token.symbol()
      result.should.equal(symbol)
    })
    // it('tracks the decimal', async()=>{
    //   const result = await token.decimal()
    //   result.toString().should.equal(decimal)
    // })
    it('tracks the totalSupply', async()=>{
      const result = await token.totalSupply()
      result.toString().should.equal(totalSupply)
    })
    it('assigns the total Supply to the deployer', async()=> {
      const result = await token.balanceOf(accounts[0])
      result.toString().should.equal(totalSupply)
    })
  })
})
