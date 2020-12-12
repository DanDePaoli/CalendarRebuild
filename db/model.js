const db = require('./index.js');

var randomID = Math.floor(Math.random()*5);

module.exports = {
  getPricing: function(callback){
    db.query(`select * from rentals where id=${randomID}`, (err, results, fields) =>{
      if(err){
        console.log('Results:', results);
      } else {
        // console.log('Results:', results);
        callback(null, results);
      }
    })
  }
}

  createRandomRental: function(rental, callback){
    db.query(`insert into rentals (name, quantity) values ("${grocery.name}", ${grocery.quantity})`, (err, results, fields) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
    // console.log('this is where I would add a grocery');
  }
}