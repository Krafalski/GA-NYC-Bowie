- List the names of all NFL teams
select name from teams;


- List the stadium name and head coach of all NFC teams
select stadium, head_coach from teams;


- List the head coaches of the AFC South
select head_coach from teams where conference='AFC' AND division= 'South';


- The total number of players in the NFL
SELECT COUNT(*) FROM players;

- The team names and head coaches of the NFC North and AFC East
select name, head_coach from teams where conference ='NFC' AND division ='North' OR conference='AFC' AND division='East';

- The 50 players with the highest salaries
select name from players order by salary desc limit 50;

- The average salary of all NFL players
select avg(salary) from players;

- The names and positions of players with a salary above 10_000_000
select name, position from players  where salary > 10000000;

- The player with the highest salary in the NFL
select name from players order by salary desc limit 1;
select name, position, salary from players  where salary > 10000000 order by salary desc; --doublecheck that I did it right

- The name and position of the first 100 players with the lowest salaries
select name, position from players order by salary asc limit 100;

- The average salary for a DE in the nfl
select avg(salary) from players where position='DE';

- The names of all the players on the Buffalo Bills
select players.name, teams.name from players, teams where players.team_id=teams.id AND teams.name like 'Buffalo Bills';


- The total salary of all players on the New York Giants
select sum(players.salary) from players, teams where players.team_id=teams.id AND teams.name like 'New York Giants';

- The player with the lowest salary on the Green Bay Packers
select players.name from players, teams where players.team_id=teams.id AND teams.name like '%Green Bay Packers%' order by salary asc limit 1;
