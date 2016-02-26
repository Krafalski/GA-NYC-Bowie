DROP TABLE IF EXISTS famous_cats;

CREATE TABLE most_famous_cats (
       id SERIAL UNIQUE PRIMARY KEY,
       name VARCHAR(255),
       description TEXT,
       img_url VARCHAR(255)
);
