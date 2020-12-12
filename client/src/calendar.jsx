import React from 'react';
import moment from 'moment';


class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMomentObj: moment(),
      checkInDateSelected: false,
      checkInDateMomentObj: null,
      checkOutDateMomentObj: null,
      closestBookedDateAfterCheckInDate: null
    };
  }

  prevMonth() {
    // get a copy of the currentMomentObj
    let newMomentObj = moment(Object.assign({}, this.state.currentMomentObj));
    // get the moment object that one month before currentMomentObj
    newMomentObj = newMomentObj.subtract(1, "month");
    // update currentMomentObj in state
    this.setState({
      currentMomentObj: newMomentObj
    });
  }

  nextMonth() {
    // get a copy of the currentMomentObj
    let newMomentObj = moment(Object.assign({}, this.state.currentMomentObj));
    // get the moment object that one month after currentMomentObj
    newMomentObj = newMomentObj.add(1, "month");
    // update currentMomentObj in state
    this.setState({
      currentMomentObj: newMomentObj
    });
  }

  getAllDaysOfMonth(currentMomentObj) {
    // get the current month in String
    let currentMonth = currentMomentObj.format('MMMM'); // ex. August
    // get the current year in String
    let currentYear = currentMomentObj.format('YYYY'); // ex. 2020
    // get the number of days in the current month in Number
    let numOfDaysInCurrentMonth = currentMomentObj.daysInMonth(); // ex. 31
    // get the first week day of the month in String // 0 to 6 is represent Sunday to Saturday
    let firstWeekDayOfMonth = currentMomentObj.startOf("month").format("d"); // 6
    // get a list of empty days of the month in <td> tag (if August 1 is on Saturday, Sunday to Friday are empty)
    let emptyDayListInTag = [];
    for (let i = 0; i < firstWeekDayOfMonth; i++) {
      emptyDayListInTag.push(<td className="emptySlot">{""}</td>);
    }
    // get a list of non-empty days of the month in <td> tag
    let dayListInTag = [];
    for (let day = 1; day <= numOfDaysInCurrentMonth; day++) {
      // get the date in 'MMMM D YYYY' format
      let date = `${currentMonth} ${day} ${currentYear}`;
      // get the moment object of the date
      let dateMomentObj = moment(date, 'MMMM D YYYY');
      // if the dateMomentObj is exist in booked_date
      // OR the dateMomentObj is before or same as the actuall TODAY MOMENT OBJECT
      // OR the dateMomentObj is before the checkInDateMomentObj
      // OR the dateMomentObj is before or same as the checkOutDateMomentObj
      // OR the dateMomentObj is after or same as the closestBookedDateAfterCheckInDate
      if (this.checkBookedDate(dateMomentObj) || dateMomentObj.isSameOrBefore(moment()) || dateMomentObj.isBefore(this.state.checkInDateMomentObj) || dateMomentObj.isSameOrBefore(this.state.checkOutDateMomentObj) || dateMomentObj.isSameOrAfter(this.state.closestBookedDateAfterCheckInDate)) {
        dayListInTag.push(<div className ='Calendar-EachDayContainer' key={day}><div className ='Calendar-DisableHoverEachDay'>{day}</div></div>);
      // if the dateMomentObj is same as the checkInDateMomentObj
      } else if(dateMomentObj.isSame(this.state.checkInDateMomentObj)) {
        dayListInTag.push(<div className ='Calendar-EachDayContainer' key={day}><div className ='Calendar-EachDay' style={{color:'rgb(255, 255, 255)', background:'rgb(34, 34, 34)'}}>{day}</div></div>);
      } else {
        dayListInTag.push(<div className ='Calendar-EachDayContainer' key={day} onClick={(e) => this.onDayClick(e, dateMomentObj)}><div className ='Calendar-EachDay'>{day}</div></div>);
      }
    }
    // set a totalSlots contains emptyDayListInTag and dayListInTag
    let totalSlotsInTag = [...emptyDayListInTag, ...dayListInTag];
    // change all days in totalSlotsInTag into table format
    let formatedDays = this.formatAllDays(totalSlotsInTag);
    return formatedDays;
  }

  checkBookedDate(dateMomentObj) {
    let same = false;
    // iterate over the booked date
    for (let day = 0; day < this.props.booked_date.length; day++) {
      // get the moment object of the booked date
      let bookedDateMomentObj = moment(this.props.booked_date[day]);
      // if the dateMomentObj is same as the bookedDateMomentObj
      if (dateMomentObj.isSame(bookedDateMomentObj)) {
        same = true;
      }
    }
    return same;
  }

  formatAllDays(totalSlotsInTag) {
    // set a rows hold </td> while going to a new row
    let rows = [];
    // set a cells contain each </td> to assign to each row
    let cells = [];
    // get a calendar structure of a week
    totalSlotsInTag.forEach((day, i) => {
      if (i % 7 !== 0) {
        cells.push(day); // if index not equal 7 that means not go to next week
      } else {
        rows.push(cells); // when reach next week we contain all td in last week to rows
        cells = []; // empty container
        cells.push(day); // in current loop we still push current row to new container
      }
      if (i === totalSlotsInTag.length - 1) { // when end loop we add remain date
        rows.push(cells);
      }
    });
    // Wrap all rows in a </tr>
    let dayInMonthInTag = rows.map((row, i) =>
      <tr key={i}>{row}</tr>
    );
    // return formated days
    return dayInMonthInTag;
  }

  onDayClick(event, dateMomentObj) {
    // if check in date is already selected
    if (this.state.checkInDateSelected) {
      // get the check out date and pass the date to the state in App.jsx
      this.props.getCheckOutDate(dateMomentObj);
      // close the calendar pop up box
      this.props.close();
      // update the checkOutDateMomentObj in state and empty the closestBookedDateAfterCheckInDate
      this.setState({
        checkOutDateMomentObj: dateMomentObj,
        closestBookedDateAfterCheckInDate: null
      });
    } else {
      // get the check in date and pass the date to the state in App.jsx
      this.props.getCheckInDate(dateMomentObj);
      // switch checkInDateSelected to true and update the checkInDateMomentObj in state
      this.setState({
        checkInDateSelected: true,
        checkInDateMomentObj: dateMomentObj
      });
      // get the closest booked date the next to the check in date
      this.getClosestBookedDateAfterCheckInDate(dateMomentObj);
    }
  }

  getClosestBookedDateAfterCheckInDate(dateMomentObj) {
    let closestBookedDate = null;
    // if the check in date is before the first booked date in the booked_date array
    if (dateMomentObj.isBefore(moment(this.props.booked_date[0]))) {
      // closestBookedDate equal to the first booked date in the booked_date array
      closestBookedDate = moment(this.props.booked_date[0]);
    // if the check in date is after the last booked date in the booked_date array
    } else if (dateMomentObj.isAfter(moment(this.props.booked_date[this.props.booked_date.length - 1]))) {
      // closestBookedDate equal to null
      closestBookedDate = null;
    }
    // iterate over the booked date
    for (let day = 0; day < this.props.booked_date.length; day++) {
      // get the moment object of the booked date
      let bookedDateMomentObj = moment(this.props.booked_date[day]);
      // get the moment object of the next booked date
      let nextBookedDateMomentObj = moment(this.props.booked_date[day+1]);
      // if the check in date is between bookedDateMomentObj and nextBookedDateMomentObj
      if (dateMomentObj.isBetween(bookedDateMomentObj, nextBookedDateMomentObj)) {
        // closestBookedDate equal to the second booked date
        closestBookedDate = nextBookedDateMomentObj;
      }
    }
    // update the closestBookedDateAfterCheckInDate in state
    this.setState({
      closestBookedDateAfterCheckInDate: closestBookedDate
    });
  }

  clear() {
    this.setState({
      checkInDateSelected: false,
      checkInDateMomentObj: null,
      checkOutDateMomentObj: null,
      closestBookedDateAfterCheckInDate: null
    });
  }

  render() {
    // get the moment object of current month
    let currentMonthMomentObj = this.state.currentMomentObj;
    // get a copy of the moment object of current month
    let newMomentObj = moment(Object.assign({}, currentMonthMomentObj));
    // get the moment object of next month
    let nextMonthMomentObj = newMomentObj.add(1, 'month');

    // get a list of week days ['Su', 'Mo', 'Tu',	'We',	'Th',	'Fr',	'Sa']
    let weekDayList = moment.weekdaysMin();
    // Wrap all week days in <li> tag
    let weekDayListInTag = weekDayList.map((day, i) =>
      <li className='Calendar-EachWeekDay' key={i}>{day}</li>
    );

    let leftArrow = <svg viewBox="0 0 18 18" role="presentation" style={{height:12, width:12, display:'block', fill:'currentcolor'}}><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" /></svg>;
    let rightArrow = <svg viewBox="0 0 18 18" role="presentation" style={{height:12, width:12, display:'block', fill:'currentcolor'}}><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"/></svg>;

    let prevButton = <button className='Calendar-PrevNextButton' onClick={(e) => this.prevMonth()}>{leftArrow}</button>;
    let nextButton = <button className='Calendar-PrevNextButton' onClick={(e) => this.nextMonth()}>{rightArrow}</button>

    // if currentMonthMomentObj is equal to the actual CURRENT MONTH
    if (currentMonthMomentObj.format('MMMM YYYY') === moment().format('MMMM YYYY')) {
      // disable the prevButton
      prevButton = <button className ='Calendar-DisablePrevButton'>{leftArrow}</button>;
    }

    let keyBoard = <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{display:'block', height:24, width:24, fill:'currentcolor'}}><path d="M29 5a2 2 0 0 1 1.995 1.85L31 7v18a2 2 0 0 1-1.85 1.995L29 27H3a2 2 0 0 1-1.995-1.85L1 25V7a2 2 0 0 1 1.85-1.995L3 5zm0 2H3v18h26zm-8 13v2H11v-2zm3-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm16-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>

    return (
      <div className='Calendar-Container'>
        <div className='Calendar-Top'>
          <div className='Calendar-WeekDaysContainer' style={{left: '0px'}}>
            <ul className='Calendar-WeekDays'>
              {weekDayListInTag}
            </ul>
          </div>
          <div className='Calendar-WeekDaysContainer' style={{right: '0px'}}>
            <ul className='Calendar-WeekDays'>
              {weekDayListInTag}
            </ul>
          </div>
          <div className='Calendar-MonthAndDayContainer'>
            <div className='Calendar-MonthAndDay'>
              <div className='Calendar-SingleCalendar'>
                <div className='Calendar-MonthContainer'>
                    <h1 className='Month'>{currentMonthMomentObj.format('MMMM YYYY')}</h1>
                </div>
                <table className='Calendar-DaysTable'>
                  <tbody>
                    {this.getAllDaysOfMonth(currentMonthMomentObj)}
                  </tbody>
                </table>
              </div>
              <div className='Calendar-SingleCalendar'>
                <div className='Calendar-MonthContainer'>
                    <h1 className='Month'>{nextMonthMomentObj.format('MMMM YYYY')}</h1>
                </div>
                <table className='Calendar-DaysTable'>
                  <tbody>
                    {this.getAllDaysOfMonth(nextMonthMomentObj)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className='Calendar-PrevButtonContainer'>
            {prevButton}
          </div>
          <div className='Calendar-NextButtonContainer'>
            {nextButton}
          </div>
          <div className='Calendar-Keyboard'>
            <button className='Calendar-KeyboardButton'>
              {keyBoard}
            </button>
          </div>
        </div>
        <div className='Calendar-Bottom'>
          <button className='Calendar-ClearButton 'onClick={() => {this.props.clearDate(); this.clear();}}>Clear dates</button>
          <span style={{marginLeft: '16px'}}>
            <button className='Calendar-CloseButton' onClick={this.props.close}>Close</button>
          </span>
        </div>
      </div>
    );
  }
}

export default Calendar;