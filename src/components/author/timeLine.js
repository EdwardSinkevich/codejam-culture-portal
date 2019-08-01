import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import id from 'react-id-generator';
import 'react-vertical-timeline-component/style.min.css';
import PropTypes from 'prop-types';

class VerticalTimelines extends React.Component {
  render() {
    const { timelineData } = this.props;
    const TimeLineItems = timelineData.map(timeLineItem => (
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

VerticalTimelines.propTypes = {
  timelineData: PropTypes.array,
};

VerticalTimelines.defaultProps = {
  timelineData: [],
};

export default VerticalTimelines;
