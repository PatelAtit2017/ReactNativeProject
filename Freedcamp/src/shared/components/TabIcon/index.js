/* @flow */

import React from 'react'
import { connect } from 'react-redux'
import { Image, View, Text,Dimensions } from 'react-native'
import {DEFAULT_BACKGROUND_COLOR, DEFAULT_GREEN_COLOR} from '@theme/colors'

type Props = {
  styles : Object,
  userType: integer,
}
class TabIcon extends React.Component {

  customIcons(icon,title,textcolor)
  {
    return (
      <View style={{height: 50,position:'absolute',alignItems:'center',width: Dimensions.get('window').width/5}}>
        <Image source={icon} style={{width:30,height:30}}/>
        <Text style={{color:textcolor,position:'absolute',marginTop:30,fontSize:12}}>{title}</Text>
      </View>
    )
  }


render(){
  var color = this.props.selected ? DEFAULT_GREEN_COLOR : 'black'
  var active = this.props.selected ? '-active' : ''
  var icon = this.props.sceneKey;

  var title='Dashboard';

  switch(icon){
    case 'dashboard':{
      title = 'Dashboard';
      icon = this.props.selected ? require('@images/selected.jpeg') : require('@images/unselected.jpeg');
    }
    break;
    case 'addtask':{
      title = 'Add task';
      icon = this.props.selected ? require('@images/selected.jpeg') : require('@images/unselected.jpeg');
    }
    break;
    case 'mytask':{
      title = 'My task';
      icon = this.props.selected ? require('@images/selected.jpeg') : require('@images/unselected.jpeg');
    }
    break;
    case 'calendar':{
      title = 'Calendar';
      icon = this.props.selected ? require('@images/selected.jpeg') :require('@images/unselected.jpeg');
    }
    break;
    case 'settings':{
      title = 'Settings';
      icon = this.props.selected ? require('@images/selected.jpeg') : require('@images/unselected.jpeg');
    }
    break;
  }

    return this.customIcons(icon,title,color)

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

export default connect(mapStateToProps,mapDispatchToProps)(TabIcon)
