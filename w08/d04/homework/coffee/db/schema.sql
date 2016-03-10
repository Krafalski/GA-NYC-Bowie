DROP TABLE if exists coffee;

CREATE TABLE coffee (
  coffee_id SERIAL PRIMARY KEY UNIQUE,
  coffee_name VARCHAR (100),
  coffee_price MONEY

);
