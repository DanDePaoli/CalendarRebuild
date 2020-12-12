import React from 'react';
import Guests from './guests.jsx';

class GuestsSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guestList: ['Adults', 'Children', 'Infants']
    };
  }

  render() {
    return (
      <div className='GuestsSelector-Container'>
        {this.state.guestList.map((guest, i) =>
          <Guests key={i} guest={guest} maximum_guest={this.props.maximum_guest} adults={this.props.adults} children={this.props.children} infants={this.props.infants} add={this.props.add} subtract={this.props.subtract} totalGuest={this.props.totalGuest}/>
        )}
        <div className='GuestsSelector-Sentence'>{this.props.maximum_guest} guests maximum. Infants don’t count toward the number of guests.</div>
        <div className='GuestsSelector-Last'>
          <button className='GuestsSelector-Close' onClick={this.props.close}>Close</button>
        </div>
      </div>
    );
  }
}

export default GuestsSelector;