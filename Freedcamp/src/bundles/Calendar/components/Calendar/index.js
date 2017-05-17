import React from 'react'
import {View, TouchableOpacity,Text} from 'react-native'
import {Actions} from 'react-native-router-flux'
import styles from './styles'
import { connect } from 'react-redux'

class Calendar extends React.Component {

    constructor(props){
      super(props)

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
    calendarMenuCliked(){
      Actions.viewtask();
    }
    render(){
      return (
        <View style={[styles.container]}>
        <View style={[styles.btnContainer]}>
            <TouchableOpacity style = {[styles.btn]}
                              onPress = {() => this.calendarMenuCliked()}>
                <Text style = {[styles.text2Style]}>View Task</Text>
            </TouchableOpacity>
        </View>
        </View>
      )
    }


}
const mapStateToProps = (state) => {
  return{

  }
}
export default connect(mapStateToProps, null)(Calendar)
