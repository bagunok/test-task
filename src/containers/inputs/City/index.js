import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as SetShippingData from '../../../actions/Shipping'
import * as SetBillingData from '../../../actions/Billing'

class CityInput extends Component {
  render() {
    let checkErrors = ((this.props.state.status == 'ERROR') ? 'check-errors' : 'check-errors check-errors--unvisible')
    let checkActionType = (this.props.page == 'billing' ? this.props.SetBillingData : this.props.SetShippingData)
    return (
      <div className='form-group'>
        <div className={checkErrors}>
          <span className='check-errors__span'>cannot be empty</span>
        </div>
        <input
          type='text'
          placeholder='City'
          onChange={checkActionType.typingCity}
          value={this.props.state.value}
        />
        <div onClick={checkActionType.cityTargeting} className='city-targeting-btn'></div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  if (state.validation.shippingPage == 'INVALID' && state.validation.billingPage == 'UNCHECKED') {
    return {
      state: (state.shipping.city)
    }
  } else if (state.validation.billingPage == 'INVALID' && state.validation.paymentPage == 'UNCHECKED') {
    return {
      state: (state.billing.city)
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

export default connect(mapStateToProps, mapDispatchToProps)(CityInput)