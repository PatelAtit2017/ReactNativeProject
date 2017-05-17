import React from 'react'
import {View, TouchableOpacity,Text} from 'react-native'
import {Actions} from 'react-native-router-flux'
import styles from './styles'
import { connect } from 'react-redux'

class Viewtask extends React.Component {

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
                <Text style = {[styles.text2Style]}>View task UI yet to be implemented</Text>
        </View>
      )
    }


}
const mapStateToProps = (state) => {
  return{

  }
}
export default connect(mapStateToProps, null)(Viewtask)
