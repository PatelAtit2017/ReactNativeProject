/* @flow */
import React from 'react'
import {Scene, Modal, Actions} from 'react-native-router-flux'
import {HomeContainer} from '@Home/containers'
import {Screen2Container} from '@Screen2/containers'

export default Actions.create(
  <Scene key="root">
    <Scene key="modal" component={Modal} >
      <Scene key="Home" component={HomeContainer} title="" hideNavBar />
      <Scene key="Screen2" component={Screen2Container} title="" hideNavBar />

    </Scene>
  </Scene>
)
