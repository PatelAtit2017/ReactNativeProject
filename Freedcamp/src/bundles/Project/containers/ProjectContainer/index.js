import React, { Component} from 'react'
import Project from '@Project/components/Project'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import { bindActionCreators } from 'redux'

class ProjectContainer extends Component {

  render() {
    return (
      <Project  {...this.props} obj={this}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer)
