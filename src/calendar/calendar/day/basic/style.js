import { StyleSheet, Platform } from 'react-native';
import * as defaultStyle from '../../../style';

const STYLESHEET_ID = 'stylesheet.day.basic';

export default function styleConstructor(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    base: {
      width: appStyle.calendarWidth / 7,
      height: appStyle.calendarWidth / 7,
      // alignItems: 'center',
      // backgroundColor: 'chocolate',
      // justifyContent: 'center',
      // borderWidth: 1,
      borderRightWidth: 0.5,
      borderColor: 'gray',
    },
    borderLeft: {
      borderLeftWidth: 0.5,
      borderLeftColor: 'gray'
    },
    noRightBorder: {
      borderRightWidth: 0,
    },
    blockStyle: {
      margin: 0,
      borderWidth: 2,
      borderColor: '#F88881',
      backgroundColor: '#FEC4C0',
    },
    appointCircleContainer3: {
      position: 'absolute',
      bottom: 2,
      left: 2,
      right: 2,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    appointCircleContainer: {
      position: 'absolute',
      bottom: 2,
      left: 2,
      right: 2,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    appointCircle3: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: '#fcfd03',
      borderWidth: 0.5,
      borderColor: appStyle.dayTextColor
    },
    appointCircle2: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: '#fcfd03',
      borderWidth: 0.5,
      borderColor: appStyle.dayTextColor,
      marginHorizontal: 2
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
