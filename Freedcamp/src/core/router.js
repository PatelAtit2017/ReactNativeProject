import React from 'react'
import { connect } from 'react-redux'
import { Router } from 'react-native-router-flux'
import scenes from './scenes'


class FreedcampRouter extends React.Component{
  props: Props
  constructor(props){
    super(props)
  }

  componentDidMount(){
  }

  render(){
    return (
      <Router key={`launch`} scenes={scenes} />
    )
  }

  componentWillReceiveProps(nextProps){

  }
}


const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FreedcampRouter)
