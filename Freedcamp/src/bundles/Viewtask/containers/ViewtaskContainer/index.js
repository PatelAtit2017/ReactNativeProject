import React, { Component} from 'react'
import Viewtask from '@Viewtask/components/Viewtask'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import { bindActionCreators } from 'redux'

class ViewtaskContainer extends Component {

  render() {
    return (
      <Viewtask  {...this.props} obj={this}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewtaskContainer)
