# APIs

This morning you will explore a few of Google's APIs. 

1. First register for the Google Developer Console.
2. Register a new application.
3. Generate an API key and enable Google's Goecoding API.
4. Test that your API key works, by requesting the Geolocation for your home address through Postman or the Browser.
5. Write a simple express application which takes an address from an input field and uses AJAX, to get the Geolocation from your server and display in in the browser. Use good coding practices:
   - load any sensitive information using `dotenv`
   - format you request url as an object. This makes your code more
     readable and extensible. (it will also handle the encoding seamlessly)

Bonus: use the Google Maps API to embed a map on your Web page, and
display the location you entered.

Bonus: use the Google Places API to display the google icon for that
location as the image on the pin which shows up on the map
