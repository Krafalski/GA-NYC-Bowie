# DBZ

### Objectives:

- **Write an Express application** which will allow users to create
  and read the various hero and villain characters from Dragonball Z tv show.
- Continue to **practice writing SQL commands** and using the pg npm module.

### The Story

![dbz](./giphy.gif)

We need to be able to maintain an up-to-date registry of DBZ
characters and make sure we know who is dead or alive, and whether
each character is a good guy or a bad guy. Each character will have a unique `id`, a `name`, a `team`, an
`img_url` and a `dead` boolean (because half of the
characters that die in DBZ are only temporarily
dead). The team can be `good` or `bad` (characters in dbz are known to
switch sides occasionally).

| characters | *data types* |
| ---- | ------------ |
| id | *PRIMARY KEY* |
| name | *VARCHAR, character's name* |
| dead | *BOOLEAN, either true or false* |
| team | *VARCHAR, can be good or bad* |
| img_url| *VARCHAR, should be a valid url* |

The `dead` attribute should be false whenever you create a new character. 

### Directions

Write a server which allows a user to perform the following actions using the browser:
  - Create a single character
  - View a single character's attributes
  - View all characters

#### Step 1

Setup a new express app, create new database `dbz`, create a
`schema.sql` and load it into your database (and all of the other
dependencies and files/directories included in our node app so far). 

#### Step 2
Create a GET `/characters/new` route, and a view `new.html.ejs` which,
will render an HTML form you will use to create new characters. That form should allow you to enter the
name, mortal status, and team of each character. The form should send
a **POST** request to the POST `/characters`, route.

#### Step 3
Create the POST `/characters` route, which inserts a character into
your database. After the insertion is done you should redirect the
user to `/characters`.

Use your `/characters/new` form to create some characters. (Don't use
manual SQL seeding, use the browser!)

| name | team | img_url |
| ---- | ------------ | ------- |
| Goku | good | http://www.4geekslikeyou.com/wp-content/uploads/2014/02/goku_by_maffo1989-d4vxux4.png |
| Gohan | good | http://vignette3.wikia.nocookie.net/vsbattles/images/7/72/Kid-gohan.png/revision/latest?cb=20150411184446 |
| Bulma | good | http://vignette3.wikia.nocookie.net/vsbattles/images/7/72/Kid-gohan.png/revision/latest?cb=20150411184446 |
| Vegeta | bad | http://vignette3.wikia.nocookie.net/jadensadventures/images/0/07/Vegeta_by_luigicuau10-d5goary.png/revision/latest?cb=20130627192644 |
| Piccolo | bad | http://vignette2.wikia.nocookie.net/villainstournament/images/a/a3/Piccolo_Trans.png/revision/latest?cb=20131119155628 |



#### Step 4
Create the GET `/characters` route which should render a list of all
character's names.

*Bonus*: Make each name an `<a>` tag which links to that characters'
 route `/characters/:id` where `id` is their own id.

#### Step 5
Create a GET `/characters/:id` route which should render a particular
character's profile. I.E if you go to `/characters/1`, and your
,character in your database with `id` 1 is Goku, who is dead and a good
guy, you should render that information to the browser.

![dbz](http://media.giphy.com/media/mp0MD85ur1yOQ/giphy.gif)

***BONUS:***

1. Style your app with some CSS.

