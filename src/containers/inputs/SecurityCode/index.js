import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as SetCardData from '../../../actions/Payment'

class CardSecurityCodeInput extends Component {
  render() {
    let checkErrors = ((this.props.state.status == 'ERROR') ? 'check-errors' : 'check-errors check-errors--unvisible')
    return (
      <div className='form-group '>
        <div className={checkErrors}>
          <span className='check-errors__span'>cannot be empty</span>
        </div>
        <input
          type='text'
          placeholder=''
          onChange={this.props.action.typingCardSecureCode}
          value={this.props.state.value}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    state: (state.payment.cardSecurityCode)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(SetCardData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardSecurityCodeInput)