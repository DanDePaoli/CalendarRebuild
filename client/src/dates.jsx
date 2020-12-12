import React from 'react';
import CalendarModal from './calendarmodal.jsx';
import moment from 'moment';



class Dates extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }
  }

  // handleClick() {
  //   this.setState({
  //     clicked: true
  //   });
  // }

  // close() {
  //   this.setState({
  //     clicked: false
  //   });
  // }

  // checkClickStatus() {
  //   if (this.state.clicked) {
  //     return <CalendarBox minimum_stay={this.props.minimum_stay} booked_date={this.props.booked_date} close={this.close.bind(this)} getCheckInDate={this.props.getCheckInDate} getCheckOutDate={this.props.getCheckOutDate} checkInDateMomentObj={this.props.checkInDateMomentObj} checkOutDateMomentObj={this.props.checkOutDateMomentObj} clearDate={this.props.clearDate}/>;
  //   } else {
  //     return null;
  //   }
  // }

  render() {
    return (
      <div>
        <h1>Dates</h1>
        {/* <div className ='Dates-Container' onClick={this.handleClick.bind(this)}>
          <div className ='Dates-CheckIn'>
            <div className ='Dates-CheckTitle'>CHECK-IN</div>
            <div className ='Dates-AddDate'>{this.props.checkInDateMomentObj ? this.props.checkInDateMomentObj.format('L') : 'Add date'}</div>
          </div>
          <div className ='Dates-CheckOut'>
            <div className ='Dates-CheckTitle'>CHECKOUT</div>
            <div className ='Dates-AddDate'>{this.props.checkOutDateMomentObj ? this.props.checkOutDateMomentObj.format('L') : 'Add date'}</div>
          </div>
        </div>
        {this.checkClickStatus()} */}
      </div>
    );
  }
}

export default Dates;