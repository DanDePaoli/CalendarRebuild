import React from 'react';

const Container = styled.div`
  margin-bottom: 24px;
  align-items: center;
  display: flex;
  width: 100%;
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 400;
`;

const Left = styled.div`
  flex: 1 1 0%;
`;

const Right = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 104px;
  height: 32px;
  color: rgb(34, 34, 34);
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
`;

const GuestType = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
`;

const GuestTypeInf = styled.div`
  font-size: 14px;
  line-height: 18px;
  padding-top: 4px;
`;

const GuestNum = styled.div`
  position: relative;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
`;

const GuestButton = styled.button`
  width: 32px;
  height: 32px;
  display: inline-flex;
  color: rgb(113, 113, 113);
  font-family: inherit;
  justify-content: center;
  padding-bottom: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(176, 176, 176);
  background: rgb(255, 255, 255);
  border-radius: 50%;
  font-size: 22px;
  cursor: pointer;
  text-align: center;
  touch-action: manipulation;
  align-items: center;
  margin: 0px;
  text-decoration: none;
  outline: none;
  :hover {
    color: rgb(34, 34, 34);
    border-color: rgb(34, 34, 34);
  }
`;

const DisableGuestButton = styled.button`
  width: 32px;
  height: 32px;
  display: inline-flex;
  font-family: inherit;
  justify-content: center;
  padding-bottom: 4px;
  border-width: 1px;
  border-style: solid;
  background: rgb(255, 255, 255);
  border-radius: 50%;
  font-size: 22px;
  text-align: center;
  touch-action: manipulation;
  align-items: center;
  margin: 0px;
  text-decoration: none;
  outline: none;
  cursor: not-allowed;
  color: rgb(235, 235, 235);
  border-color: rgb(235, 235, 235);
`;

class Guest extends React.Component {
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
      // <div className='Guests-Container' style={containerStyle}>
      //   <div className='Guests-Left'>
      //     <div className='Guests-GuestType'>{this.props.guest}</div>
      //     <div className='Guests-GuestTypeInf'>{information}</div>
      //   </div>
      //   <div className='Guests-Right'>
      //     {subtractButton}
      //     {number}
      //     {addButton}
      //   </div>
      // </div>
    );
  }
}

export default Guest;

