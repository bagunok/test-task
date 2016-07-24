import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as SetShippingData from '../../../actions/Shipping'
import * as SetBillingData from '../../../actions/Billing'

class AddressInput extends Component {
  render() {
    let checkErrors = ((this.props.state.status == 'ERROR') ? 'form-group__span--visible' : 'form-group__span--unvisible')
    let checkActionType = (this.props.page == 'billing' ? this.props.SetBillingData : this.props.SetShippingData)
    return (
      <div className='form-group'>
        <span className={checkErrors}>cannot be empty</span>
        <input
          type='text'
          placeholder='Street Address'
          onChange={checkActionType.typingAddress}
          value={this.props.state.value}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  if (state.validation.shippingPage == 'INVALID' && state.validation.billingPage == 'UNCHECKED') {
    return {
      state: (state.shipping.streetAddress)
    }
  } else if (state.validation.billingPage == 'INVALID' && state.validation.paymentPage == 'UNCHECKED') {
    return {
      state: (state.billing.streetAddress)
    }
  } else {
    return {
      state: state
    }
  } 
}

function mapDispatchToProps(dispatch) {
  return {
    SetShippingData: bindActionCreators(SetShippingData, dispatch),
    SetBillingData: bindActionCreators(SetBillingData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressInput)