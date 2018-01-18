import React, {Component} from 'react';
import {Dimensions, View} from 'react-native';
import { CalendarList } from './../calendar';

const { width } = Dimensions.get('window');
const calendarWidth = width - 30;
export default class CalendarsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const current = new Date();
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ width: calendarWidth }}>
          <CalendarList
            hideExtraDays={true}
            current={current.toString()}
            pastScrollRange={3}
            futureScrollRange={3}
            scrollEnabled={false}
            hideArrows={false}
          />
        </View>
      </View>
    );
  }
}
