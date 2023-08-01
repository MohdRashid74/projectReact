import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {count: 2000}

  updatevalue = event => {
    this.setState(prevState => {
      count: prevState.count + 50
    })
  }

  render() {
    const {denominationsList} = this.props
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="container1">
          <div className="container2">
            <p className="heading">S</p>
          </div>
          <h1 className="heading2">Sarah Williams</h1>
        </div>
        <div className="container3">
          <p className="heading3">Your Balance</p>
          <div className="container4">
            <p className="pargraph">{count}</p>
            <p className="pargraph2">In Rupees</p>
          </div>
        </div>
        <div className="container5">
          <p className="pargraph4">Withdraw</p>
          <p className="heading4">CHOOSE SUM (IN RUPEES)</p>
        </div>
        <div className="container6">
          <ul className="container7">
            {denominationsList.map(eachitem => (
              <DenominationItem
                key={eachitem.id}
                details={eachitem.value}
                onClick={this.updatevalue}
                value={count}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
