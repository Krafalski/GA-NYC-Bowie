### Step 1 - Create a new database
- Create a new database called `realty_db`.

### Step 2 - Create a Schema

Create a schema file named `realty_schema.sql`, and use that file to
create tables in your realty database which should model
`Apartments`, `Offices` and `Storefronts`. They should have the
following properties:

- An Apartment should have:
	- an apartment number
	- number of bedrooms
	- number of bathrooms
	- an address
	- a tenant
	- an occupied status
	- a square footage
	- a price
- An Office should have:
	- an office number
	- a number of floors
	- a square footage
	- a number of cubicles
	- a number of bathrooms
	- an address
	- a company name
	- an occupied status
	- a price
- A storefront should have:
	- an address
	- an occupied status
	- a price
	- whether there is a kitchen or not
	- a square footage
	- an owner
	- whether there is outdoor seating or not

Load the seed file into your database from the command line. Use the
`psql` shell to inspect your schema.

### Step 3 - Define a seed file and seed your database
In a SQL file named `realty_seed.sql`, write commands that will add new entries into your apartment, office and storefront tables. You should create at least 6 entries for each table. Vary the attributes of each entry so no two are alike. From the command line, load this seed file into your database.


### Step 4 - Queries
Create a new markdown file `realty.md` and write the SQL commands you would use to retrieve the following information from your database. Test each command in PSQL to make sure it is correct:

- The average square footage of all offices.
- The total number of apartments.
- The apartments where there is no tenant
- The names of all of the companies
- The number of cubicles and bathrooms in the 3rd office
- The storefronts that have kitchens
- The storefront with the highest square footage and outdoor seating
- The office with the lowest number of cubicles
- The office with the most cubicles and bathrooms
