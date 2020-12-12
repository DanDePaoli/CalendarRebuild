import React from 'react';
import CalendarSelector from './calendar-selector.jsx';
import moment from 'moment';


class OptionsDate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }
  }

  handleClick() {
    this.setState({
      clicked: true
    });
  }

  close() {
    this.setState({
      clicked: false
    });
  }

  checkClickStatus() {
    if (this.state.clicked) {
      return <CalendarSelector minimum_stay={this.props.minimum_stay} booked_date={this.props.booked_date} close={this.close.bind(this)} getCheckInDate={this.props.getCheckInDate} getCheckOutDate={this.props.getCheckOutDate} checkInDateMomentObj={this.props.checkInDateMomentObj} checkOutDateMomentObj={this.props.checkOutDateMomentObj} clearDate={this.props.clearDate}/>;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <div className='OptionsDates-Container' onClick={this.handleClick.bind(this)}>
          <div className='OptionsDates-CheckIn'>
            <div className='OptionsDates-CheckTitle'>CHECK-IN</div>
            <div className='OptionsDates-AddDate'>{this.props.checkInDateMomentObj ? this.props.checkInDateMomentObj.format('L') : 'Add date'}</div>
          </div>
          <div className='OptionsDates-CheckOut'>
            <div className='OptionsDates-CheckTitle'>CHECKOUT</div>
            <div className='OptionsDates-AddDate'>{this.props.checkOutDateMomentObj ? this.props.checkOutDateMomentObj.format('L') : 'Add date'}</div>
          </div>
        </div>
        {this.checkClickStatus()}
      </div>
    );
  }
}

export default OptionsDate;