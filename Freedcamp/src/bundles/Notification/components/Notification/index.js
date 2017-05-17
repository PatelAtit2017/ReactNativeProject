import React from 'react'
import {View, TouchableOpacity,Text} from 'react-native'
import {Actions} from 'react-native-router-flux'
import styles from './styles'
import { connect } from 'react-redux'

class Notification extends React.Component {

    constructor(props){
      super(props)

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
    
    render(){
      return (
        <View style={[styles.container]}>
                <Text style = {[styles.text2Style]}>Notification Screen Yet to be implemented</Text>
        </View>
      )
    }


}
const mapStateToProps = (state) => {
  return{

  }
}
export default connect(mapStateToProps, null)(Notification)
