/*CREATE DATABASE burgers_db;
USE burgers_db;
*/
-- Use the database created by Jaws
USE cis78jezq038saeu;
CREATE TABLE burgers(
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(200) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);
