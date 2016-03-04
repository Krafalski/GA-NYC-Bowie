#RDBMS Joins (normalization)

1. What are the 10 most populated cities of the world, in descending order?

2. What is the LEAST populated city in the world?

2.5. How many languages are there in the world? How many countries are in the world? How many cities?

3. What are the 10 most crowded countries of the world (people vs land size) in descending order? (country population/surface area)


4. What is the official language of Fiji?


5. How many people live on each continent?


1. Exactly how many people speak the official language of the country in which Oldenburg is a city?
```
select city.name, country.name, cl.language, cl.isofficial, cl.percentage, country.population, round((cl.percentage * country.population)/100) as german_speakers
from city
left join country 
  on city.countrycode = country.code
left join countrylanguage cl
  on city.countrycode = cl.countrycode
  and cl.isofficial
where city.name like 'Oldenburg';
```


2. BONUS: select the languages and the total count of the cities in which they're spoken, where more than 85% of the population speaks the official language of any country that gained its independence after 1990

```sql
select  country.name as country_name, count(city.name) as city_count, cl.language
from country
inner join countrylanguage cl
  on country.code = cl.countrycode
  and cl.isofficial
  and cl.percentage > 85
  and country.indepyear >1990
inner join city
  on city.countrycode = cl.countrycode
group by language, country_name
order by language;
```
