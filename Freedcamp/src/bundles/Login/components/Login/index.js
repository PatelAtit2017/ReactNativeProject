import React from 'react'
import {View, TouchableOpacity,Text,TextInput,Alert} from 'react-native'
import {Actions} from 'react-native-router-flux'
import styles from './styles'
import { connect } from 'react-redux'

class Login extends React.Component {

    constructor(props){
      super(props)
      this.state = {
            email : '',
            password : ''
      }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
    validateEmails(){
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.state.email);
    }
    loginClicked(){
      if(this.state.email.length==0 || this.state.password==0){
        Alert.alert('Message','Email and Password are mandatory. Please try again !', [{ text: 'OK', onPress: ()=> {} }]);
      }
      else if (this.validateEmails()==false) {
        Alert.alert('Message','Please enter a valid email id and try again !', [{ text: 'OK', onPress: ()=> {} }]);
      }
       else{
         this.setState({email:'',password:''});
         Actions.modal();
       }
    }
    render(){
      return (
        <View style={[styles.container]}>
        <View style={[styles.btnContainer]}>
        <TextInput
          placeholder={'email'}
           style={[styles.inputTextStyle]}
           onChangeText={(email) => this.setState({email})}
           value={this.state.email}
         />
         <TextInput
            placeholder={'password'}
            style={[styles.inputTextStyle]}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            secureTextEntry={true}
          />
          <TouchableOpacity style = {[styles.btn]}
                            onPress = {() => this.loginClicked()}>
              <Text style = {[styles.text2Style]}>Login</Text>
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
export default connect(mapStateToProps, null)(Login)
