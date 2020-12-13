import React from 'react';



const PlaceInfo = (props) => (
  <div id ="PlaceInfo-Container">
    <span className='PlaceInfo-Left'>
      <span className='PlaceInfo-Fee'>${props.nightly_fee}</span>
      <span className='PlaceInfo-Nightly'>/ night</span>
    </span>
    <span className='PlaceInfo-Right'>
      <span className='PlaceInfo-Star'>★</span>
      <span className='PlaceInfo-Rating'>{props.rating}</span>
      <span className='PlaceInfo-Reviews'>({props.reviews})</span>
    </span>
  </div>
);

export default PlaceInfo;