import React from 'react'
import {View, TouchableOpacity,Text} from 'react-native'
import {Actions} from 'react-native-router-flux'
import styles from './styles'
import { connect } from 'react-redux'

class Home extends React.Component {

    constructor(props){
      super(props)

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
    buttonClicked(){
      Actions.Screen2();
    }
    render(){
      return (
        <View style={[styles.container]}>
        <Text style = {[styles.text1Style]}>Welcome to Hello World</Text>
        <View style={[styles.btnContainer]}>
            <TouchableOpacity style = {[styles.btn]}
                              onPress = {() => this.buttonClicked()}>
                <Text style = {[styles.text2Style]}>Hello</Text>
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
export default connect(mapStateToProps, null)(Home)
