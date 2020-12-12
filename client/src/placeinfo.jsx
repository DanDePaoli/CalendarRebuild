import React from 'react';



const PlaceInfo = (props) => (
  <div id ="PlaceInfo-Container">
    <div className='PlaceInfo-Left'>
      <span className='PlaceInfo-Fee'>${props.nightly_fee}</span>
      <span className='PlaceInfo-Nightly'>/ night</span>
    </div>
    <div className='PlaceInfo-Right'>
      <span className='PlaceInfo-Star'>★</span>
      <span className='PlaceInfo-Rating'>{props.rating}</span>
      <span className='PlaceInfo-Reviews'>({props.reviews})</span>
    </div>
  </div>
);

export default PlaceInfo;