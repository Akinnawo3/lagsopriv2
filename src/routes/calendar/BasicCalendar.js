/**
 * Basic Calendar
 */
import React, { Component } from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import events from './events'
import moment from "moment";

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

const allViews = Object.keys(Views).map(k => Views[k])

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
})

const Localizer = momentLocalizer(moment);

class BasicCalendar extends Component {
	
  render() {
    return (
      <div className="calendar-wrapper">
        <PageTitleBar title={<IntlMessages id="sidebar.basic" />} match={this.props.match} />
        <RctCollapsibleCard
          heading="Basic Calendar"
        >
          <Calendar
			 	localizer={Localizer}
				events={events}
				views={allViews}
				step={60}
				showMultiDayTimes
				defaultDate={new Date(2015, 3, 1)}
				components={{
					timeSlotWrapper: ColoredDateCellWrapper,
				}}
				
			/>
        </RctCollapsibleCard>
      </div>
    );
  }
}

export default BasicCalendar;