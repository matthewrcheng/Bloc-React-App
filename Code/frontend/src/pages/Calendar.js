import React from 'react';
import Scheduler from 'devextreme-react/scheduler';
import { calendarData } from '../calendarData.js';
import notify from 'devextreme/ui/notify';

const currentDate = new Date();
const views = ['day', 'week', 'month'];

class Calendar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          allowAdding: true,
          allowDeleting: true,
          allowUpdating: true,
        };
        this.onAllowAddingChanged = this.onAllowAddingChanged.bind(this);
        this.onAllowDeletingChanged = this.onAllowDeletingChanged.bind(this);
        this.onAllowUpdatingChanged = this.onAllowUpdatingChanged.bind(this);
        this.showAddedToast = this.showAddedToast.bind(this);
        this.showUpdatedToast = this.showUpdatedToast.bind(this);
        this.showDeletedToast = this.showDeletedToast.bind(this);
      }
    render() {
    return (
      <div>
          <Scheduler
            timeZone="America/New_York"
            dataSource={calendarData}
            views={views}
            defaultCurrentView="week"
            defaultCurrentDate={currentDate}
            height={800}
            startDayHour={7} 
          />
          
        <html>
          <head>
            <title>Calendar</title>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
            <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/21.2.6/css/dx.common.css" />
            <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/21.2.6/css/dx.light.css" />
          </head>

          <body className="dx-viewport">
              <div className="demo-container">
              <div id="weeklycalendar"></div>
              </div>
          </body>
        </html>
      </div>
        

        


        
    );
}

  onAllowAddingChanged(e) {
    this.setState({ allowAdding: e.value });
  }

  onAllowDeletingChanged(e) {
    this.setState({ allowDeleting: e.value });
  }

  onAllowUpdatingChanged(e) {
    this.setState({ allowUpdating: e.value });
  }

  showToast(event, value, type) {
    notify(`${event} "${value}" task`, type, 800);
  }

  showAddedToast(e) {
    this.showToast('Added', e.appointmentData.text, 'success');
  }

  showUpdatedToast(e) {
    this.showToast('Updated', e.appointmentData.text, 'info');
  }

  showDeletedToast(e) {
    this.showToast('Deleted', e.appointmentData.text, 'warning');
  }

}
export default Calendar;