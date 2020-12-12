import React from 'react';
import Calendar from './calendar.jsx';


class CalendarModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    let checkInDateMomentObj = this.props.checkInDateMomentObj;
    let checkOutDateMomentObj = this.props.checkOutDateMomentObj;

    return (
      <div className ='CalendarModal-Container'>
        <div className ='CalendarModal-Top'>
          <div className ='CalendarModal-TopLeft'>
            <h2 className='CalendarModal-SelectDate'>Select dates</h2>
            <div className ='CalendarModal-MinimumStay'>
              {checkInDateMomentObj && checkOutDateMomentObj ? `${checkInDateMomentObj.format('ll')} - ${checkOutDateMomentObj.format('ll')}` : `Minimum stay: ${this.props.minimum_stay} nights`}
            </div>
          </div>
          <div className ='CalendarModal-TopRight'>
            <div className ='CalendarModal-CheckIn'>
              <div className ='CalendarModal-CheckTitle'>CHECK-IN</div>
              <div className ='CalendarModal-AddDate'>{checkInDateMomentObj ? checkInDateMomentObj.format('L') : 'Add date'}</div>
            </div>
            <div className ='CalendarModal-CheckOut'>
              <div className ='CalendarModal-CheckTitle'>CHECKOUT</div>
              <div className ='CalendarModal-AddDate'>{checkOutDateMomentObj ? checkOutDateMomentObj.format('L') : 'Add date'}</div>
            </div>
          </div>
        </div>
        <div className ='CalendarModal-Bottom'>
          <Calendar minimum_stay={this.props.minimum_stay} booked_date={this.props.booked_date} getCheckInDate={this.props.getCheckInDate} getCheckOutDate={this.props.getCheckOutDate} close={this.props.close} close={this.props.close} clearDate={this.props.clearDate}/>
        </div>
      </div>
    );
  }
}

export default CalendarModal;