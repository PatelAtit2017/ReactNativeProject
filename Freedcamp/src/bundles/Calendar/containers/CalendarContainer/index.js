import React, { Component} from 'react'
import Calendar from '@Calendar/components/Calendar'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import { bindActionCreators } from 'redux'

class CalendarContainer extends Component {

  render() {
    return (
      <Calendar  {...this.props} obj={this}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer)
