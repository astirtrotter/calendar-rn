import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';

const STYLESHEET_ID = 'stylesheet.calendar.main';

export default function getStyle(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: appStyle.calendarBackground
    },
    week: {
      // marginTop: 7,
      // marginBottom: 7,
      flexDirection: 'row',
      // borderWidth: 0.5,
      // borderLeftWidth: 0,
      // borderRightWidth: 0,
      // borderColor: 'gray'
      // justifyContent: 'space-around',
      // backgroundColor: 'steelblue'
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}

