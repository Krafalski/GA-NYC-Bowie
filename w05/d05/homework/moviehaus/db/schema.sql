DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS movies_more_info;

CREATE TABLE movies (
       id SERIAL UNIQUE PRIMARY KEY,
       title VARCHAR(255),
       year INT,
       img_url VARCHAR(255),
       times VARCHAR (225)
);



-- don't know if I'll need it, but if I do...this is what it would be for the one movie view or else just pull data from other database or something?

-- else just serve as reference for the website
CREATE TABLE movies_more_info (
       id SERIAL UNIQUE PRIMARY KEY,
       title VARCHAR(255),
        year INT,
       description TEXT,
       img_url VARCHAR(255),
       times VARCHAR (225),
       rating VARCHAR(255),
       director VARCHAR(255),
       actors VARCHAR(255),
       plot TEXT
);
