# SQL challange

Take the following schema for a movies and theaters SQL database

``` SQL
 CREATE TABLE Movies (
   Code INTEGER PRIMARY KEY NOT NULL,
   Title TEXT NOT NULL,
   Rating TEXT
 );

 CREATE TABLE MovieTheaters (
   Code INTEGER PRIMARY KEY NOT NULL,
   Name TEXT NOT NULL,
   Movie INTEGER REFERENCES Movies(Code)
 );
```

Create a database with this schema and seed it with some sample data

```SQL
 INSERT INTO Movies(Code,Title,Rating) VALUES(1,'Citizen Kane','PG');
 INSERT INTO Movies(Code,Title,Rating) VALUES(2,'Singin'' in the Rain','G');
 INSERT INTO Movies(Code,Title,Rating) VALUES(3,'The Wizard of Oz','G');
 INSERT INTO Movies(Code,Title,Rating) VALUES(4,'The Quiet Man',NULL);
 INSERT INTO Movies(Code,Title,Rating) VALUES(5,'North by Northwest',NULL);
 INSERT INTO Movies(Code,Title,Rating) VALUES(6,'The Last Tango in Paris','NC-17');
 INSERT INTO Movies(Code,Title,Rating) VALUES(7,'Some Like it Hot','PG-13');
 INSERT INTO Movies(Code,Title,Rating) VALUES(8,'A Night at the Opera',NULL);

 INSERT INTO MovieTheaters(Code,Name,Movie) VALUES(1,'Odeon',5);
 INSERT INTO MovieTheaters(Code,Name,Movie) VALUES(2,'Imperial',1);
 INSERT INTO MovieTheaters(Code,Name,Movie) VALUES(3,'Majestic',NULL);
 INSERT INTO MovieTheaters(Code,Name,Movie) VALUES(4,'Royale',6);
 INSERT INTO MovieTheaters(Code,Name,Movie) VALUES(5,'Paraiso',3);
 INSERT INTO MovieTheaters(Code,Name,Movie) VALUES(6,'Nickelodeon',NULL);
```

## Queries

Use SQL queries to complete the following tasks

1. Select the title of all movies

select title from Movies;


2. Show all the distinct ratings in the database.

SELECT DISTINCT ON (rating) rating FROM Movies;
//also works: select distinct Rating from movies;

3. Show all unrated movies.

SELECT movies from Movies where rating is NULL;

4. Select all movie theaters that are not currently showing a movie.

SELECT name from movietheaters where movie is NULL;

5. Select all data from all movie theaters and, additionally, the data from the movie that is being shown in the theater (if one is being shown).

SELECT * from movietheaters LEFT JOIN Movies ON (movietheaters.movie = Movies.code);

//eliminate the theaters that don't have nulls
select*from movietheaters inner join movies on movietheater.smovie = movies.code;
//alternate
select * from movietheaters left join on moviethaters.movies.code where moviestheaters.movie is not null;

6. Select all data from all movies and, if that movie is being shown in a theater, show the data from the theater.

SELECT * from Movies LEFT JOIN movietheaters ON (Movies.code = movietheaters.movie) where movietheaters.movie IS NOT NULL;


7. Show the titles of movies not currently being shown in any theaters.

SELECT title from Movies LEFT JOIN movietheaters ON (Movies.code = movietheaters.movie) where movietheaters.movie IS NULL;

8. Add the unrated movie "One, Two, Three".

INSERT INTO Movies (title,code) VALUES ('One, Two Three', 9);

9. Set the rating of all unrated movies to "G".

UPDATE Movies SET rating ='G' where rating IS NULL;

10. Remove movie theaters projecting movies rated "NC-17".

DELETE FROM movietheaters USING movies WHERE Movies.code=movietheaters.movie AND movies.rating ='NC-17';

//alternate -> must use IN instead of = if there is more than one 
delete from movietheaters where movie IN (select code from movies where rating ='G')
