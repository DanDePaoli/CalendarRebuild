import React from 'react';
import GuestsSelector from './guests-selector.jsx';

class OptionsGuests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }
    this.close = this.close.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  close() {
    this.setState({
      clicked: false
    });
  }

  render() {
    let arrow;
    if (this.state.clicked) {
      arrow = <img className='OptionsGuests-DownUpArrow' style={{transform: 'rotateX(180deg)'}}  src="https://img.icons8.com/android/24/000000/expand-arrow.png"/>
    } else {
      arrow = <img className='OptionsGuests-DownUpArrow' src="https://img.icons8.com/android/24/000000/expand-arrow.png"/>
    }

    let infants = '';
    if (this.props.infants === 1) {
      infants = `, ${this.props.infants} infant`;
    } else if (this.props.infants > 1) {
      infants = `, ${this.props.infants} infants`;
    }

    let totalGuest = this.props.adults + this.props.children;
    let guest = 'guest';
    if (this.props.adults + this.props.children > 1) {
      guest = 'guests';
    }

    return (
      <div className='OptionsGuests-Container'>
        <div className='OptionsGuests-Guest' onClick={this.handleClick}>
          <div className='OptionsGuests-GuestTitle'>GUESTS</div>
          <div className='OptionsGuests-GuestNum'>{totalGuest} {guest}{infants}</div>
        </div>
        <div className='OptionsGuests-Arrow' onClick={this.handleClick}>
          {arrow}
        </div>
        {this.state.clicked ? <GuestsSelector maximum_guest={this.props.maximum_guest} close={this.close} adults={this.props.adults} children={this.props.children} totalGuest={totalGuest} infants={this.props.infants} add={this.props.add} subtract={this.props.subtract}/> : null}
      </div>
    );
  }
}

export default OptionsGuests;