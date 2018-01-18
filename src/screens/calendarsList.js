import React, {Component} from 'react';

import { CalendarList } from './../calendar';

export default class CalendarsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CalendarList
        hideExtraDays={true}
        current={'2016-05-16'} 
        pastScrollRange={24} 
        futureScrollRange={24}
        scrollEnabled={false}
      />
    );
  }
}
