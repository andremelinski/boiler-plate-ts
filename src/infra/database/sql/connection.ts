import { Pool } from "pg";

// Configure the connection pool
const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432, // Default PostgreSQL port
});

export const query = (text: string, params?: any[]) => {
    return pool.query(text, params);
};