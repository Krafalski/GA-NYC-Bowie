
DROP TABLE if EXISTS movies;

CREATE TABLE movies (
  id SERIAL PRIMARY KEY UNIQUE,
  title VARCHAR(255),
  year NUMERIC,
  rating VARCHAR(255),
  director VARCHAR(255),
  actors VARCHAR(255),
  plot VARCHAR(1000),
  img_url  VARCHAR(255),
  showtimes VARCHAR(500)
);
