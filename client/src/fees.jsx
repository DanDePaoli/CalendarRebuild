import React from 'react';

const Fees = (props) => {

  let lastEntry = {
    'paddingBottom': '0px'
  };

  return (
    <div>
      <div className='Fees-Message'>You won't be charged yet</div>
      <div className='Fees-Fees'>
        <ul className='Fees-List'>
          <li className='Fees-ListEntry'>
            <span className='Fees-EntryLeft'>
              ${props.nightly_fee} x {props.totalNight} nights:
            </span>
            <span className='Fees-EntryRight'>
              ${props.totalNightlyFee}
            </span>
          </li>
          <li className='Fees-ListEntry'>
            <span className='Fees-EntryLeft'>
              Cleaning fee:
            </span>
            <span className='Fees-EntryRight'>
              ${props.cleaningFee}
            </span>
          </li>
          <li className='Fees-ListEntry' style={lastEntry}>
            <span className='Fees-EntryLeft'>
              Service fee:
            </span>
            <span className='Fees-EntryRight'>
              ${props.serviceFee}
            </span>
          </li>
        </ul>
        <ul className='Fees-Total'>
          <span className='Fees-TotalLeft'>Total:</span>
          <span className='Fees-TotalRight'>${props.totalFee}</span>
        </ul>
      </div>
  </div>
  );
};

export default Fees;