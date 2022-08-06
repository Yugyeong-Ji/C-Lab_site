const mysql = require('mysql');
const connect = mysql.createPool({
  host: "61.77.238.153",
  port: 13500,
  user: "clab",
  password: "DB@admin123!",
  database: "clab",
});

module.exports = connect;