## Learning Objectives

- Build a full scale Ruby on Rails application
- Describe and implement user sessions and auth in Rails
- Practice using Rails helpers
- Practice with multi-relational objects

take 10 minutes to quickly skim through the [getting started guides](http://guides.rubyonrails.org/getting_started.html)

Don't start writing any code..

## Initial Rails App Set-Up
`gem install rails` this only ever needs to be done once unless you need to install a different version of Rails.

This installs Rails for our version of Ruby. Side note here to remember that if you need to install a new version of Ruby you'll need to install Rails and Pry and whatever other gems again.

However, just like in Node/Express we don't `gem install` each module globally we install them to the Rails app and we'll see how in a second.

---

Make a new rails app called `tunr_app`

Rails includes some new command-line tools, so if you're using rbenv you'll need to rehash, which will get your Ruby environment back into order for you.

`rbenv rehash`

`rails new tunr_app -d postgresql`

GOTCHA: Definitely make sure you tack on the word app to the end of your rails name or something else that distinguishes it from stuff that might exist in your code/database named tunr. Confusion will ensue.


### Walking through the folders and the response cycle compared to Node/Express


```
Rails
                                         -----> Model <----> DB
                                         |         |
            response        request      |         |
   Browser <-------- server/router -------> controller <--
                             GET         ^
                             PUT         |
                             POST         -----> view <----> html/images/css/js
                             DELETE

```
```
Node/Express

                               |-----> PG Middleware <----> DB
                               |         |         |
             response      request       |         |
    Browser <-------- server/router --> router <---
                              GET         ^
                              PUT         |
                              POST         -----> view <----> html/images/css/js
                              DELETE




```

Let's test this out and see what happens.

Run `rails server` to start the server. We should all get a sweet error!

Take two minutes to read through it.

### The Database! but wait...

You will still need to run `pgstart` so you can connect to your database.
run the command

`rake db:create`

Look inside of psql and look at what was created.
  three databases! production, development, and test


Cool DB is created so now what?

Check the server again. What do we have now?

Let's do step 2 and uncomment line 6 we're just going to follow our errors for a couple minutes.

### The Database! but actually...

So how do we add tables to the database: Take 10 minutes to read about migrations.

http://guides.rubyonrails.org/active_record_migrations.html

DO NOT MIGRATE YET. We need to set up our migrations first.

Set up a migration for Users.

`rails g migration CreateUsers`


We can see from the output that it has created a new director and a file for us inside of the db directory.

There is definitely a specific syntax here. Remember back to when DB was talking about DSL's? The language we use to run migrations is a DSL and frankly, I'm super sorry about this, but it's not a good one. Don't feel bad or worry about memorizing it. I have to look it up every single time as do most of the Rails developers I know.

Correct naming here and pluralization is _VITAL_ User/**s** table, plural.

```  
def change
  create_table :users do |t|
    t.string :username
    t.string :password_digest
  end
end
```

**You do** (30mins)

```
Make migrations for the following.

# Songs

- Should have the following attributes:
  - title - string
  - album - text
  - preview_url - string
  - artwork - string
  - price - integer
  - artist_id - references  

# Artists

- Should have the following attributes:
  - name - string
  - img_url - text
  - nationality - string

# Playlists

- Should have the following attributes:
  - name - string
```

# PlaylistsSongs Join table

Set up the join table. `rails g migration CreateJoinTable playlists songs`

- Should have the following attributes
  - playlist_id - integer
  - song_id - integer


When finished with all the migrations run the migrate command. `rake db:migrate`


###  Models

Spend 10 minutes reading through Rails documentation on [validations](http://guides.rubyonrails.org/active_record_validations.html)

Set up the User (singular) model with validations.

Create user.rb in the model directory.

Most things we build in rails needs to inherit from a specific piece of rails
Models inherit from `ActiveRecord::Base`

In user.rb

`validates :username, presence: true, uniqueness: true
 has_secure_password`

 **You do** (15mins)

Follow the above steps for the Song object

Set up validations on Song
- should validate the presence of title, album, preview_url, artwork
- should validate that price is a number, and is between 1 and 99

### Relationships

We have the right foreign keys in our database but Rails requires that we actually specify our Relationships/Associations

Spend 10 more minutes reading up on [associations](http://guides.rubyonrails.org/association_basics.html)

- The song class should have the following relationship setups

- should belongs to an artist
- should have a many to many relationship with playlists

You're going to build this playlists model next


**You do** 30 mins

```
#Playlist

- should have a many to many relationship with songs
- should validate the presence of name
- should validate the uniqueness of name
- should have a method `add_song(song)` on the model. Leave empty for now
- should have a method `remove_song(song)`. Leave empty for now.



# Artist

- should have many songs
- should delete all of the artists songs if the artist is deleted
- should validate the presence of name and if name is not entered give a message of "Name can not be blank"
- should validate the presence of name and if nationality is not entered give a message of "Nationality can not be blank"
- should validate the presence of name and if img_url is not entered give a message of "Photo can not be blank"
- should validate that the genre the user inputs is valid. Valid options are Electronic, House, Jazz, Indie, Hip Hop

```

#Seed

**We do**

With the db all setup lets seed our database.

let's checkout out the rails console.

`rails c`

Let's spend 10 minutes playing around with ActiveRecord in the console.

[Seed Link](https://github.com/ga-students/WDI_skywalker_instructors/blob/master/w08/labs_homework/tunr_app/db/seeds.rb)


### Routes

No docs this time. The routes.rb file itself has some sweet documentation.

**We do**

We need to set up our routes for our application.


Set up a root route. So we're going to modify and remove all of our dummy welcome controller, view, and routes and make real ones.

- `root to: 'users#new'`

going to throw a view error
  - so let's make a view
    users > view


**You do**(7 mins)

```
Set up route for the following

# users
- should only have new, create, show, destroy

# songs
- should have all seven routes

#artists
- should have all seven routes

# playlists
- should have all seven routes
```

**We do**

- update the playlist route to have members of add_song and remove_song

```ruby
 resources :playlists do
  member do
    put 'add_song'
    put 'remove_song'
  end
 end
 ```


### Auth
https://quickleft.com/blog/rails-tip-validating-users-with-has_secure_password/

add routes for sessions. We need a get a post and a delete.

```ruby
 get 'sessions/new' => 'sessions#new'
 post 'sessions' => 'sessions#create'
 delete 'sessions' => 'sessions#destroy'
```

### Controllers

We will build the users controller together

**You do** (25 min)

```
# Song Controller

- index - should have an instance variable with all the songs
- show - should find an individual song by id
- new - should have an instance variable song which is set to a new song. Should have an instance variable artists which is all artists
- create - should create a new song based on the song params. It should redirect to the song path of the created song.
- edit - should have an instance variable song which is a song found by its id. It should have an instance variable artists set to all the artists.
- update - should find a song by id and update the song with the song params.
- destroy - should find a song by id and destroy that song. It should then redirect to the songs path.
- song_params - should require all of the needed information to create a song.

# Artist Controller

- index - should have an instance variable with all the artists
- show - should find an individual artist by id
- new - should have an instance variable artist which is set to a new artist.
- create - should create a new artist based on the artist params. It should redirect to the artist path of the created artist.
- edit - should have an instance variable artist which is a artist found by its id.
- update - should find a artist by id and update the artist with the artist params.
- destroy - should find a artist by id and destroy that artist. It should then redirect to the artists path.
- artist_params - should require all of the needed information to create a artist.

```


**We do** (30 min)

- set up application, session,  user, and playlist controller together.



# IF TIME TODAY START VIEWS

**We do**
- Set up the application layout.

**You do**

```
# users
- Set up a view for the new user form. This form should accept inputs for username, password, password_confirmation inside of a div with the class of form.
- Set up a view for show user. This view should display at minimum the username and a button to delete the user inside of a div with the id of `user-page`.

# artists

- Set up an artist partial. The partial should have a div with the class of artist-all. Inside of this div display the artist name, img_url and nationality. Should display a link to the edit page if you are on the show page for the artist. Should display a link to the view page if you are on the index page.

- Set up a form partial. The form partial should accept all of the information needed to create a new artist.

- Set up an edit view. This view should render the form partial insdie of a div with the class of form. It should also display a link to delete the artist.
- Set up the index view. The index view should have a link to add a new artist. It should render the artist partial.
- Set up the new view. It should render the form partial inside of a div called form.

```

**We do**

- Set up the show route. Should render the artist partial. Should also render all of the songs for an artist, using the songs partial(we havent made this yet but we will set it up now). We need to send locals to this partial.

#songs

- Set up the song partial.


**You do**

```
- Set up your form partial. This form should accept all of the proper params for a song. You should use a `collection_select` for the artists. You will have to look this up.

- Set up the edit view. Should render the form partial.
- Set up the index view. Should render the song partial for each song. Locals should be song, player true, edit false, playlist false.
- Set up the new view. Should render the form partial.
- Set up the show view. Should render the song partial, locals should be song, player true, edit true, playlist false.

```


**You do**

```
#playlists
- Set up the form partial. Should accept all of the proper params for a form.
- Set up the edit view. Should render the form partial.
- Set up the new view. Should render the form partial.
- Set up the index view. Should have a link to add a new playlist. Should render each playlists name and have a link to view the playlist.

```
**We do**

- Set up playlist show route.





#BREATHE AND RELAX WE JUST BUILT A GIANT RAILS APP.
