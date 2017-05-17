import React from 'react'
import {View, TouchableOpacity,Text} from 'react-native'
import {Actions} from 'react-native-router-flux'
import styles from './styles'
import { connect } from 'react-redux'

class Mytask extends React.Component {

    constructor(props){
      super(props)

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
    myTaskMenuClicked(index){
      switch (index) {
        case '1':
         Actions.viewtask();
          break;
        case '2':
        Actions.viewtask();
          break;
        default:

      }
    }
    render(){
      return (
        <View style={[styles.container]}>
        <View style={[styles.btnContainer]}>
            <TouchableOpacity style = {[styles.btn]}
                              onPress = {() => this.myTaskMenuClicked('1')}>
                <Text style = {[styles.text2Style]}>View Task</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.btn]}
                              onPress = {() => this.myTaskMenuClicked('2')}>
                <Text style = {[styles.text2Style]}>Edit Task</Text>
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
export default connect(mapStateToProps, null)(Mytask)
