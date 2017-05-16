import React from 'react'
import {StyleSheet} from 'react-native'
import {FONT_DAYTONA_BOLD} from '@theme/fonts'
import {DEFAULT_GREEN_COLOR,DEFAULT_APP_RED_COLOR,DEFAULT_WHITE_COLOR} from '@theme/colors'
import {getCorrectFontSizeForScreen} from  '@utils/multiResolution'
const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: '#FFF'
  },
  navBarTitleWhite: {
    fontSize: getCorrectFontSizeForScreen(18),
    color : DEFAULT_WHITE_COLOR,
  },
  navBarTitleBlack: {
    fontFamily: FONT_DAYTONA_BOLD,
    fontSize: 2,
    color: '#000',
  },
  defaultHeaderStyle: {
    backgroundColor: DEFAULT_APP_RED_COLOR,
    borderBottomColor: 'transparent',
    borderBottomWidth: 50
  }
})

export default styles;
