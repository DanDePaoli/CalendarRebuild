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
            <span className='Fees-ListEntryLeft'>
              ${props.nightly_fee} x {props.totalNight} nights:
            </span>
            <span className='Fees-ListEntryRight'>
              ${props.totalNightlyFee}
            </span>
          </li>
          <li className='Fees-ListEntry'>
            <span className='Fees-ListEntryLeft'>
              Cleaning fee:
            </span>
            <span className='Fees-ListEntryRight'>
              ${props.cleaningFee}
            </span>
          </li>
          <li className='Fees-ListEntry' style={lastEntry}>
            <span className='Fees-ListEntryLeft'>
              Service fee:
            </span>
            <span className='Fees-ListEntryRight'>
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