
import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'grey',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  btn: {
      height:35,
      backgroundColor: '#F57B20',
      alignSelf:'center',
      width:200,
      marginTop:10,
  },
  inputTextStyle: {
      height:35,
      backgroundColor: '#FFFFFF',
      alignSelf:'center',
      width:300,
      marginTop:10,
  },
  btnContainer: {
      justifyContent:'center',
      alignItems:'center',
      width: Dimensions.get('window').width
  },
  text1Style:{
     alignSelf: 'center',
     color: '#fff',
     paddingTop: 10,
     paddingBottom:10
   },
  text2Style:{
    alignSelf: 'center',
    color: '#fff',
    paddingTop: 10
  }
})

export default styles
