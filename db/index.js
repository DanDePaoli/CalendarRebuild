var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'calendarrebuild'
});

connection.connect((err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('Connected to DB')
  }
});

module.exports = connection;