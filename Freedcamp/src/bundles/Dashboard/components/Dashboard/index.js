import React from 'react'
import {View, TouchableOpacity,Text} from 'react-native'
import {Actions} from 'react-native-router-flux'
import styles from './styles'
import { connect } from 'react-redux'

class Dashboard extends React.Component {

    constructor(props){
      super(props)

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
    dashboardMenuClicked(option){
      switch (option) {
        case '1':
         Actions.project();
          break;
        case '2':
        Actions.project();
          break;
        case '3':
        Actions.project();
          break;
        case '4':
        Actions.project();
          break;
        case '5':
          Actions.notification();
          break;
        default:

      }
    }
    render(){
      return (
        <View style={[styles.container]}>
        <View style={[styles.btnContainer]}>
            <TouchableOpacity style = {[styles.btn]}
                              onPress = {() => this.dashboardMenuClicked('1')}>
                <Text style = {[styles.text2Style]}>Project Task</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.btn]}
                              onPress = {() => this.dashboardMenuClicked('2')}>
                <Text style = {[styles.text2Style]}>Project Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.btn]}
                              onPress = {() => this.dashboardMenuClicked('3')}>
                <Text style = {[styles.text2Style]}>Create Project</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.btn]}
                              onPress = {() => this.dashboardMenuClicked('4')}>
                <Text style = {[styles.text2Style]}>Edit Project</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.btn]}
                              onPress = {() => this.dashboardMenuClicked('5')}>
                <Text style = {[styles.text2Style]}>Notification</Text>
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
export default connect(mapStateToProps, null)(Dashboard)
