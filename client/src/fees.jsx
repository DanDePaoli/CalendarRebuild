import React from 'react';

const Fees = (props) => {

  let lastEntry = {
    'paddingBottom': '0px'
  };

  return (
    <div>
      <h1>Fees Please</h1>
      {/* <Message>You won't be charged yet</Message>
      <Fees>
        <List>
          <ListEntry>
            <ListEntryLeft>
              ${props.nightly_fee} x {props.totalNight} nights:
            </ListEntryLeft>
            <ListEntryRight>
              ${props.totalNightlyFee}
            </ListEntryRight>
          </ListEntry>
          <ListEntry>
            <ListEntryLeft>
              Cleaning fee:
            </ListEntryLeft>
            <ListEntryRight>
              ${props.cleaningFee}
            </ListEntryRight>
          </ListEntry>
          <ListEntry style={lastEntry}>
            <ListEntryLeft>
              Service fee:
            </ListEntryLeft>
            <ListEntryRight>
              ${props.serviceFee}
            </ListEntryRight>
          </ListEntry>
        </List>
        <Total>
          <TotalLeft>Total:</TotalLeft>
          <TotalRight>${props.totalFee}</TotalRight>
        </Total>
      </Fees> */}
    </div>
  );
};

export default Fees;