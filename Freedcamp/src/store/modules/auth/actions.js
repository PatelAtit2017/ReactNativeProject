import AsyncStorage from '@platform/asyncStorage'
import Permissions from '@platform/store/permissions'
import {Actions} from 'react-native-router-flux'

// Constants
const LOGIN_USER = 'LOGIN_USER'

export function loginUser() {
  return { type: LOGIN_USER, receivedAt: Date.now() }
}
