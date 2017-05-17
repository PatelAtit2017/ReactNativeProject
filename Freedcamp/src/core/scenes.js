/* @flow */
import React from 'react'
import {Scene, Modal, Actions} from 'react-native-router-flux'
import {DashboardContainer} from '@Dashboard/containers'
import {MytaskContainer} from '@Mytask/containers'
import {AddtaskContainer} from '@Addtask/containers'
import {CalendarContainer} from '@Calendar/containers'
import {SettingsContainer} from '@Settings/containers'
import {ViewtaskContainer} from '@Viewtask/containers'
import {LoginContainer} from '@Login/containers'
import {NotificationContainer} from '@Notification/containers'
import {ProjectContainer} from '@Project/containers'
import {DEFAULT_WHITE_COLOR} from '@theme/colors'
import TabIcon from '@components/TabIcon'

export default Actions.create(
  <Scene key="root">
   <Scene key="Login"   component={LoginContainer} title="Login" hideNavBar />
      <Scene key="modal" component={Modal} >
        <Scene  key="myTabBar" backButtonImage={require('../shared/images/back.png')} tabs={true} tabBarStyle={{alignItems: 'center',justifyContent: 'center', alignSelf:'center',backgroundColor:DEFAULT_WHITE_COLOR}}>
              <Scene key="dashboard" tabIcon={TabIcon} icon={TabIcon} component={DashboardContainer} title="Dash Board" hideNavBar />
              <Scene key="mytask"  tabIcon={TabIcon} icon={TabIcon} component={MytaskContainer} title="My Task" hideNavBar />
              <Scene key="addtask" tabIcon={TabIcon} icon={TabIcon} component={AddtaskContainer} title="Add Task" hideNavBar />
              <Scene key="calendar"  tabIcon={TabIcon} icon={TabIcon} component={CalendarContainer} title="Calendar" hideNavBar />
              <Scene key="settings"  tabIcon={TabIcon} icon={TabIcon} component={SettingsContainer} title="Settings" hideNavBar />
        </Scene>
      </Scene>
      <Scene key="viewtask"   component={ViewtaskContainer} title="View Task"  hideNavBar={false}/>
      <Scene key="notification"   component={NotificationContainer} title="Notification"  hideNavBar={false}/>
      <Scene key="project"   component={ProjectContainer} title="Project"  hideNavBar={false}/>

  </Scene>

)
