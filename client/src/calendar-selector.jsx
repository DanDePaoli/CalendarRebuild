import React from 'react';
import styled from 'styled-components';
import Calendar from './calendar.jsx';

class CalendarSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    let checkInDateMomentObj = this.props.checkInDateMomentObj;
    let checkOutDateMomentObj = this.props.checkOutDateMomentObj;

    return (
      <div className='CalendarSelector-Container'>
        <div className='CalendarSelector-Top'>
          <div className='CalendarSelector-TopLeft'>
            <h1 className='CalendarSelector-SelectDate'>Select dates</h1>
            <div className='CalendarSelector-MinimumStay'>
              {checkInDateMomentObj && checkOutDateMomentObj ? `${checkInDateMomentObj.format('ll')} - ${checkOutDateMomentObj.format('ll')}` : `Minimum stay: ${this.props.minimum_stay} nights`}
            </div>
          </div>
          <div className='CalendarSelector-TopRight'>
            <div className='CalendarSelector-CheckIn'>
              <div className='CalendarSelector-CheckTitle'>CHECK-IN</div>
              <div className='CalendarSelector-AddDate'>{checkInDateMomentObj ? checkInDateMomentObj.format('L') : 'Add date'}</div>
            </div>
            <div className='CalendarSelector-CheckOut'>
              <div className='CalendarSelector-CheckTitle'>CHECKOUT</div>
              <div className='CalendarSelector-AddDate'>{checkOutDateMomentObj ? checkOutDateMomentObj.format('L') : 'Add date'}</div>
            </div>
          </div>
        </div>
        <div className='CalendarSelector-Bottom'>
          <Calendar minimum_stay={this.props.minimum_stay} booked_date={this.props.booked_date} getCheckInDate={this.props.getCheckInDate} getCheckOutDate={this.props.getCheckOutDate} close={this.props.close} close={this.props.close} clearDate={this.props.clearDate}/>
        </div>
      </div>
    );
  }
}

export default CalendarSelector;