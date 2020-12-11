import React from 'react';
import axios from 'axios';
// import $ from 'jquery';
import moment from 'moment';
// import styled from 'styled-components';
import Fees from './fees.jsx';
import Options from './options.jsx';
import PlaceInfo from './placeinfo.jsx';


class App extends React.Component {
constructor(props){
super(props);
this.state = {
  roomId: null,
  allData: [],
  nightly_fee: 0,
  rating: 0,
  reviews: 0,
  minimum_stay: 0,
  maximum_guest: 0,
  booked_date: [],
  checkInDateMomentObj: null,
  checkOutDateMomentObj: null,
  mouseX: 0,
  mouseY: 0,
  adults: 1,
  children: 0,
  infants: 0,
  hover: false

}
// this.getCheckInDate = this.getCheckInDate.bind(this);
// this.getCheckOutDate = this.getCheckOutDate.bind(this);
// this.clearDate = this.clearDate.bind(this);
// this.postReservationData = this.postReservationData.bind(this);
// this.toggleHover = this.toggleHover.bind(this);
// this.handleMouseMove = this.handleMouseMove.bind(this);
// this.add = this.add.bind(this);
// this.subtract = this.subtract.bind(this);
}

render () {



  return (
<div className="Outer">
<div className="Menu">
<PlaceInfo/>
<Options/>
</div>
</div>
  );

}


}

export default App;