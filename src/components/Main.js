import React, { Component } from 'react'
import dai from '../dai.png'

class Main extends Component {

  render() {
    return (
      <div id="content" className="mt-3">

      <h1 className = "text-center"> Blockchain DeFi App </h1>
      <h3 className = "text-center"> (Decentrelized Finance Application) </h3>

        <table className="table table-borderless text-muted text-center">
          <thead>
            <tr>
              <th scope="col">Staking Balance</th>
              <th scope="col">Reward Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} mDAI</td>
              <td>{window.web3.utils.fromWei(this.props.dappTokenBalance, 'Ether')} DAPP</td>
            </tr>
          </tbody>
        </table>

        <div className="card mb-4" >

          <div className="card-body">

            <form className="mb-3" onSubmit={(event) => {
                event.preventDefault()
                let amount
                amount = this.input.value.toString()
                amount = window.web3.utils.toWei(amount, 'Ether')
                this.props.stakeTokens(amount)
              }}>
              <div>
                <label className="float-left"><b>Stake Tokens</b></label>
                <span className="float-right text-muted">
                  mDAI Balance: {window.web3.utils.fromWei(this.props.daiTokenBalance, 'Ether')}
                </span>
              </div>
              <div className="input-group mb-4">
                <input
                  type="text"
                  ref={(input) => { this.input = input }}
                  className="form-control form-control-lg"
                  placeholder="0"
                  required />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <img src={dai} height='32' alt=""/>
                    &nbsp;&nbsp;&nbsp; mDAI
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block btn-lg">STAKE!</button>
            </form>
            <button
              type="submit"
              className="btn btn-link btn-block btn-sm"
              onClick={(event) => {
                event.preventDefault()
                this.props.unstakeTokens()
              }}>
                UN-STAKE...
              </button>
          </div>
        </div>

        <div id="about" className = "mt-3"> 
          <p className="text-center"> This app is more like a DIGITAL BANK where you can earn interest, basically you deposit your cryptocurrency(mDAI) into the app and while its deposited, you actually earn different cryptocurrency tokens(DAPP).</p>
          <p className="text-center"> I've set the reward amount = 10% of staking deposit.</p>
          <table className="table table-borderless text-muted text-center">
          <tbody>
            <tr>
              <th scope="col">1 ETH = 483 $</th>
              <th scope="col">1 mDAI = 1 $</th>
              <th scope="col">DAPP = my own token</th>
            </tr>
            </tbody>
          </table>
        </div>


      </div>
    );
  }
}

export default Main;
