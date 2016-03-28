...
app/controllers/application_controller.rb:
  * [ 6] [TODO] what is happening here? authenticate method
  Checks if there is a session that has a value (not nil, when a user logs out the value is set to nil, or starts out as nil.  If there is no value for session then redirect to new user path).
  * [11] [TODO] what is happening here? current_user method
  this checks if the session is not nil then it finds the session of the user and see if it matches??

app/controllers/artists_controller.rb:
  * [40] [TODO] Strong Params - strong params is a security measure, only allowing the parameters defined here. The artist is required, and name, img nationality and genre are permitted. However, anything that does not match those params will be blocked.

app/controllers/playlists_controller.rb:
  * [ 3] [TODO] checkout other controller actions
  before_action - prevents using the actions unless user is logged in ...???????
  * [44] [TODO] Add Song method
  set the value of playlist to the params[:id]
  the value of song to the params:[:id]
  then the .add_song method must be coming from somewhere else? from app/models/playlist.rb which has an add_song method ? Models are ruby classes that interact with the database. The controller is getting input from the client and then handling the requests and sends them to the models which give back information for the controller to send back out as a response. Maybe?
  * [48] [TODO] playlist.add_song ??
  see previous
  * [54] [TODO] Remove Song Method
  This is getting the params that were inputted/requested somehow by a user, then it is interacting with playlist model that interacts with the database and sends information back to the controller that will send the information back to the user, in this case, once the song is removed there is a redirection to the playlist path.


app/controllers/sessions_controller.rb:
  * [ 3] [TODO] Explain sessions in Rails
  user is the username in the params  and then if the user and password match then the user session is set to the current user id and they are redirected to the artists path.
  Otherwise they ar redirected to the splash path - which is a path I am having a hard time finding- I am guessing it is the login page?

  another thing is that the session can be destroyed which will end the session by setting the session value to nil and redirects to the root path which is localhost:3000 in config/routes.rb it is "users#new"  and displays the users.new.htm.erb partial inside application.html.erb

app/controllers/users_controller.rb:
  * [ 2] [TODO] before_action?
  This specifies that authenticate must be true or else the rest of the scripts on this page will not run. Except if a new user. This prevents users who are not logged in from using the parts of the site specified.

app/models/playlist.rb:
  * [ 7] [TODO] check these figure out how these work
    self is like this in js. push song into the array songs. But do not push if the song is already in the array.

  * [12] [TODO] this to class methods
   remove this/self song if the song is in the playlist

app/views/artists/_artist.html.erb:
  * [ 2] [TODO] Whats going on with this partial?? why isn't it an instance variable- depening if it is on the route /artists or artists/:id. WILD GUESS : from artists/index.html.erb  <%= render @artists%> tells this partial to render each artist via magic?? When the user is at /artists/:id then the specific artist will render- based on the if/else statement. In trying to code this for my own app- it seems that in index.html where <%= @artist %> is- it LOOKS SPECIFICALLY for a partial named _artist.html.erb where it then does a kind of foreach loop generating all the items from the artist table. 

app/views/artists/new.html.erb:
  * [ 2] [TODO] what's this render partial syntax?   <%= render partial: 'form'%> this will render _form.html.erb. The _ seems to mean partial?

app/views/layouts/application.html.erb:
  * [ 5] [TODO] Stylesheet link tags?
  Stylesheet link tags? in app/assets/stylesheets there is a file named application.css - I guess this is what it is accessing. 'data-turbolinks-track' keeps the instance of the css 'alive' between pages and only updates the parts that change
  https://github.com/turbolinks/turbolinks-classic/blob/master/README.md
  * [19] [TODO] what's a form_tag for

app/views/playlists/index.html.erb:
  * [ 5] [TODO] link_to?
  1. when creating a new user it goes here, which is a view. The view is broken, but when the TODO is removed it loads a page with one link that goes to add new artist, and also would show artists, if there were any there, but right now there are not.
  the text displayed, as a link is
  <%= link_to "Add a new artist?",
  then, after the comma, new_artist_path
app/views/songs/show.html.erb:
  * [ 2] [TODO] what are these options?
   passes in the @song as a local variable, then also player with a value of true and edit with a value of true- which will render _song.html.erb with these variables
