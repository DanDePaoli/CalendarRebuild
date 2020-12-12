import React from 'react';
import OptionsDates from './options-dates.jsx';
import OptionsGuests from './options-guests.jsx';

const Options = (props) => (
  <div className="Options-Container">
    <OptionsDates minimum_stay={props.minimum_stay} booked_date={props.booked_date} getCheckInDate={props.getCheckInDate} getCheckOutDate={props.getCheckOutDate} checkInDateMomentObj={props.checkInDateMomentObj} checkOutDateMomentObj={props.checkOutDateMomentObj} clearDate={props.clearDate}/>
    <OptionsGuests maximum_guest={props.maximum_guest} adults={props.adults} children={props.children} infants={props.infants} add={props.add} subtract={props.subtract}/>
  </div>
);

export default Options;