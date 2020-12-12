import React from 'react';
import GuestBox from './GuestBox.jsx';

const Container = styled.div`
  display: flex;
  border-top: 1px solid rgb(176, 176, 176);
`;

const Guest = styled.div`
  position: relative;
  flex: 1 1 0%;
`;

const Arrow = styled.div`
  position: relative;
  flex: 1 1 0%;
`;

const GuestTitle = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  font-size: 10px;
  font-weight: 800;
`;

const GuestNum = styled.div`
  padding-left: 12px;
  padding-top: 26px;
  padding-bottom: 10px;
  font-size: 14px;
  line-height: 18px;
`;

const DownUpArrow = styled.img`
  padding-right: 12px;
  right: 0px;
  top: 30%;
  position: absolute;
`;

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
        {this.state.clicked ? <GuestBox maximum_guest={this.props.maximum_guest} close={this.close} adults={this.props.adults} children={this.props.children} totalGuest={totalGuest} infants={this.props.infants} add={this.props.add} subtract={this.props.subtract}/> : null}
      </div>
    );
  }
}

export default OptionsGuests;