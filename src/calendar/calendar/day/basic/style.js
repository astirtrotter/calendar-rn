import { StyleSheet, Platform } from 'react-native';
import * as defaultStyle from '../../../style';

const STYLESHEET_ID = 'stylesheet.day.basic';

export default function styleConstructor(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    base: {
      width: appStyle.calendarWidth / 7,
      height: appStyle.calendarWidth / 7,
      alignItems: 'center',
      // backgroundColor: 'chocolate',
      justifyContent: 'center',
      // borderWidth: 1,
      // borderRightWidth: 1,
      // borderColor: 'gray',
    },
    borderLeft: {
      borderLeftWidth: 1,
      borderLeftColor: 'gray'
    },
    blockStyle: {
      margin: 0,
      borderWidth: 2,
      borderColor: '#F88881',
      backgroundColor: '#FEC4C0',
    },
    text: {
      // marginTop: 4,
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: '300',
      color: appStyle.dayTextColor,
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    alignedText: {
      marginTop: Platform.OS === 'android' ? 4 : 6
    },
    todayText: {
      color: appStyle.todayTextColor
    },
    disabledText: {
      color: appStyle.textDisabledColor
    },
    smallAppoint: {
      width: (appStyle.calendarWidth - 200) / 7,
      height: (appStyle.calendarWidth - 200) / 7,
      borderRadius: (appStyle.calendarWidth - 200) / 14,
      backgroundColor: appStyle.appointColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    mediumAppoint: {
      width: (appStyle.calendarWidth - 100) / 7,
      height: (appStyle.calendarWidth - 100) / 7,
      borderRadius: (appStyle.calendarWidth - 100) / 14,
      backgroundColor: appStyle.appointColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bigAppoint: {
      width: appStyle.calendarWidth / 7,
      height: appStyle.calendarWidth / 7,
      borderRadius: appStyle.calendarWidth / 14,
      backgroundColor: appStyle.appointColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
