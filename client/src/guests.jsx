import React from 'react';

class Guests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    let containerStyle = {};
    let information = '';
    let number;
    let subtractButton = <button type='button' className='Guests-GuestButton' onClick={() => this.props.subtract(this.props.guest)}>-</button>;
    let addButton = <button type='button' className='Guests-GuestButton' onClick={() => this.props.add(this.props.guest)}>+</button>;
    // if current guest type is Adult
    if (this.props.guest === 'Adults') {
      containerStyle = {'marginTop': '8px'};
      number = this.props.adults;
      // if the number of adult is 1
      if (number === 1) {
        subtractButton = <button type='button' className='Guests- DisableGuestButton' onClick={() => this.props.subtract(this.props.guest)}>-</button>;
      }
      // if the number of total guest (adult + children) is larger than the number of maximum guest
      if (this.props.totalGuest >= this.props.maximum_guest) {
        addButton = <button type='button' className='Guests- DisableGuestButton' onClick={() => this.props.add(this.props.guest)}>+</button>;
      }
    // if current guest type is Children
    } else if (this.props.guest === 'Children') {
      containerStyle = {'marginTop': '24px'};
      information = 'Ages 2-12';
      number = this.props.children;
      // if the number of children is 0
      if (number === 0) {
        subtractButton = <button type='button' className='Guests- DisableGuestButton'  onClick={() => this.props.subtract(this.props.guest)}>-</button>;
      }
      // if the number of total guest (adult + children) is larger than the number of maximum guest
      if (this.props.totalGuest >= this.props.maximum_guest) {
        addButton = <button type='button' className='Guests- DisableGuestButton' onClick={() => this.props.add(this.props.guest)}>+</button>;;
      }
    // if current guest type is Infants
    } else if (this.props.guest === 'Infants') {
      containerStyle = {'marginTop': '24px'};
      information = 'Under 2';
      number = this.props.infants;
      // if the number of infants is 0
      if (number === 0) {
        subtractButton = <button type='button' className='Guests- DisableGuestButton' onClick={() => this.props.subtract(this.props.guest)}>-</button>;
      }
      // if the number of infants is 5
      if (number === 5) {
        addButton = <button type='button' className='Guests- DisableGuestButton'  onClick={() => this.props.add(this.props.guest)}>+</button>;;
      }
    }

    return (
      <div><h1>Guests</h1></div>
      <div className='Guests-Container' style={containerStyle}>
        <div className='Guests-Left'>
          <div className='Guests-GuestType'>{this.props.guest}</div>
          <div className='Guests-GuestTypeInf'>{information}</div>
        </div>
        <div className='Guests-Right'>
          {subtractButton}
          {number}
          {addButton}
        </div>
      </div>
    );
  }
}

export default Guests;

