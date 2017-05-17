import React, { Component} from 'react'
import Mytask from '@Mytask/components/Mytask'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import { bindActionCreators } from 'redux'

class MytaskContainer extends Component {

  render() {
    return (
      <Mytask  {...this.props} obj={this}/>
    )
  }

}

const mapStateToProps = (state) => {
  return{
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MytaskContainer)
