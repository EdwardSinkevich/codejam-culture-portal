import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import id from 'react-id-generator';
import 'react-vertical-timeline-component/style.min.css';

class VerticalTimelines extends React.Component {
  render() {
    const TimeLineItems = this.props.timelineData.map(timeLineItem => (
      <VerticalTimelineElement
        key={id()}
        date={timeLineItem.date}
      >
        <p>{timeLineItem.text}</p>
      </VerticalTimelineElement>
    ));
    const result = <VerticalTimeline>{TimeLineItems}</VerticalTimeline>;
    return result;
  }
}

export default VerticalTimelines;
