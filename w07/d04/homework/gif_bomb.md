## GIF_BOMB!!
![GIF_BOMB](http://i284.photobucket.com/albums/ll36/Bigsteve87/Gifs/AtomicBomb.gif)

### Learning Objectives
* Pracitce hitting API endpoints. 
* Practice using Ajax requests to get your information
* Practice familiarizing yourself with API documentation.
* Practice rendering DOM elements using jQuery

##### Tonight you will be using your new found skills to get gifs from `Giphy`. 

## Step 0

** We will be using the Giphy API for this homework assignment. 

Every API has its own documentation and its own endpoints. Read about
the Giphy API here : https://github.com/Giphy/GiphyAPI. Read up on all
the different end points. ** 

## Step 1

- Setup and configure a basic express app
- Have express serve your public folder statically


## Step 2

Setup routes on the server, which hit the Giphy API and return JSON to
the browser.

- Here are some routes you should consider implementing. Feel free to
  implement your own

	- `'/'` : Should render your index page 
    
	- `'/random'` : Should make a request to the Giphy `RANDOM API
      Endpoint` and get the JSON for ONE RANDOM gif. 

	- `'/kittens'` : Should make a request to the Giphy `SEARCH API
      Endpoint` and get a JSON for KITTEN GIFS. Limit your gifs to 20
      if you get a lot. 

	- `'/puppies'` : Should make a request to the Giphy `SEARCH API
      Endpoint` and get a JSON for `puppy GIFS`. Limit your gifs to 20
      if you get a lot. 

	- `'/pokemon'` : Should make a request to the Giphy `SEARCH API
      Endpoint` and get a JSON for `pokemon GIFS`. Limit your gifs to
      20 if you get a lot. 

	- `'/searchGif/:searchParameter'` : Should make a request to the
      Giphy `SEARCH API ENDPOINT` and get JSON for whatever the
      `:searchParameter` is.  

	- `'/searchGifById/:id'` : Should make a request to the Giphy
      `SEARCH BY ID API ENDPOINT` and get JSON for the gif that you
      searched for by using the id from `:id` 


## Step 3

#### Lets set up our `index` page

- Make a button for `RANDOM`
- Make a button for `KITTENS`
- Make a button for `PUPPIES`
- Make a button for `POKEMON`
- Have an input field that will accept a searchParameter for searching gifs. Make a button for `SEARCH GIFS` next to that input field
- Have an input field that will accept an ID to search for gifs by
  ID. Make a button for `SEARCH BY ID`

## Step 4

#### Lets set up our frontend javascript

- Create an event listener for the `RANDOM` button. When the button is
  clicked, it should make an AJAX request to our `/random` route,
  which will give us JSON for one random gif. 

- Create an event listener for the `KITTENS` button. When the button
  is clicked, it should make an AJAX request to our `/kittens` route,
  which will give us JSON for 20 kitten gifs. 

- Create an event listener for the `PUPPIES` button. When the button
  is clicked, it should make an AJAX request to our `/puppies` route,
  which will give us JSON for 20 puppies gifs. 

- Create an event listener for the `POKEMON` button. When the button
  is clicked, it should make an AJAX request to our `/pokemon` route,
  which will give us JSON for 20 pokemon gifs. 

- Create an event listener for the `SEARCH GIFS` button. When the
  button is clicked, you should get what the user typed in the input
  field, and make an AJAX request to `/searchGif/:searchParameter`
  with the corresponding search parameter

- Create an event listener for the `SEARCH BY ID` button. When the
  button is clicked, you should get the ID of the gif from the input
  field, and make an AJAX request to `/searchGifById/:id` with the
  corresponding id.

  
## STEP 5

#### Displaying our Gifs

Our front end javascript code should now be able to get JSON
objects which contains info about the gifs. We must now build our DOM.
Make a function which can create DOM elements. It should take a JSON
object as an argument, loop through and create a div for each gif
represnted in the JSON. 

- BONUS : Make it so that when the gifs load, the images are
  static. When you hover over the image they animate. 
  Hint: Giphy gives us different links to the images, explore them.
