DROP TABLE if EXISTS presidents;

CREATE TABLE presidents (
 id SERIAL PRIMARY KEY UNIQUE,
 name VARCHAR(255),
 term_start_date DATE,
 term_end_date DATE,
 political_party VARCHAR(255),
 birth_location VARCHAR(255),
 birth_date DATE,
 death_location VARCHAR(255),
 death_date DATE,
 img_url VARCHAR(255)
);
