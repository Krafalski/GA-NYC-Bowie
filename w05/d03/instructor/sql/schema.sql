DROP TABLE IF EXISTS species;

CREATE TABLE species (
       id SERIAL PRIMARY KEY UNIQUE,
       name VARCHAR(255) NOT NULL,
       coat BOOLEAN
);
