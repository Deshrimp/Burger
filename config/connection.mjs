import mysql from "mysql"
import dotenv from "dotenv"
// if we're in development we should use dotenv
if (process.env.NODE_ENV !== "production") {
  // Loads the .env file into our environment
  // When we are in production this will be loaded from herokus actual environemtn variables
  // that are set in the "config vars"
  dotenv.config()
}
// get the MySQL connection string from environment
const MySQLConnectionString = process.env.JAWSDB_URL
// create connection to mysql database
const connection = mysql.createConnection(MySQLConnectionString)

export { connection }
