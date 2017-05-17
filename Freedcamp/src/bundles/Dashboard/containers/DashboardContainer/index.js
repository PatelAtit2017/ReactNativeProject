import React, { Component} from 'react'
import Dashboard from '@Dashboard/components/Dashboard'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import { bindActionCreators } from 'redux'

class DashboardContainer extends Component {

  render() {
    return (
      <Dashboard  {...this.props} obj={this}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
