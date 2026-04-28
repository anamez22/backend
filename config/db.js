import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'restaurantdb',
  password: '12345',
  port: 5433,
});

export default pool;