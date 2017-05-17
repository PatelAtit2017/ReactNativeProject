import React, { Component} from 'react'
import Addtask from '@Addtask/components/Addtask'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import { bindActionCreators } from 'redux'

class AddtaskContainer extends Component {

  render() {
    return (
      <Addtask  {...this.props} obj={this}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddtaskContainer)
