# Presidents Viewer Lab Day (reps on reps)!

Today, we're going to be building a full client side rendered crud application.

### Options are:

 - Pair up or work individually, your choice. 
 - If you work in pairs you can switch between driving and coding every 30 minutes or work on individual machines
 - Once an hour we'll break into groups of 5 and retro about that last hour. Lessons learned, bugs, different approaches etc.
 
### What are we building?

A client side rendered CRUD application using the standard tools and modules we've been working with. 

Now including:
	- Jquery/Ajax
	- pg or pg-promise (learn something new why dont you :P)
		- if you go with pg try to abstract it a little but, ie create a function that contains most of the base code to and takes the data and query as parameters
	- Our handrolled templates (the front end pattern jason showed you yesterday)
	- use ES6 (arrow functions, and string templates)
	
This single page application (SPA) will allow users to CRUD Presidents to a presidents database. 


```
  name
  term_start_date
  term_end_date
  political_party
  birth_location
  birth_date
  death_location
  death_date
  
```

1. The goal is that you'll have a form that POSTS presidents to a database based on the above data fields at a minimum, but could include other data. 

2. As a user you should be able to see all the presidents in a database.
	- consider using card design patterns and only show the name and possibly an image 

3. As a user you should be able to see individual Presidents. The display should provide more data than the name.

4. Users should be able to delete and update Presidents, thus rewriting history. dun dun dunnn. 

Bonus: Add user auth with bcrypt
Bonus: Add a related resource — Vice Presidents
Bonus: CSS!! 
Bonus: Shoot, maybe deploy it? What the heck!

### What to think about during this project? 

- Solidify RESTful architecture.
- Hone your skills building the server side of Node/Express CRUD applications. 
- Reaquaint yourselves with the DOM and the specifics of client side rendering (HTML's default behaviors, needing to clear the view, to create and destroy content or show and hide, etc.)
- Apply new knowledge about AJAX and client side rendering. 


