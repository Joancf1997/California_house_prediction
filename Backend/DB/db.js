// https://node-postgres.com/
const { Pool } = require('pg');
require('dotenv').config();

// Create a PostgreSQL pool postgres://username:password@host:port/database_name
const db = new Pool({
  connectionString: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@postgresql:${process.env.PGPORT}/${process.env.PGDATABASE}`,
  // ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

const query = (text, params, callback) => {
  return db.query(text, params, callback)
}


module.exports = { 
  query
}