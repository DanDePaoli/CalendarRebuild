const express = require("express");
const path = require("path");
const app = express();
const port = 3001;
const db = require('../db/index.js');

app.use(express.json());
app.use(express.static(path.join(__dirname,"../client/dist")));

app.listen(port, (err) => {
if(err){
  console.log(err);
} else {
  console.log("The server is listening on port ", port);
}
});


// app.get('/rentalpricing', (req, res) => {
//   model.getPricing((err, results) => {
//     if(err) {
//       console.log(err);
//       res.status(404).send();
//     } else {
//       res.status(200).send(results);
//     }
//   });
// })

// app.post('/bookings', (req, res) => {
//   console.log(req.body);
//   model.insertBooking(req.body, (err, results) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(201).send();
//     }
//   })
// })



// Dependency
// const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
// const path = require('path');
// const expressStaticGzip = require("express-static-gzip");
// const db = require('../db/index.js');

// const app = express();
// const PORT = 3011;
// const publicPath = path.join(__dirname, '/../public');

// // Middleware
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use('/rooms/:room_id', expressStaticGzip(publicPath, {
//   enableBrotli: true,
//   orderPreference: ['br']
// }));

// Route
// GET request to '/rooms/:room_id/reservation' route
app.get('/rooms/:room_id/reservation', (req, res) => {
  // declare query string
  let queryString = 'SELECT rooms.nightly_fee, rooms.rating, rooms.reviews, rooms.minimum_stay, rooms.maximum_guest, reservations.id, reservations.booked_date FROM rooms, reservations WHERE rooms.id = ? AND rooms.id = reservations.room_id ORDER BY reservations.booked_date;';
  // declare query params
  let queryParams = [req.params.room_id];
  // get all the informations and reservations of a specify room with the room_id from the endpoint
  db.query(queryString, queryParams, function(error, results, fields){
    if (error) {
      console.log("Failed to get data from databases: ", error);
      res.status(404).send(error);
    } else {
      console.log("Succeed to get data from databases");
      res.status(200).send(results);
    }
  });
});

// POST request to '/rooms/:room_id/reservation' route
app.post('/rooms/:room_id/reservation', (req, res) => {
  // get the check_in date from request
  let check_in = moment(req.body.check_in);
  // get the check_out date from request
  let check_out = moment(req.body.check_out);
  // create a list of dates in YYYY-MM-DD format that started from the check_in date to the check_out date
  let dates = [];
  for (let i = check_in; i <= check_out; check_in.add(1, 'days')) {
    dates.push(check_in.format('YYYY-MM-DD'));
  }
  // iterate over the dates array
  for (let i = 0; i < dates.length; i++) {
    // declare query string
    let queryString = 'INSERT INTO reservations (room_id, booked_date) VALUES (?, ?)';
    // declare query params
    let queryParams = [req.params.room_id, dates[i]];
    // insert current date into reservations table where room_id is equal to the room_id from the endpoint
    db.query(queryString, queryParams, (error, results, fields) => {
      if (error) {
        console.log(`Failed to insert data to reservations table where room id = ${req.params.room_id}: `, error);
        res.status(404).send(error);
      } else {
        console.log(`Success to insert data to reservations table where room id = ${req.params.room_id}`);
        res.status(200).send();
      }
    });
  }
});

// Start server
// app.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`);
// });
