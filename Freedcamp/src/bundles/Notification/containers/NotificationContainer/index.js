import React, { Component} from 'react'
import Notification from '@Notification/components/Notification'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import { bindActionCreators } from 'redux'

class NotificationContainer extends Component {

  render() {
    return (
      <Notification  {...this.props} obj={this}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer)
